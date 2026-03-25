import { useRef } from "react";
import { motion } from "framer-motion";
import { gsap, useGSAP } from "../../lib/gsap";
import styles from "./AnimatedOctoDude.module.css";

export function AnimatedOctoDude() {
  const svgRef = useRef<SVGSVGElement>(null);
  const octoRef = useRef<SVGGElement>(null);
  const isFleeingRef = useRef(false);

  useGSAP(() => {
    const svg = svgRef.current;
    const octo = octoRef.current;
    if (!svg || !octo) return;

    // SVG center in viewBox coordinates (160x160 viewBox)
    const centerX = 80;
    const centerY = 80;
    const fleeRadius = 120; // distance in SVG units where octo starts reacting
    const fleeMultiplier = 1; // how aggressively he flees

    const handleMouseMove = (e: MouseEvent) => {
      // Convert screen coords to SVG coords
      const pt = svg.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;
      const svgP = pt.matrixTransform(svg.getScreenCTM()?.inverse());

      const dx = svgP.x - centerX;
      const dy = svgP.y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < fleeRadius) {
        isFleeingRef.current = true;
        const strength = (fleeRadius - distance) / fleeRadius;
        const angle = Math.atan2(dy, dx);
        const flee = strength * fleeRadius * fleeMultiplier;
        const fleeX = -Math.cos(angle) * flee;
        const fleeY = -Math.sin(angle) * flee;

        gsap.to(octo, {
          x: fleeX,
          y: fleeY,
          duration: 1.3,
          ease: "power2.out",
          overwrite: true,
        });
      } else if (isFleeingRef.current) {
        // Mouse moved far away, return home
        isFleeingRef.current = false;
        gsap.to(octo, {
          x: 0,
          y: 0,
          duration: 2.5,
          ease: "power1.out",
          overwrite: true,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, { dependencies: [svgRef, octoRef] });

  return (
    <div className={styles.container} style={{ overflow: "visible" }}>
      <svg
        ref={svgRef}
        viewBox="0 0 160 160"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
      >
        {/* Bubbles behind octopus */}
        <motion.circle
          cx="16"
          cy="80"
          r="6"
          fill="#7dd3fc"
          initial={{ cx: 16, cy: 160, opacity: 0 }}
          animate={{
            cy: [160, 0],
            cx: [16, 18, 14, 16],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="40"
          cy="80"
          r="4"
          fill="#7dd3fc"
          initial={{ cx: 40, cy: 160, opacity: 0 }}
          animate={{
            cy: [160, 0],
            cx: [40, 37, 42, 40],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
        />
        <motion.circle
          cx="120"
          cy="80"
          r="5"
          fill="#7dd3fc"
          initial={{ cx: 120, cy: 160, opacity: 0 }}
          animate={{
            cy: [160, 0],
            cx: [120, 118, 123, 120],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.4,
          }}
        />
        <motion.circle
          cx="144"
          cy="80"
          r="4.5"
          fill="#7dd3fc"
          initial={{ cx: 144, cy: 160, opacity: 0 }}
          animate={{
            cy: [160, 0],
            cx: [144, 142, 146, 144],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.1,
          }}
        />
        <motion.circle
          cx="80"
          cy="80"
          r="3.5"
          fill="#7dd3fc"
          initial={{ cx: 80, cy: 160, opacity: 0 }}
          animate={{
            cy: [160, 0],
            cx: [80, 78, 82, 80],
            opacity: [0, 0.7, 0.7, 0],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.8,
          }}
        />

        {/* Octopus - centered at 80,80 (middle of 160x160 viewBox) */}
        <g ref={octoRef}>
        <g transform="translate(40, 40)">
          <motion.g
            initial={{ y: -20 }}
            animate={{ y: 30 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <motion.g
              animate={{ scale: 1.2 }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <g fill="none" fillRule="evenodd">
                <g stroke="#d650c7" strokeLinecap="round" strokeWidth="2">
                  <motion.path
                    animate={{ rotate: 25, y: -5 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{
                      originY: "top center",
                    }}
                    d="m17 41v12.0062606c0 3.3102509-2.6930342 5.9937394-6 5.9937394-3.3137085 0-6-2.6947819-6-5.9937394"
                  />
                  <motion.g
                    animate={{ rotate: -25 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{
                      originY: "top center",
                    }}
                  >
                    <path
                      d="m57 41.5v12.0062606c0 3.3102509-2.6930342 5.9937394-6 5.9937394-3.3137085 0-6-2.6947819-6-5.9937394"
                      transform="matrix(-1 0 0 1 102 0)"
                    />
                  </motion.g>
                  <motion.path
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 1.5 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{
                      transformBox: "fill-box",
                      transformOrigin: "50% 100%",
                      originY: "50%",
                    }}
                    d="m31 40v18m-7-24v18m14-18v18"
                    strokeLinejoin="round"
                  />
                </g>
                <motion.path
                  d="m8 22c0-11.045695 8.9511199-20 20.0090152-20h5.9819696c11.0506739 0 20.0090152 8.9518764 20.0090152 20v20h-46z"
                  fill="#ff78c7"
                />
                <motion.g
                  animate={{ x: -5 }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.3,
                  }}
                >
                  <motion.circle
                    initial={{ cx: 44, cy: 24, opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    cx="44"
                    cy="24"
                    fill="#595959"
                    r="2"
                  />
                </motion.g>
                <motion.g
                  animate={{ x: 5 }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <motion.circle
                    initial={{ cx: 17.379, cy: 24, opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      delay: 0.6,
                      repeatDelay: 1,
                    }}
                    cx="17.379"
                    cy="24"
                    fill="#595959"
                    r="2"
                  />
                </motion.g>
              </g>
            </motion.g>
          </motion.g>
        </g>

        </g>

        {/* Bubbles in front of octopus */}
        <motion.circle
          cx="24"
          cy="80"
          r="5"
          fill="#7dd3fc"
          initial={{ cx: 24, cy: 160, opacity: 0 }}
          animate={{
            cy: [160, 0],
            cx: [24, 22, 26, 24],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 3.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.circle
          cx="128"
          cy="80"
          r="5.5"
          fill="#7dd3fc"
          initial={{ cx: 128, cy: 160, opacity: 0 }}
          animate={{
            cy: [160, 0],
            cx: [128, 126, 130, 128],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          }}
        />
        <motion.circle
          cx="96"
          cy="80"
          r="4"
          fill="#7dd3fc"
          initial={{ cx: 96, cy: 160, opacity: 0 }}
          animate={{
            cy: [160, 0],
            cx: [96, 94, 98, 96],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 3.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9,
          }}
        />
      </svg>
    </div>
  );
}
