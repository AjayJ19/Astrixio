import React from 'react';
import { motion } from 'framer-motion';

const StorySection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Story
          </h2>
          
          <div className="space-y-12">
            <motion.div {...fadeInUp} className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Startup Spirit, Big Impact</h3>
                <p className="text-foreground/80">
                  As a dynamic startup, we bring fresh ideas, bold creativity, and unmatched agility to the tech scene. 
                  Our focus is on delivering tailored, high-performance web solutions that transform businesses, 
                  educational institutes, healthcare providers, and e-commerce brands.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">AI & ML Innovation</h3>
                <p className="text-foreground/80">
                  We believe the future of web applications lies in intelligent systems. From AI-powered chatbots 
                  and emotion detection to ML-based recommendation engines and predictive analytics, we transform 
                  traditional websites into smart digital ecosystems.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-4xl">🤖</span>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Data-Driven Excellence</h3>
                <p className="text-foreground/80">
                  Our expertise in Data Science enables us to analyze user behavior, visualize trends, and develop 
                  personalized web experiences. We help clients extract maximum value from their data through 
                  intelligent web applications.
                </p>
              </div>
              <div className="w-full md:w-48 h-48 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection; 