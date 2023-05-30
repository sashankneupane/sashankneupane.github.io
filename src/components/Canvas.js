import React, { useEffect, useRef, useState } from "react";

const gridSize = 28;
const canvasSize = 560;
const initialCanvasData = Array(gridSize)
  .fill()
  .map(() => Array(gridSize).fill(false));

const MNISTComponent = () => {
  const canvasRef = useRef(null);
  let isDrawing = false;
  const [canvasData, setCanvasData] = useState(initialCanvasData);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const blockWidth = canvas.width / gridSize;
    const blockHeight = canvas.height / gridSize;

    const handleMouseDown = (event) => {
      isDrawing = true;
      const { offsetX, offsetY } = event;
      const blockX = Math.floor(offsetX / blockWidth);
      const blockY = Math.floor(offsetY / blockHeight);
      drawBlock(blockX, blockY);
    };

    const handleMouseMove = (event) => {
      if (!isDrawing) return;
      const { offsetX, offsetY } = event;
      const blockX = Math.floor(offsetX / blockWidth);
      const blockY = Math.floor(offsetY / blockHeight);
      drawBlock(blockX, blockY);
    };

    const handleMouseUp = () => {
      isDrawing = false;
    };

    const drawBlock = (x, y) => {
      ctx.fillStyle = "black";
      ctx.fillRect(x * blockWidth, y * blockHeight, blockWidth, blockHeight);
      updateCanvasData(x, y, true);
    };

    const updateCanvasData = (x, y, value) => {
      setCanvasData((prevCanvasData) => {
        const updatedCanvasData = prevCanvasData.map((row, i) =>
          i === y ? [...row.slice(0, x), value, ...row.slice(x + 1)] : row
        );
        return updatedCanvasData;
      });
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleButtonClick = () => {
    // change true/false canvas data to 1/0
    const formattedCanvasData = canvasData.map((row) =>
      row.map((value) => (value ? 1 : 0))
    );

    console.log(formattedCanvasData)
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={canvasSize}
        height={canvasSize - 1}
        style={{ border: "1px solid black", display: "block" }}
      />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
};

export default MNISTComponent;
