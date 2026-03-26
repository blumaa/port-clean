import { useRef } from "react";
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

    // --- Bubble animations ---
    svg.querySelectorAll<SVGCircleElement>(".bubble").forEach((bubble) => {
      const startCx = parseFloat(bubble.getAttribute("data-cx") || "80");
      const drift = parseFloat(bubble.getAttribute("data-drift") || "2");
      const dur = parseFloat(bubble.getAttribute("data-dur") || "3");
      const del = parseFloat(bubble.getAttribute("data-del") || "0");

      gsap.set(bubble, { attr: { cy: 160, cx: startCx }, opacity: 0 });
      gsap.to(bubble, {
        attr: { cy: 0, cx: `+=${drift}` },
        opacity: 0.7,
        duration: dur,
        delay: del,
        repeat: -1,
        ease: "sine.inOut",
        keyframes: {
          opacity: [0, 0.7, 0.7, 0],
        },
      });
    });

    // --- Octo body bob ---
    const bobGroup = svg.querySelector("#octo-bob");
    if (bobGroup) {
      gsap.fromTo(bobGroup, { y: -20 }, {
        y: 30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // --- Breathing/scale pulse ---
    const breatheGroup = svg.querySelector("#octo-breathe");
    if (breatheGroup) {
      gsap.to(breatheGroup, {
        scale: 1.2,
        duration: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "center center",
      });
    }

    // --- Left tentacle sway ---
    const legLeft = svg.querySelector("#leg-left");
    if (legLeft) {
      gsap.to(legLeft, {
        rotation: 25,
        y: -5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "top center",
      });
    }

    // --- Right tentacle sway ---
    const legRight = svg.querySelector("#leg-right");
    if (legRight) {
      gsap.to(legRight, {
        rotation: -25,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "top center",
      });
    }

    // --- Middle tentacles stretch ---
    const legMiddle = svg.querySelector("#leg-middle");
    if (legMiddle) {
      gsap.to(legMiddle, {
        scaleY: 1.5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "50% 100%",
      });
    }

    // --- Eye drift + blink ---
    const eyeRight = svg.querySelector("#eye-right");
    const eyeLeft = svg.querySelector("#eye-left");

    if (eyeRight) {
      gsap.to(eyeRight, {
        x: -5,
        duration: 1.1,
        repeat: -1,
        yoyo: true,
        delay: 0.3,
        ease: "sine.inOut",
      });
      const eyeRightCircle = eyeRight.querySelector("circle");
      if (eyeRightCircle) {
        gsap.fromTo(eyeRightCircle, { opacity: 0 }, {
          opacity: 1,
          duration: 0.3,
          repeat: -1,
          repeatDelay: 1,
        });
      }
    }

    if (eyeLeft) {
      gsap.to(eyeLeft, {
        x: 5,
        duration: 1.1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      const eyeLeftCircle = eyeLeft.querySelector("circle");
      if (eyeLeftCircle) {
        gsap.fromTo(eyeLeftCircle, { opacity: 0 }, {
          opacity: 1,
          duration: 0.3,
          repeat: -1,
          delay: 0.6,
          repeatDelay: 1,
        });
      }
    }

    // --- Mouse flee behavior ---
    const centerX = 80;
    const centerY = 80;
    const fleeRadius = 120;
    const fleeMultiplier = 1;

    const handleMouseMove = (e: MouseEvent) => {
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

        gsap.to(octo, {
          x: -Math.cos(angle) * flee,
          y: -Math.sin(angle) * flee,
          duration: 1.3,
          ease: "power2.out",
          overwrite: true,
        });
      } else if (isFleeingRef.current) {
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
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
        <circle className="bubble" data-cx="16" data-drift="2" data-dur="3" data-del="0" cx="16" cy="160" r="6" fill="#7dd3fc" opacity="0" />
        <circle className="bubble" data-cx="40" data-drift="-3" data-dur="3.5" data-del="0.7" cx="40" cy="160" r="4" fill="#7dd3fc" opacity="0" />
        <circle className="bubble" data-cx="120" data-drift="-2" data-dur="2.8" data-del="1.4" cx="120" cy="160" r="5" fill="#7dd3fc" opacity="0" />
        <circle className="bubble" data-cx="144" data-drift="-2" data-dur="3.2" data-del="2.1" cx="144" cy="160" r="4.5" fill="#7dd3fc" opacity="0" />
        <circle className="bubble" data-cx="80" data-drift="-2" data-dur="3.8" data-del="2.8" cx="80" cy="160" r="3.5" fill="#7dd3fc" opacity="0" />

        {/* Octopus */}
        <g ref={octoRef}>
          <g transform="translate(40, 40)">
            <g id="octo-bob">
              <g id="octo-breathe">
                <g fill="none" fillRule="evenodd">
                  <g stroke="#d650c7" strokeLinecap="round" strokeWidth="2">
                    <path
                      id="leg-left"
                      d="m17 41v12.0062606c0 3.3102509-2.6930342 5.9937394-6 5.9937394-3.3137085 0-6-2.6947819-6-5.9937394"
                    />
                    <g id="leg-right">
                      <path
                        d="m57 41.5v12.0062606c0 3.3102509-2.6930342 5.9937394-6 5.9937394-3.3137085 0-6-2.6947819-6-5.9937394"
                        transform="matrix(-1 0 0 1 102 0)"
                      />
                    </g>
                    <path
                      id="leg-middle"
                      d="m31 40v18m-7-24v18m14-18v18"
                      strokeLinejoin="round"
                    />
                  </g>
                  <path
                    d="m8 22c0-11.045695 8.9511199-20 20.0090152-20h5.9819696c11.0506739 0 20.0090152 8.9518764 20.0090152 20v20h-46z"
                    fill="#ff78c7"
                  />
                  <g id="eye-right">
                    <circle cx="44" cy="24" fill="#595959" r="2" opacity="0" />
                  </g>
                  <g id="eye-left">
                    <circle cx="17.379" cy="24" fill="#595959" r="2" opacity="0" />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>

        {/* Bubbles in front of octopus */}
        <circle className="bubble" data-cx="24" data-drift="-2" data-dur="3.3" data-del="0.5" cx="24" cy="160" r="5" fill="#7dd3fc" opacity="0" />
        <circle className="bubble" data-cx="128" data-drift="-2" data-dur="3.6" data-del="1.8" cx="128" cy="160" r="5.5" fill="#7dd3fc" opacity="0" />
        <circle className="bubble" data-cx="96" data-drift="-2" data-dur="3.1" data-del="0.9" cx="96" cy="160" r="4" fill="#7dd3fc" opacity="0" />
      </svg>
    </div>
  );
}
