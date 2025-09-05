import { motion, useScroll, useTransform } from "framer-motion";

export default function PreviewSection() {
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 1000], [0, -800]);
  const scale = useTransform(scrollY, [0, 100000], [1, 0.9]);

  return (
    <motion.section
      style={{ y: headerY, scale }}
      className="bg-primary text-center py-[12vh] border-secondary relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <h1 className="text-accent text-[12rem] font-bold preview flex flex-col items-center gap-16">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-block"
          >
            WELCOME TO
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-block bg-clip-text bg-gradient-to-r from-accent to-primary"
          >
            MY CV
          </motion.span>
        </h1>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-[20%] left-[20%] w-[20vw] h-[20vw] rounded-full bg-accent blur-[100px]" />
        <div className="absolute bottom-[60%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-secondary blur-[100px]" />
      </motion.div>
    </motion.section>
  );
}
