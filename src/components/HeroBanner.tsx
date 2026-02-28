import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.png";

const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src={heroBanner}
        alt="Professional development and mentorship sessions"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </section>
  );
};

export default HeroBanner;
