import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, ExternalLink, Calendar, MessageCircle, RefreshCw } from 'lucide-react';

const LinkedInFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    fetchLinkedInPosts();
  }, []);

  const fetchLinkedInPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Try to fetch from the generated linkedin.json file
      const response = await fetch('/src/data/linkedin.json');
      
      if (!response.ok) {
        throw new Error('Nie udało się pobrać postów');
      }
      
      const data = await response.json();
      const sorted = (data.posts || [])
        .slice()
        .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
      setPosts(sorted);
    } catch (err) {
      console.error('Error fetching LinkedIn posts:', err);
      setError(err.message);
      // Fallback to mock data for demo purposes
      setPosts(mockPosts);
    } finally {
      setLoading(false);
    }
  };

  // Mock data for demonstration
  const mockPosts = [
    {
      id: 1,
      title: "Witam chmurki w dzień słoneczny ☁️ Tydzień 3 nauki DevOps/Cloud za mną! 🚀",
      summary: "Dzięki waszej pomocy zapadła decyzja w sprawie kierunku mojego rozwoju! Aktualnie rozwijane umiejętności: Azure, Docker, MongoDB. Kierunek rozwoju: DevOps, Cloud Engineer, Database Engineer. Nabyte umiejętności: Azure (cert AZ-900), MongoDB (pierwszy raz NoSQL), Docker (podstawy dockerfiles). Cel: znaleźć staż Junior DevOps Engineer! ☁️",
      link: "https://linkedin.com/posts/jakub-szych-devops-week3",
      publishDate: "2025-08-10T10:30:00Z",
      author: "Jakub Szych"
    },
    {
      id: 2,
      title: "Learning-by-building cloud & DevOps with a security mindset 🔐",
      summary: "What I'm doing now: • Shipping small apps with Docker and simple GitHub Actions CI/CD (YAML) • Deploying to the cloud (Railway) and using cron schedules for automation • Exploring AWS / Azure / GCP fundamentals Recent wins: uploaded JS app to GitHub with automated build/run! 🚀",
      link: "https://linkedin.com/posts/jakub-szych-devops-journey",
      publishDate: "2025-08-05T15:45:00Z",
      author: "Jakub Szych"
    },
    {
      id: 3,
      title: "3rd-year CS @ SGGW Warsaw — Cloud Technologies specialization from Oct 2025! ☁️",
      summary: "Specializing in Cloud Technologies, but vacation belongs to building in the cloud! My knowledge: Cloud (Azure, AWS, GCP, Docker, GitHub Actions), Backend (Python, C#), Workflow (Git, AI Agents, GitHub Copilot). Goal: To secure the digital world while building in the cloud. 🌐",
      link: "https://linkedin.com/posts/jakub-szych-cloud-specialization",
      publishDate: "2025-08-01T09:20:00Z",
      author: "Jakub Szych"
    },
    {
      id: 4,
      title: "Hi, I'm Jakub - empathetic technologist and aspiring DevOps specialist! 🚀",
      summary: "My passion lies at the intersection of human psychology, user behaviors and computer science. Portfolio: https://szyszek25.github.io/ What makes me different? I bring emotional intelligence to technology - empathy helps design better solutions, sensitivity allows spotting patterns others miss. 💡",
      link: "https://linkedin.com/posts/jakub-szych-intro-devops",
      publishDate: "2025-07-28T14:30:00Z",
      author: "Jakub Szych"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
    <section id="linkedin" className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
            <div className="flex items-center justify-center mb-6">
              <Linkedin className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                LinkedIn Feed
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Najnowsze posty z mojej drogi w DevOps i technologiach chmurowych
              <br />
              <span className="text-sm text-gray-500 dark:text-gray-500">
                (Posty przykładowe dla demonstracji portfolio)
              </span>
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          {/* Refresh Button */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-8"
          >
            <button
              onClick={fetchLinkedInPosts}
              disabled={loading}
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Odśwież posty</span>
            </button>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <motion.div 
              variants={itemVariants}
              className="text-center py-12"
            >
              <div className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <RefreshCw className="w-6 h-6 animate-spin" />
                <span>Ładowanie postów...</span>
              </div>
            </motion.div>
          )}

          {/* Error State */}
          {error && !loading && (
            <motion.div 
              variants={itemVariants}
              className="text-center py-12"
            >
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <p className="text-red-600 dark:text-red-400 mb-4">
                  ⚠️ Nie udało się załadować postów z LinkedIn
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pokazuję przykładowe posty demonstracyjne
                </p>
              </div>
            </motion.div>
          )}

          {/* Posts Grid */}
          {!loading && posts.length > 0 && (
            <motion.div 
              variants={containerVariants}
              className="grid gap-8"
            >
              {posts.slice(0, 5).map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-6">
                    {/* Post Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <Linkedin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                            {post.author || "Jakub Szych"}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-4 h-4 mr-1" />
                            {formatDate(post.publishDate)}
                          </div>
                        </div>
                      </div>
                      
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>

                    {/* Post Content */}
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      {post.title}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {post.summary}
                    </p>

                    {/* Post Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300">
                          <MessageCircle className="w-4 h-4" />
                          <span>Komentarz</span>
                        </button>
                      </div>
                      
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300"
                      >
                        Zobacz pełny post →
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}

          {/* Empty State */}
          {!loading && posts.length === 0 && !error && (
            <motion.div 
              variants={itemVariants}
              className="text-center py-12"
            >
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
                <Linkedin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  Brak nowych wpisów
                </h3>
                <p className="text-gray-500 dark:text-gray-500">
                  Wróć później, aby zobaczyć najnowsze posty!
                </p>
              </div>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                📋 Informacja o profilu LinkedIn
              </h3>
              <p className="text-blue-600 dark:text-blue-300 text-sm"> 
                Powyższe posty to przykładowe wpisy demonstracyjne pokazujące moją ścieżkę DevOps i technologii chmurowych.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/jakub-szych/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
              <span>Obserwuj mnie na LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LinkedInFeed;
