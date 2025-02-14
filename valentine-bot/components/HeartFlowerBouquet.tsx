import { motion } from "framer-motion"

const HeartFlowerBouquet = () => {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <path
        d="M100 180L85 165C40 123 10 94 10 60C10 30 34 10 60 10C76 10 91 18 100 30C109 18 124 10 140 10C166 10 190 30 190 60C190 94 160 123 115 165L100 180Z"
        fill="#FF69B4"
      />
      <circle cx="50" cy="70" r="20" fill="#FF1493" />
      <circle cx="150" cy="70" r="20" fill="#FF1493" />
      <circle cx="100" cy="50" r="20" fill="#FF1493" />
    </motion.svg>
  )
}

export default HeartFlowerBouquet

