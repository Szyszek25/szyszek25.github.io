import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Clock, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // Używamy mockowych danych zamiast API
    setExperiences(mockExperiences);
    setLoading(false);
  }, []);

  // Mockowe dane - ścieżka nauki cybersecurity
  const mockExperiences = [
    {
      id: 1,
      title: "Cyberbezpieczeństwo",
      company: "Samozatrudnienie",
      location: "Warszawa, Woj. Mazowieckie, Polska",
      startDate: "2025-07-01",
      endDate: null,
      current: true,
      description: "Intensive cybersecurity self-education program preparing for Cloud Technologies specialization starting October 2025. Completing TryHackMe Cybersecurity 101, HackTheBox Academy modules, building home security lab.",
      skills: ["Network Security", "Penetration Testing", "Linux Administration", "Incident Response", "Cloud Security"],
      type: "work",
      phase: "Obecnie"
    },
    {
      id: 2,
      title: "Programista aplikacji",
      company: "Samozatrudnienie",
      location: "Warszawa, Woj. Mazowieckie, Polska",
      startDate: "2025-06-01",
      endDate: null,
      current: true,
      description: "I create applications in Flutter.",
      skills: ["Flutter", "Dart", "Mobile Development"],
      type: "work",
      phase: "Obecnie"
    },
    {
      id: 3,
      title: "Programista .NET",
      company: "Samozatrudnienie", 
      location: "Warszawa, Polska",
      startDate: "2023-10-01",
      endDate: null,
      current: true,
      description: "I create projects on Github, thanks to the knowledge acquired from the university and from additional sources",
      skills: ["C#", ".NET", "ASP.NET", "Entity Framework", "SQL Server"],
      type: "work",
      phase: "Obecnie"
    },
    {
      id: 4,
      title: "Unreal Engine Developer",
      company: "Umowa zlecenie/freelancing",
      location: "Praca zdalna",
      startDate: "2023-07-01",
      endDate: "2025-07-01",
      current: false,
      description: "Self-taught game development in Unreal Engine 5 mainly from Udemy and Youtube tutorials and books. Portfolio: szych.framer.ai/",
      skills: ["Unreal Engine 5", "Blueprints", "C++", "Game Development", "Project Management"],
      type: "work",
      phase: "Zakończone"
    },
    {
      id: 5,
      title: "Amazon KDP Publishing",
      company: "Samozatrudnienie",
      location: "Praca zdalna",
      startDate: "2021-04-01",
      endDate: "2025-07-01",
      current: false,
      description: "Author and Marketer specializing in book creation, publishing, and promotion. Amazon advertising campaigns, metadata optimization, sales data analysis.",
      skills: ["Amazon KDP", "Digital Marketing", "PPC Campaigns", "Content Creation", "Sales Analysis"],
      type: "work",
      phase: "Zakończone"
    },
    {
      id: 6,
      title: "Google x SGH Program - Skills of Tomorrow",
      company: "Google",
      location: "Online",
      startDate: "2023-04-01",
      endDate: "2023-06-01",
      current: false,
      description: "3-month online marketing and e-commerce training program. Google Ads, Analytics, Search Console, Tag Manager, Facebook Ads.",
      skills: ["Google Ads", "Google Analytics", "SEO", "SEM", "E-commerce Marketing"],
      type: "education",
      phase: "Ukończone"
    }
  ];

  const fetchExperience = async () => {
    // Funkcja pozostaje dla kompatybilności, ale używamy mockowych danych
    return;
  };

  const getExperienceIcon = (type) => {
    if (type === 'education') return GraduationCap;
    if (type === 'learning') return GraduationCap;
    return Briefcase;
  };

  const getExperienceColor = (type, current) => {
    if (current) {
      if (type === 'education' || type === 'learning') {
        return 'border-green-500 bg-green-50 dark:bg-green-900/20';
      }
      return 'border-primary-500 bg-primary-50 dark:bg-primary-900/20';
    }
    return 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800';
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Obecnie';
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long'
    });
  };

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const months = Math.floor(diffDays / 30);
    
    if (months < 1) return 'Mniej niż miesiąc';
    if (months === 1) return '1 miesiąc';
    if (months < 12) return `${months} miesięcy`;
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 1 && remainingMonths === 0) return '1 rok';
    if (remainingMonths === 0) return `${years} lat`;
    
    return `${years} ${years === 1 ? 'rok' : 'lat'} ${remainingMonths} ${remainingMonths === 1 ? 'miesiąc' : 'miesięcy'}`;
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

  if (loading) {
    return (
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <Clock className="w-6 h-6 animate-spin" />
              <span>Ładowanie doświadczenia...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">`
        
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gradient text-center">
              Ścieżka nauki
            </h2>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center px-4">
              Moja droga w cyberbezpieczeństwie - od lipca 2025
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line - tylko na desktop */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-gray-300 dark:to-gray-600 hidden md:block"></div>

            {/* Experience Items */}
            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => {
                const IconComponent = getExperienceIcon(exp.type);
                
                return (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-8"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0 mx-auto md:mx-0">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-4 ${getExperienceColor(exp.type, exp.current)} flex items-center justify-center shadow-lg`}>
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      className={`flex-1 p-4 md:p-6 rounded-xl border-2 ${getExperienceColor(exp.type, exp.current)} shadow-lg card-hover w-full`}
                      whileHover={{ scale: window.innerWidth > 768 ? 1.02 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex flex-col items-start justify-between mb-4">
                        <div className="flex-1 w-full">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2">
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-200 mb-1 sm:mb-0">
                              {exp.title}
                            </h3>
                            {exp.current && (
                              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium rounded-full w-fit">
                                {exp.phase || 'Obecnie'}
                              </span>
                            )}
                          </div>
                          
                          <h4 className="text-base md:text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                            {exp.company}
                          </h4>
                          
                          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-gray-600 dark:text-gray-300 mb-3">
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                              <span className="break-words">{exp.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                              <span className="break-words">
                                {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                              <span className="break-words">{calculateDuration(exp.startDate, exp.endDate)}</span>
                            </div>
                          </div>
                          
                          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed break-words">
                            {exp.description}
                          </p>

                          {/* Skills */}
                          {exp.skills && exp.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1 md:gap-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-2 md:px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs md:text-sm rounded-full break-words"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Learning Path Note */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12 md:mt-16"
          >
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                🎯 Cybersecurity Learning Journey
              </h3>
              <p className="text-blue-600 dark:text-blue-300 text-xs md:text-sm mb-4 leading-relaxed">
                To moja aktualna ścieżka nauki cyberbezpieczeństwa od lipca 2025. 
                Regularnie aktualizuję postępy na LinkedIn i dokumentuję journey na portfolio.
              </p>
              <a
                href="https://www.linkedin.com/in/jakub-szych/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base"
              >
                <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                <span>Śledź postępy na LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
