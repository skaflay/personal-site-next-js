import React, { useEffect } from "react";
import {gsap} from "gsap";
import { useCallback } from 'react'

import {TimelineMax} from "gsap/gsap-core.js";

  
export default function Overlay() {
  var tl = new TimelineMax();
  useEffect(() => {
    tl.add(gsap.to('.layer1', ({
      y: '-100vh',
      delay: 0.2
    })))
    tl.add(gsap.to('.layer2', ({
      y: '-100vh',
      delay: 0
    })))
    tl.add(
      gsap.to('.layer3', ({
        y: '-100vh',
        delay: 0
      })))
  }, []);
  return animationItem();
}

function animationItem() {
  return (
    <div id="overlay" className="container" >
      <div className="layer layer1" />
      <div className="layer layer2" />
      <div className="layer layer3" />
    </div>
  )
}
