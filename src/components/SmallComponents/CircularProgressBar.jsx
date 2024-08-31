import React, { useState, useEffect } from "react";

function CircularProgressBar({
  percentage = 100,
  progressColor = "#879EE4",
  bgColor = "#35475c",
  innerCircleColor = "#6792b1",
  speed = 50,
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let startValue = 0;
    const progressInterval = setInterval(() => {
      startValue += 1;
      setProgress(startValue);
      if (startValue >= percentage) {
        clearInterval(progressInterval);
      }
    }, speed);

    return () => clearInterval(progressInterval);
  }, [percentage, speed]);

  return (
    <div
      className="circular-progress"
      style={{
        background: `conic-gradient(${progressColor} ${
          progress * 3.6
        }deg, ${bgColor} 0deg)`,
      }}
    >
      <div
        className="inner-circle"
        style={{ backgroundColor: innerCircleColor }}
      ></div>
      <p
        className="percentage"
        style={{ color: "#fff", fontFamily: "Poppins", fontWeight: 600 }}
      >
        {progress}%
      </p>
    </div>
  );
}

export default CircularProgressBar;
