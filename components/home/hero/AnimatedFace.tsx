import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { imageAssets } from "@/assets/imageAssets";

const MAX_HORIZONTAL_MOVEMENT = 5;
const MAX_VERTICAL_MOVEMENT = 3.5;
const TRACKING_DISTANCE = 160;

type EyeTracker = {
  reset: () => void;
  update: (clientX: number, clientY: number) => void;
};

function createEyeTracker(
  eyeElement: HTMLDivElement,
  irisElement: HTMLDivElement
): EyeTracker {
  const moveX = gsap.quickTo(irisElement, "x", {
    duration: 0.3,
    ease: "power3.out",
  });
  const moveY = gsap.quickTo(irisElement, "y", {
    duration: 0.3,
    ease: "power3.out",
  });

  return {
    update(clientX, clientY) {
      const rect = eyeElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = clientX - centerX;
      const dy = clientY - centerY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.min(Math.hypot(dx, dy), TRACKING_DISTANCE);
      const intensity = distance / TRACKING_DISTANCE;

      moveX(Math.cos(angle) * MAX_HORIZONTAL_MOVEMENT * intensity);
      moveY(Math.sin(angle) * MAX_VERTICAL_MOVEMENT * intensity);
    },
    reset() {
      moveX(0);
      moveY(0);
    },
  };
}

export default function AnimatedFace() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const leftIrisRef = useRef<HTMLDivElement>(null);
  const rightIrisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const leftEye = leftEyeRef.current;
    const rightEye = rightEyeRef.current;
    const leftIris = leftIrisRef.current;
    const rightIris = rightIrisRef.current;

    if (!wrapper || !leftEye || !rightEye || !leftIris || !rightIris) {
      return;
    }

    const hero = wrapper.closest<HTMLElement>(".hero");

    if (!hero) {
      return;
    }

    const leftTracker = createEyeTracker(leftEye, leftIris);
    const rightTracker = createEyeTracker(rightEye, rightIris);
    const finePointerQuery = window.matchMedia("(pointer: fine)");
    let isTracking = false;

    const resetEyes = () => {
      leftTracker.reset();
      rightTracker.reset();
    };

    const handlePointerMove = (event: PointerEvent) => {
      leftTracker.update(event.clientX, event.clientY);
      rightTracker.update(event.clientX, event.clientY);
    };

    const startTracking = () => {
      if (isTracking || !finePointerQuery.matches) {
        return;
      }

      hero.addEventListener("pointermove", handlePointerMove);
      hero.addEventListener("pointerleave", resetEyes);
      isTracking = true;
    };

    const stopTracking = () => {
      if (isTracking) {
        hero.removeEventListener("pointermove", handlePointerMove);
        hero.removeEventListener("pointerleave", resetEyes);
        isTracking = false;
      }

      resetEyes();
    };

    const handlePointerCapabilityChange = () => {
      if (finePointerQuery.matches) {
        startTracking();
      } else {
        stopTracking();
      }
    };

    handlePointerCapabilityChange();
    finePointerQuery.addEventListener("change", handlePointerCapabilityChange);

    return () => {
      finePointerQuery.removeEventListener(
        "change",
        handlePointerCapabilityChange
      );
      stopTracking();
      gsap.killTweensOf([leftIris, rightIris]);
    };
  }, []);

  return (
    <div className="hero-avatar-shell">
      <div ref={wrapperRef} className="hero-avatar-wrapper">
        <Image
          src={imageAssets.home.hero.avatar}
          alt="Ravindu cartoon avatar"
          fill
          priority
          sizes="(max-width: 560px) 168px, (max-width: 900px) 200px, 290px"
          className="hero-avatar-image"
        />

        <div
          ref={leftEyeRef}
          className="avatar-eye avatar-eye-left"
          aria-hidden="true"
        >
          <div className="avatar-eye-white" />
          <div ref={leftIrisRef} className="avatar-iris">
            <div className="avatar-pupil" />
            <div className="avatar-eye-highlight" />
          </div>
        </div>

        <div
          ref={rightEyeRef}
          className="avatar-eye avatar-eye-right"
          aria-hidden="true"
        >
          <div className="avatar-eye-white" />
          <div ref={rightIrisRef} className="avatar-iris">
            <div className="avatar-pupil" />
            <div className="avatar-eye-highlight" />
          </div>
        </div>
      </div>
    </div>
  );
}
