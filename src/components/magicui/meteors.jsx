import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: Math.floor(Math.random() * (window.innerHeight || 800)) - 100 + "px",
      left: Math.floor(Math.random() * ((window.innerWidth || 1200) * 1.5)) - ((window.innerWidth || 1200) * 0.25) + "px",
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration:
        Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) +
        "s",
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={cn(
            "animate-meteor pointer-events-none absolute w-0.5 h-0.5 rounded-full bg-slate-300 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
          style={{ ...style, transform: "rotate(315deg)", "--angle": "315deg" }}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[100px] -translate-y-1/2 bg-gradient-to-r from-slate-300 to-transparent" />
        </span>
      ))}
    </>
  );
};
