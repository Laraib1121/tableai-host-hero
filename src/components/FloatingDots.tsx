import { useEffect, useRef } from "react";

const FloatingDots = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createDot = () => {
      const dot = document.createElement('div');
      const size = Math.random() * 8 + 4;
      const colors = ['#f97316', '#22c55e', '#8b5cf6', '#06b6d4'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      dot.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        opacity: ${Math.random() * 0.3 + 0.1};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float ${Math.random() * 10 + 15}s infinite linear;
        pointer-events: none;
      `;
      
      return dot;
    };

    const container = containerRef.current;
    if (!container) return;

    // Create initial dots
    for (let i = 0; i < 50; i++) {
      container.appendChild(createDot());
    }

    // Add CSS animation keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% {
          transform: translateY(100vh) translateX(-10px) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 0.3;
        }
        90% {
          opacity: 0.3;
        }
        100% {
          transform: translateY(-100px) translateX(10px) rotate(360deg);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default FloatingDots;