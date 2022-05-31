import gsap from "gsap";

export const fadeInElement = (className: String) => {
  return gsap.to(className, {
    scrollTrigger: {
      trigger: className,
    },
    opacity: "1",
    duration: 0.33,
  });
};
