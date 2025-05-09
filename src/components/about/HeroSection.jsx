import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary/10 to-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            The Future of Smart Web Solutions
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-foreground/80 mb-8"
          >
            Redefining digital experiences through innovation, AI, and cutting-edge technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
              <span className="text-primary">🚀</span>
              <span>Innovation</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
              <span className="text-primary">🤖</span>
              <span>AI/ML</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
              <span className="text-primary">📊</span>
              <span>Data Science</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
              <span className="text-primary">☁️</span>
              <span>Cloud Services</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 