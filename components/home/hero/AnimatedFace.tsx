import Image from "next/image";

import { imageAssets } from "@/assets/imageAssets";

export default function AnimatedFace() {
  return (
    <div className="hero-avatar-shell">
      <div className="hero-avatar-wrapper">
        <Image
          src={imageAssets.home.hero.avatar}
          alt="Ravindu cartoon avatar"
          fill
          priority
          sizes="(max-width: 560px) 168px, (max-width: 900px) 200px, 290px"
          className="hero-avatar-image"
        />
      </div>
    </div>
  );
}
