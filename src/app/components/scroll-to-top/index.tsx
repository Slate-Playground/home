'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.pageYOffset;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrollY / windowHeight) * 100, 100);
      
      setScrollProgress(progress);
      
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25 
            }}
            className="relative"
          >
            {/* Progress ring */}
            <div className="absolute inset-0">
              <svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 56 56">
                <circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-purple-600/20 dark:text-purple-400/20"
                />
                <motion.circle
                  cx="28"
                  cy="28"
                  r="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  className="text-purple-600 dark:text-purple-400"
                  initial={{ strokeDasharray: "0 150" }}
                  animate={{ strokeDasharray: `${(scrollProgress / 100) * 150} 150` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </svg>
            </div>

            {/* Button */}
            <motion.button
              onClick={scrollToTop}
              aria-label="scroll to top"
              className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-emerald-600 text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-purple-500/25"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <ArrowUp className="w-6 h-6" />
              </motion.div>
            </motion.button>

            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-dark_black dark:bg-white text-white dark:text-dark_black text-sm rounded-lg whitespace-nowrap opacity-0 pointer-events-none"
            >
              Back to top
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark_black dark:border-t-white"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
