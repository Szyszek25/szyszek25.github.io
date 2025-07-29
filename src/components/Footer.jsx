import { motion } from 'framer-motion';
import { Shield, Heart, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'O mnie', href: '#about' },
    { name: 'Ścieżka nauki', href: '#learning' },
    { name: 'LinkedIn', href: '#linkedin' },
    { name: 'Kontakt', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/szyszek25'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/jakub-szych/'
    },
    {
      name: 'TryHackMe',
      icon: Shield,
      url: 'https://tryhackme.com/p/jakubszych.dev'
    },
    {
      name: 'HackTheBox',
      icon: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.996 0L1.681 6v12l10.315 6 10.309-6V6L11.996 0zM6.92 17.544c-.503-.307-.755-.768-.755-1.383 0-.614.252-1.076.755-1.383.503-.307 1.176-.461 2.02-.461.844 0 1.517.154 2.02.461.503.307.754.769.754 1.383 0 .615-.251 1.076-.754 1.383-.503.307-1.176.461-2.02.461-.844 0-1.517-.154-2.02-.461zm8.158 0c-.503-.307-.755-.768-.755-1.383 0-.614.252-1.076.755-1.383.503-.307 1.176-.461 2.02-.461.844 0 1.517.154 2.02.461.503.307.754.769.754 1.383 0 .615-.251 1.076-.754 1.383-.503.307-1.176.461-2.02.461-.844 0-1.517-.154-2.02-.461zM12 8.006c.332 0 .659.034.979.1L12 8.943l-.979-.837c.32-.066.647-.1.979-.1z"/>
        </svg>
      ),
      url: 'https://app.hackthebox.com/profile/2477474'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Shield className="w-8 h-8 text-primary-500" />
              <span className="text-2xl font-bold text-gradient">
                Jakub Szych
              </span>
            </motion.div>
            
            <motion.p
              className="text-gray-400 mb-6 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Student IT odkrywający fascynujący świat cyberbezpieczeństwa. 
              Każdy dzień to nowa lekcja w dziedzinie ochrony systemów i ethical hackingu.
            </motion.p>

            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              className="text-lg font-semibold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Szybkie linki
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Learning Progress */}
          <div>
            <motion.h3
              className="text-lg font-semibold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Aktualnie uczę się
            </motion.h3>
            <motion.ul 
              className="space-y-2 text-gray-400 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <li>🔒 TryHackMe Pre-Security</li>
              <li>🐍 Python dla cybersec</li>
              <li>🐧 Linux administracja</li>
              <li>🛡️ Ethical hacking basics</li>
            </motion.ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear} Jakub Szych. Stworzone z</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>i</span>
            <span className="text-primary-400">React + Vite</span>
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <a 
              href="#privacy" 
              className="hover:text-primary-400 transition-colors duration-300"
            >
              Polityka prywatności
            </a>
            <span>•</span>
            <a 
              href="https://github.com/szyszek25/szyszek25.github.io" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors duration-300"
            >
              Kod źródłowy
            </a>
          </div>
        </motion.div>

        {/* Tech Stack Badge */}
        <motion.div
          className="text-center mt-6 pt-6 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 text-xs text-gray-500">
            <span>Powered by:</span>
            <span className="text-blue-400">React</span>
            <span>•</span>
            <span className="text-purple-400">Vite</span>
            <span>•</span>
            <span className="text-cyan-400">Tailwind CSS</span>
            <span>•</span>
            <span className="text-pink-400">Framer Motion</span>
            <span>•</span>
            <span className="text-green-400">GitHub Pages</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
