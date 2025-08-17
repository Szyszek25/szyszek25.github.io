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
    summary: 'Student IT (3rd year) na ścieżce DevOps & Cloud Technologies. Learning-by-building z Docker, GitHub Actions CI/CD, Azure. Powrót do cybersecurity w październiku z cloud background.',
    location: 'Poland',
    profilePicture: null,
    connections: '150+',
    followers: 125,
    profileUrl: 'https://www.linkedin.com/in/jakub-szych/',
    isStudent: true,
    university: 'SGGW Warsaw - Cloud Technologies spec.',
    currentFocus: 'DevOps & Cloud with Security Mindset'
  };

  // Prawdziwe posty z LinkedIn - dodaj linki do swoich postów
  const postsData = [
    {
      id: '1',
      content: 'Learning-by-building DevOps w praktyce! � Właśnie wdrożyłem kolejną aplikację z Docker containerization i GitHub Actions CI/CD na Railway. Automated testing, branch protection, secrets management - wszystko działa jak w zegarku. Security mindset w każdym kroku procesu! #DevOps #Docker #GitHubActions #CloudDeployment #Railway',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      likes: 28,
      comments: 7,
      shares: 3,
      linkedInUrl: 'https://www.linkedin.com/posts/jakub-szych_devops-docker-githubactions-activity-XXXXXXXXXX-XXXX',
      author: {
        name: 'Jakub Szych',
        profileUrl: 'https://www.linkedin.com/in/jakub-szych/'
      },
      hashtags: ['DevOps', 'Docker', 'GitHubActions', 'CloudDeployment', 'Railway']
    },
    {
      id: '2', 
      content: 'Azure fundamentals w praktyce! ☁️ Eksplorując AWS/Azure/GCP - fascynujące jak różne podejścia mają cloud providers do tego samego problemu. Linux/Bash basics, SSH, networking - budowanie solidnych fundamentów przed przejściem do Kubernetes. October plan: powrót do cybersecurity z tym cloud background! #Azure #CloudFundamentals #Linux #DevOpsJourney',
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      likes: 35,
      comments: 9,
      shares: 5,
      linkedInUrl: 'https://www.linkedin.com/posts/jakub-szych_azure-cloudfundamentals-linux-activity-XXXXXXXXXX-XXXX',
      author: {
        name: 'Jakub Szych',
        profileUrl: 'https://www.linkedin.com/in/jakub-szych/'
      },
      hashtags: ['Azure', 'CloudFundamentals', 'Linux', 'DevOpsJourney']
    },
    {
      id: '3',
      content: 'CI/CD pipeline evolution! 🔄 Od prostych GitHub Actions do complex workflows z automated testing, Railway deployment z cron schedules. YAML staje się moim drugim językiem! Security-first approach - każdy commit przez branch protection, secrets management na poziomie. Next: Kubernetes & Terraform basics. #CICD #YAML #Automation #SecureDeployment',
      timestamp: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
      likes: 41,
      comments: 11,
      shares: 7,
      linkedInUrl: 'https://www.linkedin.com/posts/jakub-szych_cicd-yaml-automation-activity-XXXXXXXXXX-XXXX',
      author: {
        name: 'Jakub Szych',
        profileUrl: 'https://www.linkedin.com/in/jakub-szych/'
      },
      hashtags: ['CICD', 'YAML', 'Automation', 'SecureDeployment']
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
