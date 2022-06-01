import gsap from "gsap";

export const fadeInElement = (className: string) => {
  return gsap.to(className, {
    scrollTrigger: {
      trigger: className,
    },
    opacity: "1",
    duration: 0.33,
  });
};

export const scrollToClassName = (className: string) => {
  gsap.to(window, { duration: 1, scrollTo: className });
};
