import { motion } from "framer-motion"

const SwayingFlowers = () => {
  const flowers = Array.from({ length: 5 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute bottom-0"
      style={{ left: `${i * 25}%` }}
      animate={{
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    >
      <svg width="50" height="100" viewBox="0 0 50 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 100V30" stroke="#4CAF50" strokeWidth="4" />
        <circle cx="25" cy="15" r="15" fill="#FF69B4" />
        <circle cx="15" cy="20" r="10" fill="#FF1493" />
        <circle cx="35" cy="20" r="10" fill="#FF1493" />
      </svg>
    </motion.div>
  ))

  return <>{flowers}</>
}

export default SwayingFlowers

