import { motion } from "framer-motion"

const AnimatedTiger = () => {
  return (
    <motion.svg
      className="absolute bottom-20 right-10 w-32 h-32"
      viewBox="0 0 100 100"
      initial={{ x: 100 }}
      animate={{ x: [100, 0, 100] }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" }}
    >
      <motion.path
        d="M20,80 Q30,70 40,80 T60,80 T80,80 Q90,70 95,80 L95,95 Q80,100 50,100 Q20,100 5,95 Z"
        fill="#FF9800"
      />
      <motion.path d="M30,60 Q50,50 70,60 Q80,65 85,75 Q75,85 50,85 Q25,85 15,75 Q20,65 30,60 Z" fill="#FFB74D" />
      <circle cx="35" cy="65" r="5" fill="#000" />
      <circle cx="65" cy="65" r="5" fill="#000" />
      <path d="M45,75 Q50,80 55,75" fill="none" stroke="#000" strokeWidth="2" />
      <motion.path
        d="M10,80 Q0,60 10,40"
        fill="none"
        stroke="#FF9800"
        strokeWidth="4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, yoyo: true }}
      />
    </motion.svg>
  )
}

export default AnimatedTiger

