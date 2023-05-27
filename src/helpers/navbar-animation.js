import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const FadeInAnimation = ({
  children
}) => {
  const distance = 200;
  const fadeDirection = { y: -distance };
  const Component = "ul";
  let compRef = useRef(null);
  useEffect(() => {
    gsap.from(compRef.current, 1, {
      ...fadeDirection,
      opacity: 0,
      delay:1.2,
      onComplete: () => {
        document.querySelector('.about').style.display = "block";
        document.querySelector('.contact').style.display = "block"
        document.querySelector('#overlay-component').style.display = "none"
      }
    });
  }, [compRef, fadeDirection]);
  return (
    <Component ref={compRef}>
      {children}
    </Component>
  );
};
export default FadeInAnimation;


