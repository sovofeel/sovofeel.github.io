import { motion } from "framer-motion"

const FloatingHearts = () => {
  const hearts = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute text-red-400"
      initial={{ y: "100vh", x: Math.random() * 100 + "vw" }}
      animate={{
        y: "-100vh",
        x: Math.random() * 100 + "vw",
        rotate: Math.random() * 360,
      }}
      transition={{
        duration: Math.random() * 20 + 10,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      style={{ fontSize: Math.random() * 20 + 10 }}
    >
      ❤️
    </motion.div>
  ))

  return <>{hearts}</>
}

export default FloatingHearts

