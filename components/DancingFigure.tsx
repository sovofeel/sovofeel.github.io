import { motion } from "framer-motion"

const DancingFigure = () => {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        rotate: [0, 10, -10, 0],
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <circle cx="50" cy="30" r="20" fill="#FF69B4" />
      <line x1="50" y1="50" x2="50" y2="80" stroke="#FF69B4" strokeWidth="4" />
      <line x1="50" y1="60" x2="30" y2="70" stroke="#FF69B4" strokeWidth="4" />
      <line x1="50" y1="60" x2="70" y2="70" stroke="#FF69B4" strokeWidth="4" />
      <line x1="50" y1="80" x2="30" y2="100" stroke="#FF69B4" strokeWidth="4" />
      <line x1="50" y1="80" x2="70" y2="100" stroke="#FF69B4" strokeWidth="4" />
    </motion.svg>
  )
}

export default DancingFigure

