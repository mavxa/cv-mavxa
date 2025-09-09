import { useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

export default function TextAnimate() {
  const [showAbout, setShowAbout] = useState(false);
  useScroll().scrollY.onChange((latest) => {
    setShowAbout(latest > 10 && latest < 500);
  });

  return (
    <div className="h-[6.5vh] relative overflow-hidden mb-[8vh]">
      <AnimatePresence>
        {showAbout && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.1,
              ease: [0.2, 1, 0.2, 1],
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="max-w-3xl mx-auto px-6">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="text-text text-[0.65rem] md:text-xl text-center"
              >
                Junior Frontend Developer currently studying IT, passionate
                about creating responsive and user-friendly web applications.
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
