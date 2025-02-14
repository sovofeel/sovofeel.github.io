import { motion } from "framer-motion"

const AnimatedGrass = () => {
  return (
    <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1000 100" preserveAspectRatio="none">
      <motion.path
        d="M0,100 Q250,50 500,100 T1000,100 V100 H0 Z"
        fill="#4CAF50"
        animate={{
          d: [
            "M0,100 Q250,50 500,100 T1000,100 V100 H0 Z",
            "M0,100 Q250,60 500,90 T1000,100 V100 H0 Z",
            "M0,100 Q250,50 500,100 T1000,100 V100 H0 Z",
          ],
        }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
      />
    </svg>
  )
}

export default AnimatedGrass

