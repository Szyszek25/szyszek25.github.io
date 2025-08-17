import { useState, useEffect } from 'react';

export const useSkillsProgress = () => {
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        // Import the JSON file statically for Vite/React
        const skillsData = await import('../data/skills-progress.json');
        setSkills(skillsData.default);
        setError(null);
      } catch (err) {
        console.error('Error loading skills:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  const refreshSkills = async () => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const skillsData = await import('../data/skills-progress.json');
        setSkills(skillsData.default);
        setError(null);
      } catch (err) {
        console.error('Error loading skills:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    await fetchSkills();
  };

  return { skills, loading, error, refreshSkills };
};
