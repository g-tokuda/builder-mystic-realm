import { useEffect, useState } from "react";

interface Shape {
  id: string;
  type: "square" | "diamond" | "circle";
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  isVisible: boolean;
}

export default function RandomShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);

  const createShape = (): Shape => {
    const types: Shape["type"][] = ["square", "diamond", "circle"];
    return {
      id: `shape-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type: types[Math.floor(Math.random() * types.length)],
      x: Math.random() * 90 + 5, // 5-95% to avoid edges
      y: Math.random() * 90 + 5, // 5-95% to avoid edges
      size: Math.random() * 12 + 6, // 6-18px (smaller sizes)
      opacity: 0,
      rotation: Math.random() * 360,
      isVisible: false,
    };
  };

  const addShape = () => {
    const newShape = createShape();

    setShapes((prev) => {
      // Limit to maximum 3 shapes at once
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, newShape];
    });

    // Smart animation sequence
    setTimeout(() => {
      setShapes((prev) =>
        prev.map((shape) =>
          shape.id === newShape.id
            ? { ...shape, isVisible: true, opacity: 0.8 }
            : shape,
        ),
      );
    }, 100);

    // Remove after 4-6 seconds with fade out
    const lifespan = Math.random() * 2000 + 4000; // 4-6 seconds
    setTimeout(() => {
      setShapes((prev) =>
        prev.map((shape) =>
          shape.id === newShape.id
            ? { ...shape, isVisible: false, opacity: 0 }
            : shape,
        ),
      );

      // Remove from array after animation
      setTimeout(() => {
        setShapes((prev) => prev.filter((shape) => shape.id !== newShape.id));
      }, 800);
    }, lifespan);
  };

  useEffect(() => {
    // Add first shape immediately
    setTimeout(addShape, 500);

    // Then add shapes at longer intervals
    const interval = setInterval(() => {
      addShape();
    }, 6000); // Every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const getShapeClasses = (shape: Shape) => {
    const baseClasses = `absolute transition-all duration-700 ease-out`;

    switch (shape.type) {
      case "square":
        return `${baseClasses} border border-foreground bg-transparent`;
      case "diamond":
        return `${baseClasses} bg-foreground`;
      case "circle":
        return `${baseClasses} bg-foreground rounded-full`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={getShapeClasses(shape)}
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            opacity: shape.opacity,
            transform:
              shape.type === "diamond"
                ? `rotate(45deg) scale(${shape.isVisible ? 1 : 0.5})`
                : `rotate(${shape.rotation}deg) scale(${shape.isVisible ? 1 : 0.5})`,
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      ))}
    </div>
  );
}
