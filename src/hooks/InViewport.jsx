import { useState, useEffect, useMemo } from "react";

const InViewport = (ref, threshold_value = 0) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        {
          threshold: threshold_value, // Trigger when 10% of the element is in the viewport
        }
      ),
    []
  );

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, observer]);

  return isIntersecting;
};

export default InViewport;
