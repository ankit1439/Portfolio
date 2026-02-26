import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

/**
 * ScrollyCanvas Component
 * 
 * Design Philosophy: Cinematic Minimalism
 * - Canvas is the hero; UI fades into background
 * - Smooth scroll-linked animation with no jarring transitions
 * - Full-bleed canvas with 500vh scroll container for cinematic experience
 */

interface ScrollyCanvasProps {
  frameCount?: number;
  framePrefix?: string;
}

export default function ScrollyCanvas({
  frameCount = 136,
  framePrefix = '/sequence/frame_'
}: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map scroll progress (0-1) to frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  // Preload all images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const paddedIndex = String(i).padStart(3, '0');
        img.src = `${framePrefix}${paddedIndex}_delay-0.059s.png`;

        img.onload = () => {
          loadedImages[i] = img;
          // Update loading state when all images are loaded
          if (loadedImages.filter(Boolean).length === frameCount) {
            setImages(loadedImages);
            setIsLoading(false);
          }
        };

        img.onerror = () => {
          console.error(`Failed to load image: ${img.src}`);
          loadedImages[i] = img;
          if (loadedImages.filter(Boolean).length === frameCount) {
            setImages(loadedImages);
            setIsLoading(false);
          }
        };
      }
    };

    loadImages();
  }, [frameCount, framePrefix]);

  // Render canvas on frame change
  useEffect(() => {
    const unsubscribe = frameIndex.onChange((value) => {
      if (!canvasRef.current || images.length === 0) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Get current frame index (rounded)
      const currentFrameIndex = Math.round(value);
      const img = images[currentFrameIndex];

      if (img && img.complete) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw image with object-fit: cover logic
        const imgAspect = img.width / img.height;
        const canvasAspect = canvas.width / canvas.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (imgAspect > canvasAspect) {
          // Image is wider, fit to height
          drawWidth = canvas.height * imgAspect;
          offsetX = (canvas.width - drawWidth) / 2;
        } else {
          // Image is taller, fit to width
          drawHeight = canvas.width / imgAspect;
          offsetY = (canvas.height - drawHeight) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    });

    return () => unsubscribe();
  }, [images, frameIndex]);

  // Set canvas size to match window
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvasRef.current.getBoundingClientRect();

      canvasRef.current.width = rect.width * dpr;
      canvasRef.current.height = rect.height * dpr;

      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[800vh] w-full bg-background"
    >
      {/* Sticky canvas container */}
      <div className="sticky top-16 md:top-20 h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-accent border-t-transparent rounded-full animate-spin" />
              <p className="text-foreground/60 text-sm font-metadata">
                Loading frames...
              </p>
            </div>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />

        {/* Subtle grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\' /%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' filter=\'url(%23noiseFilter)\' opacity=\'1\'/%3E%3C/svg%3E")',
            backgroundSize: '200px 200px',
          }}
        />
      </div>
    </div>
  );
}
