import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  {
    number: 100,
    suffix: "+",
    label: "Projects Completed",
    icon: "🎯"
  },
  {
    number: 50,
    suffix: "+",
    label: "Happy Clients",
    icon: "😊"
  },
  {
    number: 95,
    suffix: "%",
    label: "Client Satisfaction",
    icon: "⭐"
  },
  {
    number: 24,
    suffix: "/7",
    label: "Support Available",
    icon: "🛟"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Our Impact
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-primary/10"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2 text-primary">
                  <CountUp
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </div>
                <p className="text-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and experience the power of 
              modern web solutions combined with cutting-edge technology.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection; 