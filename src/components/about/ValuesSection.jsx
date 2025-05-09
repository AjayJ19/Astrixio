import React from 'react';
import { motion } from 'framer-motion';

const values = [
  {
    title: "Innovation First",
    description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
    icon: "💡"
  },
  {
    title: "Client Success",
    description: "Your success is our priority. We work closely with you to achieve your digital goals.",
    icon: "🎯"
  },
  {
    title: "Technical Excellence",
    description: "We maintain the highest standards in code quality, performance, and security.",
    icon: "⚡"
  },
  {
    title: "Continuous Learning",
    description: "We stay ahead of the curve by constantly learning and adapting to new technologies.",
    icon: "📚"
  }
];

const ValuesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary/10"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection; 