import { useEffect, useState } from "react";

interface Shape {
  id: number;
  type: "square" | "diamond" | "circle";
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
}

export default function RandomShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [nextId, setNextId] = useState(0);

  // Add new shape at random position
  const addShape = () => {
    const types: Shape["type"][] = ["square", "diamond", "circle"];
    const newShape: Shape = {
      id: nextId,
      type: types[Math.floor(Math.random() * types.length)],
      x: Math.random() * 100, // 0-100% of container width
      y: Math.random() * 100, // 0-100% of container height
      size: Math.random() * 20 + 8, // 8-28px
      opacity: 0,
      rotation: Math.random() * 360,
    };

    setShapes((prev) => [...prev, newShape]);
    setNextId((prev) => prev + 1);

    // Fade in the shape
    setTimeout(() => {
      setShapes((prev) =>
        prev.map((shape) =>
          shape.id === newShape.id ? { ...shape, opacity: 1 } : shape,
        ),
      );
    }, 100);

    // Fade out and remove the shape after random duration
    const duration = Math.random() * 3000 + 2000; // 2-5 seconds
    setTimeout(() => {
      setShapes((prev) =>
        prev.map((shape) =>
          shape.id === newShape.id ? { ...shape, opacity: 0 } : shape,
        ),
      );

      // Remove from array after fade out
      setTimeout(() => {
        setShapes((prev) => prev.filter((shape) => shape.id !== newShape.id));
      }, 500);
    }, duration);
  };

  useEffect(() => {
    // Add initial shapes
    const initialShapes = Math.floor(Math.random() * 3) + 2; // 2-4 initial shapes
    for (let i = 0; i < initialShapes; i++) {
      setTimeout(() => addShape(), i * 500);
    }

    // Continuously add new shapes
    const interval = setInterval(
      () => {
        // Only add if we don't have too many shapes
        if (shapes.length < 8) {
          addShape();
        }
      },
      Math.random() * 2000 + 1000,
    ); // Every 1-3 seconds

    return () => clearInterval(interval);
  }, [shapes.length, nextId]);

  const getShapeClasses = (shape: Shape) => {
    const baseClasses = `absolute transition-all duration-500 bg-foreground`;

    switch (shape.type) {
      case "square":
        return `${baseClasses} border-2 border-foreground bg-transparent`;
      case "diamond":
        return `${baseClasses} transform rotate-45`;
      case "circle":
        return `${baseClasses} rounded-full`;
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
                ? `rotate(${shape.rotation}deg)`
                : `rotate(${shape.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}
