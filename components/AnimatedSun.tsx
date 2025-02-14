import { motion } from "framer-motion"

const AnimatedSun = () => {
  return (
    <motion.svg
      className="absolute top-10 right-10 w-24 h-24"
      viewBox="0 0 100 100"
      initial={{ scale: 0.8, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, repeatType: "reverse" }}
    >
      <circle cx="50" cy="50" r="40" fill="#FFD700" />
      {[...Array(12)].map((_, i) => (
        <motion.line
          key={i}
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          stroke="#FFD700"
          strokeWidth="4"
          transform={`rotate(${i * 30} 50 50)`}
          initial={{ scale: 0.5 }}
          animate={{ scale: [0.5, 1, 0.5] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: i * 0.1 }}
        />
      ))}
    </motion.svg>
  )
}

export default AnimatedSun

