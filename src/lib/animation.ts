export const fadeIn = ({
  delay,
  duration,
  direction,
}: {
  delay: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}) => ({
  offscreen: {
    opacity: 0,
    y: direction === "down" ? 40 : direction === "up" ? -40 : 0,
    x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "easeIn",
      delay: delay === undefined || delay == null ? 0.3 : delay,
      duration: delay === undefined || delay == null ? 0.3 : duration,
    },
  },
});
