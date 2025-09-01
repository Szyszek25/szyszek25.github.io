import { useState, useEffect } from 'react';

const useLinkedIn = () => {
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dane Twojego rzeczywistego profilu LinkedIn
  const profileData = {
    firstName: 'Jakub',
    lastName: 'Szych',
    headline: 'IT Student | Junior DevOps Engineer',
  summary: 'Student IT (3rd year) na ścieżce DevOps & Cloud Technologies. Learning-by-building z Docker, GitHub Actions CI/CD i Azure. Fokus: automatyzacja i praktyka chmury.',
    location: 'Poland',
    profilePicture: null,
    connections: '170+',
    followers: 145,
    profileUrl: 'https://www.linkedin.com/in/jakub-szych/',
    isStudent: true,
    university: 'SGGW Warsaw - Cloud Technologies spec.',
    currentFocus: 'DevOps & Cloud with Security Mindset'
  };

  // Prawdziwe posty z LinkedIn - dodaj linki do swoich postów
  const postsData = [
    {
      id: '1',
      content: 'Tydzień 4 nauki DevOps/Cloud za mną! 🚀 W poszukiwaniu Azure datacenter wyruszyłem na Maltę - od katakumb po groty, aż na szczyt Comino. Chmury nie znalazłem, ale słońce i świetne 5G tak! 😄 Po powrocie przerobiłem AZ-900: Cloud Computing, Shared Responsibility Model, modele chmur (Public/Private/Hybrid), koszty i usługi (IaaS/PaaS/SaaS/Serverless). Rada: ucz się małymi porcjami, regularnie i znajdź swoje miejsce flow! #DevOps #Azure #AZ900 #Malta',
      timestamp: new Date(Date.now() - 0 * 24 * 60 * 60 * 1000).toISOString(),
      likes: 42,
      comments: 12,
      shares: 8,
      linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7365824055490281473/',
      author: {
        name: 'Jakub Szych',
        profileUrl: 'https://www.linkedin.com/in/jakub-szych/'
      },
      hashtags: ['DevOps', 'Azure', 'AZ900', 'Malta', 'CloudComputing', 'StudentLife']
    }
  ];

  const fetchLinkedInData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Symulacja ładowania danych (można tu dodać prawdziwe API w przyszłości)
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setProfile(profileData);
      setPosts(postsData);

    } catch (err) {
      console.error('LinkedIn data loading error:', err);
      setError('Nie udało się załadować danych LinkedIn');
      
      // Fallback na dane statyczne
      setProfile(profileData);
      setPosts(postsData);
    } finally {
      setLoading(false);
    }
  };

  const refreshData = () => {
    fetchLinkedInData();
  };

  const visitLinkedInProfile = () => {
    window.open('https://www.linkedin.com/in/jakub-szych/', '_blank');
  };

  useEffect(() => {
    fetchLinkedInData();
  }, []);

  return {
    profile,
    posts,
    loading,
    error,
    refreshData,
    visitLinkedInProfile,
    isConnected: true, // Zawsze "połączony" bo używamy danych demonstracyjnych
    isUsingRealData: false // Oznacza że to dane demonstracyjne inspirowane rzeczywistym profilem
  };
};

export default useLinkedIn;
