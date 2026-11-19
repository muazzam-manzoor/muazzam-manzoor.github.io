"use client";

import { useReducedMotion, useSpring, motion } from "framer-motion";
import type { PointerEvent } from "react";

export default function SystemDiagram() {
  const reduceMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 120, damping: 22, mass: 0.8 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 22, mass: 0.8 });

  const trackPointer = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateX.set(y * -7);
    rotateY.set(x * 9);
  };

  const resetPointer = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      className="system-stage"
      onPointerLeave={resetPointer}
      onPointerMove={trackPointer}
    >
      <motion.div
        className="system-diagram"
        style={{ rotateX, rotateY }}
        role="img"
        aria-label="Abstract connected systems diagram representing business applications, APIs, and data"
      >
        <svg className="diagram-lines" viewBox="0 0 520 470" aria-hidden="true">
          <path d="M259 234 120 108M259 234 396 107M259 234 423 343M259 234 118 355" />
          <path d="M120 108 396 107M118 355 423 343" />
          <circle cx="259" cy="234" r="118" />
          <circle cx="259" cy="234" r="172" />
          <circle cx="120" cy="108" r="4" />
          <circle cx="396" cy="107" r="4" />
          <circle cx="423" cy="343" r="4" />
          <circle cx="118" cy="355" r="4" />
        </svg>
        <div className="diagram-core">
          <span className="core-index">MM / 01</span>
          <span className="core-mark">M<span>M</span></span>
          <span className="core-caption">Connected<br />by purpose</span>
        </div>
        <div className="diagram-node node-inventory">
          <span className="node-glyph">01</span>
          <span>Inventory</span>
          <small>Business logic</small>
        </div>
        <div className="diagram-node node-integrations">
          <span className="node-glyph">02</span>
          <span>Integrations</span>
          <small>REST · CRM</small>
        </div>
        <div className="diagram-node node-records">
          <span className="node-glyph">03</span>
          <span>Data systems</span>
          <small>Records · reports</small>
        </div>
        <div className="diagram-node node-interface">
          <span className="node-glyph">04</span>
          <span>Interfaces</span>
          <small>Web applications</small>
        </div>
        <span className="diagram-coordinate coordinate-a">LAHORE / PK</span>
        <span className="diagram-coordinate coordinate-b">SYSTEMS / 01</span>
      </motion.div>
      <span className="stage-caption">
        <span>Fig. 01</span> Practical software, connected
      </span>
    </div>
  );
}
