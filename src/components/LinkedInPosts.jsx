import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, ExternalLink, Calendar, RefreshCw } from 'lucide-react';
import useLinkedIn from '../hooks/useLinkedIn';

const LinkedInPosts = () => {
  const { posts, loading, error, refreshData, isUsingRealData } = useLinkedIn();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h`;
    } else if (diffInHours < 168) { // 7 days
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d`;
    } else {
      return date.toLocaleDateString('pl-PL', { 
        day: 'numeric', 
        month: 'short' 
      });
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-pulse">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mb-1"></div>
                <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/4"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-4/5"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/5"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
        <div className="text-red-500 mb-4">
          <ExternalLink className="w-12 h-12 mx-auto mb-2" />
          <p className="text-sm">Nie można załadować postów z LinkedIn</p>
          <p className="text-xs text-gray-500 mt-1">{error}</p>
        </div>
        <button
          onClick={refreshData}
          className="btn-secondary text-sm px-4 py-2 inline-flex items-center space-x-2"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Spróbuj ponownie</span>
        </button>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
        <div className="text-gray-500 dark:text-gray-400">
          <MessageCircle className="w-12 h-12 mx-auto mb-2" />
          <p className="text-sm">Brak postów do wyświetlenia</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header z informacją o linkach */}
      {!isUsingRealData && (
        <motion.div
          className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center space-x-2 text-blue-700 dark:text-blue-300 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Przykładowe posty - dodaj prawdziwe linki do swoich postów LinkedIn w kodzie</span>
          </div>
        </motion.div>
      )}

      {/* Posts */}
      {posts.map((post, index) => (
        <motion.article
          key={post.id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="p-6">
            {/* Post Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {post.author?.name ? 
                    post.author.name.split(' ').map(n => n.charAt(0)).join('') : 
                    'JS'
                  }
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {post.author?.name || 'Jakub Szych'}
                  </h4>
                  <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                    <span>IT Student • Junior DevOps Engineer</span>
                    <span>•</span>
                    <span>{formatDate(post.timestamp)}</span>
                  </div>
                </div>
              </div>
              
              <motion.a
                href={post.author?.profileUrl || 'https://www.linkedin.com/in/jakub-szych/'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Post Content */}
            <div className="mb-4">
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                {post.content}
              </p>
            </div>

            {/* Post Image (jeśli jest) */}
            {post.image && (
              <div className="mb-4 rounded-lg overflow-hidden">
                <img
                  src={post.image}
                  alt="Post attachment"
                  className="w-full h-48 object-cover"
                />
              </div>
            )}

            {/* Engagement Stats */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{post.likes || 0}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{post.comments || 0}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Share2 className="w-4 h-4" />
                  <span>{post.shares || 0}</span>
                </div>
              </div>

              <motion.button
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(post.linkedInUrl || 'https://www.linkedin.com/in/jakub-szych/', '_blank')}
              >
                Zobacz post na LinkedIn
              </motion.button>
            </div>
          </div>
        </motion.article>
      ))}

      {/* Refresh Button */}
      <div className="text-center">
        <button
          onClick={refreshData}
          className="btn-secondary px-6 py-3 inline-flex items-center space-x-2"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Odśwież posty</span>
        </button>
      </div>
    </div>
  );
};

export default LinkedInPosts;
