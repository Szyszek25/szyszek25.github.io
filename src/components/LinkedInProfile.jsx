import { motion } from 'framer-motion';
import { ExternalLink, Users, User, MapPin, Briefcase, RefreshCw, Settings } from 'lucide-react';
import useLinkedIn from '../hooks/useLinkedIn';

const LinkedInProfile = () => {
  const { profile, loading, error, refreshData, visitLinkedInProfile, isConnected, isUsingRealData } = useLinkedIn();

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="animate-pulse">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
            <div className="flex-1">
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <ExternalLink className="w-12 h-12 mx-auto mb-2" />
            <p className="text-sm">Błąd połączenia z LinkedIn</p>
          </div>
          <button
            onClick={refreshData}
            className="btn-secondary text-sm px-4 py-2 inline-flex items-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Spróbuj ponownie</span>
          </button>
        </div>
      </div>
    );
  }

  if (!profile) return null;

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header z informacją o danych demonstracyjnych */}
      {!isUsingRealData && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border-b border-blue-200 dark:border-blue-800 p-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-blue-700 dark:text-blue-300">
              <Settings className="w-4 h-4" />
              <span>Dane demonstracyjne inspirowane rzeczywistym profilem</span>
            </div>
            <button
              onClick={visitLinkedInProfile}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Zobacz profil LinkedIn
            </button>
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Profile Header */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {profile.profilePicture ? (
              <img
                src={profile.profilePicture}
                alt={`${profile.firstName} ${profile.lastName}`}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {profile.firstName} {profile.lastName}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
              {profile.headline}
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              {profile.location && (
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
              )}
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{profile.connections}+ połączeń</span>
              </div>
            </div>
          </div>

          <motion.a
            href="https://www.linkedin.com/in/jakub-szych/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </div>

        {/* Summary */}
        {profile.summary && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              O mnie
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {profile.summary}
            </p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {profile.connections}+
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Połączenia
            </div>
          </div>
          
          <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {profile.followers || 89}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              Obserwujący
            </div>
          </div>
        </div>

        {/* Refresh Button */}
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={refreshData}
            className="w-full btn-secondary text-sm py-2 inline-flex items-center justify-center space-x-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Odśwież dane</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LinkedInProfile;
