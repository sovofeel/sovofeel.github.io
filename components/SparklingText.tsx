import { motion } from "framer-motion"

const SparklingText = ({ text }: { text: string }) => {
  return (
    <motion.h1
      className="text-4xl md:text-5xl font-bold text-red-600 text-center mb-8 font-pacifico"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          animate={{
            opacity: [1, 0.5, 1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  )
}

export default SparklingText

