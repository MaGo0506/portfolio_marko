// utils/intersectionObserver.ts
export const setupIntersectionObserver = (
    className: string,
  ): (() => void) => {
    const elements = document.querySelectorAll(`.${className}`);
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {  
          entry.target.classList.add('inView');
        }
      });
    });
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  };