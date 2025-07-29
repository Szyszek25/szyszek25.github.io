# 🛡️ Jakub Szych - Portfolio Cybersecurity

Nowoczesne, responsywne portfolio studenta cyberbezpieczeństwa zbudowane z React + Vite i hostowane na GitHub Pages.

## ✨ Funkcje

- **Responsywny design** - działa na wszystkich urządzeniach
- **Dark/Light mode** - przełączanie motywów z localStorage
- **Animacje** - płynne przejścia z Framer Motion
- **LinkedIn Feed** - automatyczne pobieranie postów (GitHub Actions)
- **Formularz kontaktowy** - integracja z Formspree
- **PWA ready** - optymalizacja wydajności

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animacje**: Framer Motion
- **Ikony**: Lucide React
- **Deploy**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Instalacja i uruchomienie

### Wymagania
- Node.js 18+
- npm lub yarn

### Lokalne uruchomienie

```bash
# Klonowanie repozytorium
git clone https://github.com/szyszek25/szyszek25.github.io.git
cd szyszek25.github.io

# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Otwórz http://localhost:3000
```

### Build i deploy

```bash
# Build produkcyjny
npm run build

# Podgląd build
npm run preview

# Deploy na GitHub Pages
npm run deploy
```

## 🔧 Konfiguracja

### GitHub Pages
1. Idź do Settings > Pages w swoim repo
2. Wybierz "GitHub Actions" jako source
3. Kod automatycznie się zdeployuje po push do main

### Formspree (formularz kontaktowy)
1. Zarejestruj się na [formspree.io](https://formspree.io)
2. Stwórz nowy formularz
3. Zamień `YOUR_FORM_ID` w `Contact.jsx` na swój ID

### LinkedIn Feed (opcjonalne)

#### Metoda 1: RSS.app (zalecana)
1. Idź na [rss.app](https://rss.app)
2. Znajdź swój profil LinkedIn i skopiuj RSS URL
3. Ustaw webhook lub API endpoint
4. Zaktualizuj `scripts/update-linkedin.js`

#### Metoda 2: Zapier/n8n
1. Stwórz workflow: LinkedIn RSS → JSON webhook
2. Ustaw cron job co 24h
3. Webhook powinien aktualizować `src/data/linkedin.json`

#### Metoda 3: Ręcznie
```bash
# Aktualizuj linkedin.json ręcznie
npm run update:linkedin
```

### Konfiguracja RSS-to-JSON

W `scripts/update-linkedin.js` zaktualizuj:

```javascript
// Zamień na swój RSS URL
const RSS_TO_JSON_URL = 'https://api.rss.app/feeds/YOUR_FEED_ID.json';

// Lub użyj innego serwisu:
// const RSS_TO_JSON_URL = 'https://api.zapier.com/hooks/catch/YOUR_HOOK/';
```

## 📁 Struktura projektu

```
szyszek25.github.io/
├── public/
│   ├── shield.svg          # Ikona w header
│   └── ...
├── src/
│   ├── components/         # Komponenty React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── LearningPath.jsx
│   │   ├── LinkedInFeed.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   └── linkedin.json   # Dane LinkedIn (auto-update)
│   ├── App.jsx            # Główny komponent
│   ├── main.jsx           # Entry point
│   └── index.css          # Style Tailwind
├── scripts/
│   └── update-linkedin.js  # Skrypt update LinkedIn
├── .github/workflows/
│   ├── deploy.yml         # Deploy na GitHub Pages
│   └── linkedin.yml       # Auto-update LinkedIn
├── package.json
├── vite.config.js         # Konfiguracja Vite
├── tailwind.config.js     # Konfiguracja Tailwind
└── README.md
```

## 🎨 Personalizacja

### Zmiana kolorów
Edytuj `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#your-color',
    // ... inne odcienie
  }
}
```

### Dodawanie sekcji
1. Stwórz nowy komponent w `src/components/`
2. Dodaj do `App.jsx`
3. Dodaj link w `Header.jsx`

### Modyfikacja ścieżki nauki
Edytuj `LearningPath.jsx` - zaktualizuj array `learningSteps`

## 🔍 SEO i Performance

- ✅ Meta tags (OpenGraph, Twitter Cards)
- ✅ Semantic HTML
- ✅ Lazy loading obrazów
- ✅ Minifikacja CSS/JS
- ✅ Responsive images
- ✅ Fast loading fonts

## 🐛 Rozwiązywanie problemów

### Build fails
```bash
# Wyczyść cache
rm -rf node_modules package-lock.json
npm install
```

### LinkedIn feed nie działa
1. Sprawdź `src/data/linkedin.json`
2. Sprawdź konsole DevTools
3. Sprawdź GitHub Actions logs

### Formspree nie wysyła
1. Sprawdź czy FORM_ID jest poprawny
2. Sprawdź spam folder
3. Sprawdź limity na formspree.io

## 📱 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers

## 📄 Licencja

MIT License - możesz użyć tego kodu dla własnych projektów!

## 🤝 Contributing

Pull requests welcome! Proponowane ulepszenia:

- [ ] Więcej animacji
- [ ] Blog section
- [ ] Projects showcase
- [ ] Certyfikaty section
- [ ] Multi-language support

## 📬 Kontakt

- **LinkedIn**: [jakub-szych](https://linkedin.com/in/jakub-szych)
- **GitHub**: [szyszek25](https://github.com/szyszek25)
- **TryHackMe**: [szyszek25](https://tryhackme.com/p/szyszek25)

---

💡 **Tip**: Pamiętaj o regularnym commitowaniu i śledzeniu swoich postępów w cyberbezpieczeństwie!