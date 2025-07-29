import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Terminal, Code, Shield, Users } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = [
    { icon: Terminal, name: 'Linux', description: 'Podstawy systemów Unix/Linux' },
    { icon: Code, name: 'Python', description: 'Automatyzacja i skrypty' },
    { icon: Shield, name: 'TryHackMe', description: 'Ethical hacking challenges' },
    { icon: Users, name: 'Git', description: 'Kontrola wersji projektów' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              O mnie
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                Moja droga w cyberbezpieczeństwie
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Jestem studentem IT, który odkrył fascynujący świat cyberbezpieczeństwa. 
                  Rozpocząłem swoją przygodę od podstaw - nauki Linuxa i Pythona, 
                  które stanowią fundament dla dalszego rozwoju w tej dziedzinie.
                </p>
                
                <p>
                  Aktualnie koncentruję się na zdobywaniu praktycznych umiejętności 
                  poprzez platformy edukacyjne jak TryHackMe oraz HackTheBox. 
                  Każdy rozwiązany challenge to krok bliżej do zostania ethical hackerem.
                </p>
                
                <p>
                  Moim celem jest rozwijanie umiejętności w penetration testingu, 
                  analizie malware oraz ochronie infrastruktury IT. 
                  Wierzę, że cyberbezpieczeństwo to nie tylko technologia, ale także odpowiedzialność.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    🎯 Aktualne cele
                  </h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      Ukończenie TryHackMe Pre-Security
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      Certyfikat Linux Essentials
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      HTB Starting Point completion
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      Python automatyzacja w cybersec
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tools Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
              Moje narzędzia startowe
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group card-hover"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="mb-4">
                    <tool.icon className="w-12 h-12 mx-auto text-primary-500 group-hover:text-primary-600 transition-colors duration-300" />
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {tool.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {tool.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <blockquote className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 italic">
              "W cyberbezpieczeństwie każdy dzień to nowa lekcja, 
              a każdy challenge to możliwość stania się lepszym obrońcą cyfrowego świata."
            </blockquote>
            <div className="mt-4 text-primary-500 font-semibold">
              — Jakub Szych
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
