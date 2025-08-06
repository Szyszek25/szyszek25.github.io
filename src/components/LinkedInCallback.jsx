import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Loader } from 'lucide-react';

const LinkedInCallback = () => {
  const [status, setStatus] = useState('loading'); // loading, success, error
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const error = urlParams.get('error');

        if (error) {
          setStatus('error');
          setMessage(`Błąd autoryzacji: ${error}`);
          return;
        }

        if (!code) {
          setStatus('error');
          setMessage('Brak kodu autoryzacji');
          return;
        }

        // Wymiana kodu na access token
        const tokenResponse = await fetch('/api/linkedin/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

        if (!tokenResponse.ok) {
          throw new Error('Nie udało się uzyskać tokena dostępu');
        }

        const { access_token } = await tokenResponse.json();
        
        // Zapisz token w localStorage
        localStorage.setItem('linkedin_access_token', access_token);
        
        setStatus('success');
        setMessage('Pomyślnie połączono z LinkedIn!');
        
        // Przekieruj po 2 sekundach
        setTimeout(() => {
          navigate('/');
        }, 2000);

      } catch (err) {
        console.error('LinkedIn callback error:', err);
        setStatus('error');
        setMessage(err.message || 'Wystąpił nieoczekiwany błąd');
      }
    };

    handleCallback();
  }, [navigate]);

  const getIcon = () => {
    switch (status) {
      case 'loading':
        return <Loader className="w-16 h-16 animate-spin text-blue-500" />;
      case 'success':
        return <CheckCircle className="w-16 h-16 text-green-500" />;
      case 'error':
        return <XCircle className="w-16 h-16 text-red-500" />;
      default:
        return <Loader className="w-16 h-16 animate-spin text-blue-500" />;
    }
  };

  const getTitle = () => {
    switch (status) {
      case 'loading':
        return 'Łączenie z LinkedIn...';
      case 'success':
        return 'Połączono!';
      case 'error':
        return 'Błąd połączenia';
      default:
        return 'Łączenie...';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-md w-full mx-4 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {getIcon()}
        </motion.div>

        <motion.h1
          className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {getTitle()}
        </motion.h1>

        <motion.p
          className="text-gray-600 dark:text-gray-400 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {message || 'Przetwarzanie danych autoryzacji...'}
        </motion.p>

        {status === 'success' && (
          <motion.div
            className="text-sm text-green-600 dark:text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Przekierowywanie za chwilę...
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={() => navigate('/')}
              className="btn-primary px-6 py-2"
            >
              Powrót do strony głównej
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Możesz spróbować ponownie później lub skontaktować się z administratorem.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default LinkedInCallback;
