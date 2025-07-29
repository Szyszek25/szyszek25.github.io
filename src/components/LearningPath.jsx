import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Circle, BookOpen, Terminal, Shield, Code2 } from 'lucide-react';

const LearningPath = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const learningSteps = [
    {
      id: 1,
      title: "TryHackMe Pre-Security",
      description: "Podstawy cyberbezpieczeństwa, sieci komputerowe, systemy operacyjne",
      status: "in-progress",
      icon: Shield,
      progress: 65,
      timeline: "Styczeń 2025 - W trakcie"
    },
    {
      id: 2,
      title: "Linux Essentials",
      description: "Podstawy systemów Linux, terminal, zarządzanie plikami i uprawnieniami",
      status: "completed",
      icon: Terminal,
      progress: 100,
      timeline: "Grudzień 2024 - Ukończone"
    },
    {
      id: 3,
      title: "Python dla automatyzacji",
      description: "Skrypty Python do automatyzacji zadań w cyberbezpieczeństwie",
      status: "in-progress",
      icon: Code2,
      progress: 40,
      timeline: "Luty 2025 - W trakcie"
    },
    {
      id: 4,
      title: "HTB Starting Point",
      description: "Pierwsze kroki w penetration testingu na platformie HackTheBox",
      status: "planned",
      icon: BookOpen,
      progress: 0,
      timeline: "Marzec 2025 - Planowane"
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'in-progress':
        return <Circle className="w-6 h-6 text-primary-500 animate-pulse" />;
      default:
        return <Circle className="w-6 h-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'border-green-500 bg-green-50 dark:bg-green-900/20';
      case 'in-progress':
        return 'border-primary-500 bg-primary-50 dark:bg-primary-900/20';
      default:
        return 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="learning" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Ścieżka nauki
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Moja droga w świecie cyberbezpieczeństwa - od podstaw do zaawansowanych technik
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-gray-300 dark:to-gray-600"></div>

            {/* Learning Steps */}
            <div className="space-y-12">
              {learningSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full border-4 ${getStatusColor(step.status)} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className={`flex-1 p-6 rounded-xl border-2 ${getStatusColor(step.status)} shadow-lg card-hover`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          {step.description}
                        </p>
                        <span className="text-sm text-gray-500 dark:text-gray-500">
                          {step.timeline}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(step.status)}
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {step.progress}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${
                          step.status === 'completed' 
                            ? 'bg-green-500' 
                            : step.status === 'in-progress'
                            ? 'bg-primary-500'
                            : 'bg-gray-400'
                        }`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${step.progress}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Ukończone kursy', value: '1', color: 'text-green-500' },
              { label: 'W trakcie', value: '2', color: 'text-primary-500' },
              { label: 'Planowane', value: '1', color: 'text-gray-500' },
              { label: 'Łączny postęp', value: '51%', color: 'text-primary-600' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Chcesz śledzić moje postępy?
              </h3>
              <p className="text-primary-100 mb-6">
                Obserwuj mnie na platformach edukacyjnych i LinkedIn, gdzie dzielę się swoimi osiągnięciami
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://tryhackme.com/p/jakubszych.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
                >
                  TryHackMe Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/jakub-szych/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors duration-300"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningPath;
