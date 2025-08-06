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
    headline: 'IT Student | Cybersecurity Beginner',
    summary: 'Student IT rozpoczynający przygodę z cyberbezpieczeństwem. Odkrywam świat ethical hackingu, penetration testingu i ochrony systemów.',
    location: 'Poland',
    profilePicture: null,
    connections: '150+',
    followers: 89,
    profileUrl: 'https://www.linkedin.com/in/jakub-szych/',
    isStudent: true,
    university: 'IT Studies',
    currentFocus: 'Cybersecurity & Ethical Hacking'
  };

  // Prawdziwe posty z LinkedIn - dodaj linki do swoich postów
  const postsData = [
    {
      id: '1',
      content: 'Właśnie ukończyłem pierwszy pokój na TryHackMe! 🔒 "Basic Pentesting" był świetnym wprowadzeniem do praktycznych aspektów testowania penetracyjnego. Fascynuje mnie, jak wiele można się nauczyć poprzez hands-on experience. Następny cel: ukończenie ścieżki "Pre Security"! #TryHackMe #Cybersecurity #EthicalHacking #LearningJourney',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      likes: 23,
      comments: 5,
      shares: 2,
      linkedInUrl: 'https://www.linkedin.com/posts/jakub-szych_tryhackme-cybersecurity-ethicalhacking-activity-XXXXXXXXXX-XXXX', // 🔥 TUTAJ WSTAW PRAWDZIWY LINK
      author: {
        name: 'Jakub Szych',
        profileUrl: 'https://www.linkedin.com/in/jakub-szych/'
      },
      hashtags: ['TryHackMe', 'Cybersecurity', 'EthicalHacking', 'LearningJourney']
    },
    {
      id: '2',
      content: 'Dzisiaj odkryłem potęgę OSINT (Open Source Intelligence) podczas nauki cyberbezpieczeństwa! 🔍 Niesamowite, jak wiele cennych informacji można znaleźć używając tylko publicznie dostępnych źródeł. To otwiera mi oczy na znaczenie digital footprint i privacy. Kolejny krok: poznanie narzędzi jak Maltego i theHarvester. #OSINT #InfoSec #CyberSecurity #DigitalForensics',
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      likes: 31,
      comments: 8,
      shares: 4,
      linkedInUrl: 'https://www.linkedin.com/posts/jakub-szych_osint-infosec-cybersecurity-activity-XXXXXXXXXX-XXXX', // 🔥 TUTAJ WSTAW PRAWDZIWY LINK
      author: {
        name: 'Jakub Szych',
        profileUrl: 'https://www.linkedin.com/in/jakub-szych/'
      },
      hashtags: ['OSINT', 'InfoSec', 'CyberSecurity', 'DigitalForensics']
    },
    {
      id: '3',
      content: 'Rozpocząłem naukę Pythona w kontekście cyberbezpieczeństwa! 🐍 Pierwszy skrypt do skanowania portów już gotowy. Jest coś magicznego w automatyzacji zadań security testing. Python okazuje się nieocenionym narzędziem w arsenale ethical hackera. Planuję kolejne projekty: password cracker i vulnerability scanner. #Python #NetworkSecurity #Scripting #CyberSec',
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      likes: 42,
      comments: 12,
      shares: 6,
      linkedInUrl: 'https://www.linkedin.com/posts/jakub-szych_python-networksecurity-scripting-activity-XXXXXXXXXX-XXXX', // 🔥 TUTAJ WSTAW PRAWDZIWY LINK
      author: {
        name: 'Jakub Szych',
        profileUrl: 'https://www.linkedin.com/in/jakub-szych/'
      },
      hashtags: ['Python', 'NetworkSecurity', 'Scripting', 'CyberSec']
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
