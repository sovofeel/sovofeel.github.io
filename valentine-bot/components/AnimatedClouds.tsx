import { motion } from "framer-motion"

const AnimatedClouds = () => {
  return (
    <svg className="absolute top-0 left-0 w-full h-64" viewBox="0 0 1000 200" preserveAspectRatio="none">
      <motion.path
        d="M0,100 Q150,50 300,100 T600,100 T900,100 T1200,100 V0 H0 Z"
        fill="#f0f0f0"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
      />
      <motion.path
        d="M-100,100 Q50,50 200,100 T500,100 T800,100 T1100,100 V0 H0 Z"
        fill="#e0e0e0"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 15, ease: "linear" }}
      />
    </svg>
  )
}

export default AnimatedClouds

