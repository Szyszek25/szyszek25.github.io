import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Send, Github, Linkedin, Twitter, Shield } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Replace with your actual Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/jakub-szych',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/szyszek25',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      name: 'TryHackMe',
      icon: Shield,
      url: 'https://tryhackme.com/p/szyszek25',
      color: 'hover:text-red-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/jakub_szych',
      color: 'hover:text-blue-400'
    }
  ];

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
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Skontaktuj się ze mną
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Masz pytania o cyberbezpieczeństwo? Chcesz nawiązać współpracę? 
              Napisz do mnie!
            </p>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <Mail className="w-6 h-6 text-primary-500 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Wyślij wiadomość
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Imię i nazwisko
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                        placeholder="Jan Kowalski"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                        placeholder="jan@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Temat
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                      placeholder="Pytanie o cyberbezpieczeństwo"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300 resize-none"
                      placeholder="Napisz swoją wiadomość..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <p className="text-green-600 dark:text-green-400">
                        ✅ Wiadomość została wysłana pomyślnie!
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-red-600 dark:text-red-400">
                        ❌ Wystąpił błąd. Spróbuj ponownie lub skontaktuj się bezpośrednio.
                      </p>
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Wysyłanie...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Wyślij wiadomość</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6">
                  Skontaktuj się bezpośrednio
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-100" />
                    <a 
                      href="mailto:jakub.szych@example.com"
                      className="hover:text-primary-100 transition-colors duration-300"
                    >
                      jakub.szych@example.com
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4 text-primary-100">
                    Odpowiadam zwykle w ciągu:
                  </h4>
                  <div className="space-y-2 text-sm text-primary-100">
                    <div>📧 Email: 24 godzin</div>
                    <div>💼 LinkedIn: 2-3 dni</div>
                    <div>🐦 Twitter: Według dostępności</div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                  Znajdź mnie online
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <social.icon className="w-6 h-6" />
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  💡 Najlepiej kontaktować się w sprawach:
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                  <li>• Pytania o cyberbezpieczeństwo</li>
                  <li>• Współpraca przy projektach edukacyjnych</li>
                  <li>• Mentoring w nauce IT security</li>
                  <li>• Wymiana doświadczeń z TryHackMe/HTB</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
