"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const introKey = "muazzam-portfolio-intro-seen";

export default function IntroSequence() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    try {
      if (sessionStorage.getItem(introKey)) return;
    } catch {
      return;
    }

    const frame = window.requestAnimationFrame(() => setVisible(true));
    const timer = window.setTimeout(() => {
      setLeaving(true);
      try {
        sessionStorage.setItem(introKey, "seen");
      } catch {
        return;
      }
    }, 1300);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [reduceMotion]);

  if (!visible || reduceMotion) return null;

  const finishIntro = () => {
    setLeaving(true);
    try {
      sessionStorage.setItem(introKey, "seen");
    } catch {
      return;
    }
  };

  return (
    <motion.div
      animate={{ y: leaving ? "-100%" : "0%" }}
      className="intro-sequence"
      initial={{ y: "0%" }}
      onAnimationComplete={() => {
        if (leaving) setVisible(false);
      }}
      transition={{ duration: 0.62, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="intro-topline">
        <span>Independent developer</span>
        <span>Lahore, Pakistan</span>
      </div>
      <div className="intro-center">
        <span className="intro-index">Digital artefact / 01</span>
        <p className="intro-name">
          <span>Muazzam</span>
          <em>Manzoor</em>
        </p>
        <div className="intro-rule" />
      </div>
      <button className="intro-skip" onClick={finishIntro} type="button">
        Skip introduction <span aria-hidden="true">↗</span>
      </button>
    </motion.div>
  );
}
