import React, { useState, useEffect } from "react";
import Image from "next/image";

// This functional component represents a custom cursor with a flare effect.
function FlareCursor() {
  // State to track the current cursor position (x, y coordinates).
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // State to track whether the cursor is over a clickable element.
  const [isPointer, setIsPointer] = useState(false);

  const [isHover, setIsHover] = useState(false);

  const accel = 10;
  let last_pos_x = 0;
  let last_pos_y = 0;
  let vel_x = 0;
  let vel_y = 0;

  // Event handler for the mousemove event.
  const handleMouseMove = (e) => {
    // Update the cursor position based on the mouse coordinates.
    // var diff_x = e.clientX - last_pos_x;
    // var diff_y = e.clientY - last_pos_y;


    // var new_x = last_pos_x + (Math.sign(diff_x)==1 ? accel * Math.cos(Math.atan(Math.abs(diff_y/diff_x))) : -accel * Math.cos(Math.atan(Math.abs(diff_x))));
    // var new_y = last_pos_y + (Math.sign(diff_y)==1 ? accel * Math.sin(Math.atan(Math.abs(diff_y/diff_x))) : -accel * Math.sin(Math.atan(Math.abs(diff_y))));

    // last_pos_x = new_x;
    // last_pos_y = new_y;

    setPosition({ x: e.clientX, y: e.clientY });

    // Get the target element that the cursor is currently over.
    const target = e.target;

    // Check if the cursor is over a clickable element by inspecting the cursor style.
    setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") === "move" ||
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
    );

    setIsHover(
      target.getAttribute("hoverable") === "true"
    );

  };
  // Set up an effect to add and remove the mousemove event listener.
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // The empty dependency array ensures that this effect runs only once on mount.

  // Calculate the size of the flare based on whether the cursor is over a clickable element.
  const flareSize = isPointer ? 0 : 30;

  // Adjust the cursor position to create a visual effect when over a clickable element.
  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  // Render the custom cursor element with dynamic styles based on cursor state.
  return (

    <Image
      className={`flare ${isPointer ? "pointer" : ""} ${isHover ? "hoverable" : ""}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
      }}
      src="/cursor.svg"
      height={50}
      width={50}/>

  );
}

// Export the FlareCursor component to be used in other parts of the application.
export default FlareCursor;