# 🚀 Jakub Szych – Portfolio DevOps & Cloud

Nowoczesne, responsywne portfolio studenta informatyki rozwijającego się w kierunku **DevOps i technologii chmurowych**, zbudowane z **React + Vite** i hostowane na **GitHub Pages**.

## ✨ Funkcje

* **Responsywny design** – działa na wszystkich urządzeniach
* **Dark/Light mode** – przełączanie motywów z localStorage
* **Animacje** – płynne przejścia z Framer Motion
* **LinkedIn Feed** – automatyczne pobieranie postów (GitHub Actions)
* **Formularz kontaktowy** – integracja z Formspree
* **PWA ready** – optymalizacja wydajności

## 🚀 Tech Stack

* **Frontend**: React 18 + Vite
* **Styling**: Tailwind CSS
* **Animacje**: Framer Motion
* **Ikony**: Lucide React
* **Deploy**: GitHub Pages
* **CI/CD**: GitHub Actions

## 📦 Instalacja i uruchomienie

### Wymagania

* Node.js 18+
* npm lub yarn

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

1. Idź do **Settings > Pages** w swoim repo
2. Wybierz „GitHub Actions” jako source
3. Kod automatycznie się zdeployuje po push do `main`

### Formspree (formularz kontaktowy)

1. Zarejestruj się na [formspree.io](https://formspree.io)
2. Stwórz nowy formularz
3. Zamień `YOUR_FORM_ID` w `Contact.jsx` na swój ID

### LinkedIn Feed (opcjonalne)

⚠️ Jeśli Twój profil LinkedIn jest prywatny, automatyczne pobieranie postów nie zadziała. Możesz:

1. **Używać mock danych** – edytuj `src/data/linkedin.json`
2. **Wyłączyć sekcję LinkedIn** – usuń komponent z `App.jsx`
3. **Ustawić profil jako publiczny** i skonfigurować RSS

## 📁 Struktura projektu

```
szyszek25.github.io/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── scripts/
├── .github/workflows/
├── package.json
└── vite.config.js
```

## 🎨 Personalizacja

* Zmiana kolorów: `tailwind.config.js`
* Dodawanie sekcji: `src/components/` + `App.jsx`
* Modyfikacja ścieżki nauki: `LearningPath.jsx`

## 🔍 SEO i Performance

* ✅ Meta tags (OpenGraph, Twitter Cards)
* ✅ Semantic HTML
* ✅ Lazy loading obrazów
* ✅ Minifikacja CSS/JS
* ✅ Responsive images

## 📱 Browser Support

* ✅ Chrome/Edge 90+
* ✅ Firefox 88+
* ✅ Safari 14+
* ✅ Mobile browsers

## 📄 Licencja

MIT License – możesz użyć tego kodu dla własnych projektów.

## 🤝 Contributing

Pull requests welcome! Proponowane ulepszenia:

* [ ] Więcej animacji
* [ ] Blog section
* [ ] Projects showcase
* [ ] Certyfikaty section
* [ ] Multi-language support

## 📬 Kontakt

* **Portfolio**: [szyszek25.github.io](https://szyszek25.github.io)
* **LinkedIn**: [jakub-szych](https://linkedin.com/in/jakub-szych)
* **GitHub**: [szyszek25](https://github.com/szyszek25)
