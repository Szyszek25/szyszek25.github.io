import { motion } from 'framer-motion';
import { ArrowDown, Cloud, Code, Database, Gamepad2, Github, Linkedin, LineChart } from 'lucide-react';
const GitHub = Github;

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Cloud, delay: 0, position: 'top-20 left-20' },
    { Icon: Code, delay: 0.5, position: 'top-32 right-32' },
    { Icon: Database, delay: 1, position: 'bottom-32 left-32' },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-start md:items-center justify-center relative overflow-hidden w-full"
      style={{
        paddingTop: 'calc(84px + env(safe-area-inset-top, 0px))'
      }}
    >
      {/* Tło gradientowe */}
      <div className="absolute inset-0 cyber-gradient opacity-90"></div>
      
      {/* Latające ikony w tle */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {floatingIcons.map(({ Icon, delay, position }, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${position} text-primary-500/20`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
            transition={{
              duration: 2,
              delay,
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Icon size={80} />
          </motion.div>
        ))}
      </div>

      {/* Główna zawartość */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Avatar */}
          <motion.div
            className="relative inline-block mb-6 md:mb-8 mt-2 md:mt-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-20 h-20 xs:w-24 xs:h-24 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <Cloud className="w-10 h-10 xs:w-12 xs:h-12 md:w-32 md:h-32 text-primary-500" />
              </div>
            </div>
          </motion.div>

          {/* Nagłówek */}
          <motion.h1
            className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block">Jakub Szych</span>
            <span className="text-gradient text-2xl md:text-4xl lg:text-5xl">
              Junior DevOps/Data Engineer
            </span>
          </motion.h1>

          {/* Podtytuł */}
          <motion.p
            className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Student IT specjalizujący się w technologiach chmurowych, danych, a także emocjach i zachowniach człowieka. 
            Buduję umiejętności w Azure, Docker, CI/CD oraz Pythonie z użyciem modeli transformerowych i AI.
          </motion.p>
          {/* CTA + przyciski */}
          <motion.div
            className="flex flex-col gap-4 md:gap-6 items-center mb-16 md:mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Pierwszy rząd: Postępy w nauce + Skontaktuj */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center">
              <motion.button
                onClick={() => scrollToSection('skills-progress')}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📊 Postępy w nauce
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-lg md:text-xl px-6 md:px-8 py-3 md:py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Skontaktuj się ze mną
              </motion.button>
            </div>

            {/* Drugi rząd: GitHub + LinkedIn + Analiza emocji + GameDev */}
            <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-4 md:items-center md:justify-center w-full max-w-md md:max-w-none">
              <motion.a
                href="https://github.com/szyszek25"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base md:text-lg px-4 md:px-6 py-2 md:py-3 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GitHub className="w-4 h-4 md:w-5 md:h-5" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jakub-szych/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base md:text-lg px-4 md:px-6 py-2 md:py-3 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://szych-emotion.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base md:text-lg px-4 md:px-6 py-2 md:py-3 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LineChart className="w-4 h-4 md:w-5 md:h-5" />
                <span>Analiza emocji</span>
              </motion.a>
              <motion.a
                href="https://szych.framer.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base md:text-lg px-4 md:px-6 py-2 md:py-3 inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Gamepad2 className="w-4 h-4 md:w-5 md:h-5" />
                <span>GameDev Portfolio</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 md:bottom-8 left-0 right-0 z-20 flex justify-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white cursor-pointer hover:text-blue-300 transition-colors flex flex-col items-center group"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 md:p-3 group-hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
              <ArrowDown className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <span className="text-sm md:text-base mt-2 md:mt-3 font-medium opacity-90 group-hover:opacity-100 text-center whitespace-nowrap">Przewiń w dół</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
