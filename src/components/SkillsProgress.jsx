import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Code, Database, GitBranch, Terminal, Layers, TrendingUp, BookOpen } from 'lucide-react';
import { useSkillsProgress } from '../hooks/useSkillsProgress';

const SkillsProgress = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { skills, loading, error, refreshSkills } = useSkillsProgress();

  const skillIcons = {
    'Analiza emocji i wydźwięku w polskich mediach': TrendingUp,
    'Kursy': BookOpen,
    'Azure': Cloud,
    'Docker': Layers, 
    'MongoDB': Database,
    'GitHub Actions': GitBranch,
    'Railway': Code,
    'Bash/Linux': Terminal,
    'Python': Code,
    'Kubernetes': Cloud,
    'Terraform': Code,
    'Fundamenty pod projekt': TrendingUp,
    'Fundamenty pod projekt – Data Science / AI': TrendingUp,
    'Studia': BookOpen
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="skills-progress" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-12 h-12 text-primary-500 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                Postępy w nauce
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Cotygodniowa dokumentacja mojej drogi w świecie DevOps i technologii chmurowych
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <motion.div 
              variants={itemVariants}
              className="text-center py-12"
            >
              <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <div className="w-6 h-6 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                <span>Ładowanie postępów...</span>
              </div>
            </motion.div>
          )}

          {/* Error State */}
          {error && !loading && (
            <motion.div 
              variants={itemVariants}
              className="text-center py-12"
            >
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-red-600 dark:text-red-400 mb-4">
                  ⚠️ Błąd ładowania postępów: {error}
                </p>
                <button
                  onClick={refreshSkills}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  Spróbuj ponownie
                </button>
              </div>
            </motion.div>
          )}

          {/* Skills Progress Grid */}
          {!loading && !error && Object.keys(skills).length > 0 && (
            <motion.div 
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {Object.entries(skills).map(([skillName, skillItems], index) => {
                const IconComponent = skillIcons[skillName] || Code;
                const isCourseColumn = skillName === 'Analiza emocji i wydźwięku w polskich mediach' || skillName === 'Kursy' || skillName === 'Fundamenty pod projekt' || skillName === 'Fundamenty pod projekt – Data Science / AI' || skillName === 'Azure';
                
                return (
                  <motion.div
                    key={skillName}
                    variants={itemVariants}
                    className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 card-hover ${
                      isCourseColumn ? 'md:col-span-2 lg:col-span-2' : ''
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Skill Header */}
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                          {skillName}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {skillItems.length} {skillItems.length === 1 ? 'postęp' : 'postępy'}
                        </p>
                      </div>
                    </div>

                    {/* Progress Items */}
                    <div className="space-y-3">
                      {skillItems.map((item, index) => {
                        const isWeekHeader = item.startsWith('📅 Tydzień');
                        
                        return (
                          <motion.div
                            key={index}
                            className={`flex items-start space-x-3 p-3 rounded-lg ${
                              isWeekHeader 
                                ? 'bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 border-l-4 border-primary-500' 
                                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600'
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                          >
                            {!isWeekHeader && (
                              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            )}
                            <p className={`text-sm leading-relaxed ${
                              isWeekHeader 
                                ? 'font-semibold text-primary-700 dark:text-primary-300 ml-0' 
                                : 'text-gray-800 dark:text-gray-200'
                            }`}>
                              {item}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 dark:text-gray-400">Status</span>
                        <span className="text-primary-600 dark:text-primary-400 font-medium">
                          W trakcie
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Summary Stats */}
          {!loading && !error && Object.keys(skills).length > 0 && (
            <motion.div 
              variants={itemVariants}
              className="mt-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">
                    {Object.keys(skills).length}
                  </div>
                  <div className="text-primary-100">
                    Technologii
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">
                    {Object.values(skills).flat().length}
                  </div>
                  <div className="text-primary-100">
                    Postępów
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">
                    3+
                  </div>
                  <div className="text-primary-100">
                    Tygodni nauki
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">
                    24/7
                  </div>
                  <div className="text-primary-100">
                    Pasja do nauki
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Update Instructions */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6"
          >
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
              📋 Jak aktualizuję swoje postępy?
            </h3>
            <div className="text-blue-600 dark:text-blue-300 text-sm space-y-2">
              <p>• Każdy tydzień dokumentuję nowe umiejętności w pliku JSON</p>
              <p>• Posty na LinkedIn z cotygodniowymi update'ami</p>
              <p>• Regularne commity na GitHub z nowymi projektami</p>
              <p>• Ciągła nauka i eksperymentowanie z nowymi technologiami</p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Chcesz śledzić moje postępy?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Obserwuj mnie na LinkedIn, gdzie dzielę się cotygodniowymi update'ami z mojej drogi DevOps
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/jakub-szych/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/szyszek25"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsProgress;
