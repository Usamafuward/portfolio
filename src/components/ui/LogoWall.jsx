/* eslint-disable react/prop-types */
import { useState } from "react";

function LogoWall({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(8rem, 1rem + 30vmin, 25rem)",
  duration = "60s",
}) {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "flex",
    "flex-col",
    "gap-[calc(var(--size)/20)]",
    "mx-auto",
    "max-w-full",
    "p-[20px_10px]",
    direction === "vertical" && "flex-row justify-center h-full",
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "relative",
    "flex",
    "overflow-hidden",
    "select-none",
    "gap-[calc(var(--size)/14)]",
    "justify-start",
    "w-full",
    "mask-horizontal",
    direction === "vertical" && "flex-col h-full mask-vertical",
    isPaused && "paused",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={wrapperClass}
      style={{
        "--size": size,
        "--duration": duration,
        color: "var(--color-text)",
        backgroundColor: "var(--color-bg)",
      }}
    >
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            direction === "vertical" && "flex-col min-h-full animate-scrollY",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={idx}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                `w-[var(--size)] p-[calc(var(--size)/10)]`,
                direction === "vertical" &&
                  "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
                "small-device-logo", // Add a class for small devices
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            direction === "vertical" && "flex-col min-h-full animate-scrollY",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={`dup1-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                `w-[var(--size)] p-[calc(var(--size)/10)]`,
                direction === "vertical" &&
                  "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
                "small-device-logo", // Add a class for small devices
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      </div>

      <div
        className={marqueeClass + " marquee--reverse"}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX reverse-x",
            direction === "vertical" &&
              "flex-col min-h-full animate-scrollY reverse-x",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={`rev-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                `w-[var(--size)] p-[calc(var(--size)/10)]`,
                direction === "vertical" &&
                  "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
                "small-device-logo", // Add a class for small devices
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX reverse-x",
            direction === "vertical" &&
              "flex-col min-h-full animate-scrollY reverse-x",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <img
              key={`dup2-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              className={[
                "bg-[var(--color-bg-accent)]",
                "rounded-md",
                "object-contain",
                "aspect-video",
                `w-[var(--size)] p-[calc(var(--size)/10)]`,
                direction === "vertical" &&
                  "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
                "small-device-logo", // Add a class for small devices
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .small-device-logo {
            width: calc(var(--size) * 1.2) !important; /* Increase logo size */
            height: auto;/* Increase logo padding */
            margin-top: 0.8rem;
            margin-bottom: 0.8rem;
            padding: 0.6rem;
          }

          .marqueeClass {
            flex-direction: column; /* Stack logos vertically */
            height: auto;
          }

          
        }
      `}</style>
    </article>
  );
}

export default LogoWall;
