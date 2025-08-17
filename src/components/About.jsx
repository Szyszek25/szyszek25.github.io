import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Code, Database, GitBranch, Terminal, Layers } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = [
    { icon: Cloud, name: 'Azure', description: 'Cloud platform learning' },
    { icon: Layers, name: 'Docker', description: 'Containerization' },
    { icon: Database, name: 'MongoDB', description: 'NoSQL databases' },
    { icon: GitBranch, name: 'CI/CD', description: 'GitHub Actions' }
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
                Student IT na ścieżce DevOps ☁️
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  3. rok informatyki na SGGW, od października startuję ze specjalizacją 
                  <strong> Technologie Chmurowe</strong>. Skupiam się na nauce DevOps, 
                  automatyzacji i infrastruktury w chmurze.
                </p>
                
                <p>
                  Aktualnie zgłębiam <strong>Azure</strong>, buduję projekty z 
                  <strong> Docker</strong> i <strong>GitHub Actions</strong>. 
                  Eksperymentuję z <strong>MongoDB</strong> i deploymentem na 
                  <strong>Railway</strong>.
                </p>
                
                <p>
                  Jako osoba empatyczna i analityczna, łączę technical skills 
                  z human-centered approach. Wierzę, że najlepsza infrastruktura 
                  to ta, która służy ludziom i biznesowi.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
                  <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    🎯 Cel na lato 2025
                  </h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Zdobyć certyfikat Azure AZ-900
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      Zbudować CI/CD pipeline z GitHub Actions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      Stworzyć projekt Arduino + MongoDB Atlas
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      Znaleźć staż Junior DevOps Engineer
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tools Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">
              Moje narzędzia DevOps
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
              "DevOps to nie tylko technologie - to kultura współpracy, 
              automatyzacji i ciągłego doskonalenia dla lepszego jutra."
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
