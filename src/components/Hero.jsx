import { motion } from 'framer-motion';
import { ArrowDown, Shield, Code, Lock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Shield, delay: 0, position: 'top-20 left-20' },
    { Icon: Code, delay: 0.5, position: 'top-32 right-32' },
    { Icon: Lock, delay: 1, position: 'bottom-32 left-32' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 cyber-gradient opacity-90"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} text-primary-500/20`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              delay: delay,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Icon size={80} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar */}
          <motion.div
            className="relative inline-block mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <Shield className="w-16 h-16 md:w-20 md:h-20 text-primary-500" />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block">Jakub Szych</span>
            <span className="text-gradient text-3xl md:text-4xl lg:text-5xl">
              Cybersecurity Beginner
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Student IT rozpoczynający przygodę z cyberbezpieczeństwem. 
            Odkrywam świat ethical hackingu, penetration testingu i ochrony systemów.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skontaktuj się ze mną
            </motion.button>
            
            <motion.a
              href="https://tryhackme.com/p/szyszek25"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-4 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Mój profil TryHackMe
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/70 cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
            <span className="text-sm block mt-2">Przewiń w dół</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
