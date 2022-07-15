import gsap from "gsap";

export const fadeInElement = (className: string, duration: number) => {
  return gsap.to(className, {
    scrollTrigger: {
      trigger: className,
    },
    opacity: "1",
    duration: duration,
  });
};

export const scrollToClassName = (className: string) => {
  gsap.to(window, { duration: 1, scrollTo: className });
};
