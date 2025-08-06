# LinkedIn API Integration

## 🔗 **Integracja LinkedIn API w portfolio**

### **Kroki konfiguracji:**

#### 1. **Utworzenie aplikacji LinkedIn**
1. Idź na [LinkedIn Developers](https://www.linkedin.com/developers/)
2. Zaloguj się i kliknij "Create App"
3. Wypełnij formularz:
   - **App name**: "Jakub Szych Portfolio"
   - **LinkedIn Page**: Twoja strona LinkedIn
   - **Privacy policy URL**: `https://szyszek25.github.io/privacy`
   - **App logo**: Logo twojego portfolio
4. Dodaj następujące **Authorized redirect URLs**:
   - `https://szyszek25.github.io/linkedin-callback`
   - `http://localhost:3000/linkedin-callback` (do developmentu)

#### 2. **Konfiguracja uprawnień**
W zakładce "Auth" swojej aplikacji:
- ✅ **r_liteprofile** - podstawowe dane profilu
- ✅ **r_emailaddress** - adres email  
- ✅ **w_member_social** - możliwość czytania postów

#### 3. **Zmienne środowiskowe**
Skopiuj `.env.example` do `.env` i wypełnij:
```bash
REACT_APP_LINKEDIN_CLIENT_ID=your_client_id_here
REACT_APP_LINKEDIN_CLIENT_SECRET=your_client_secret_here
```

#### 4. **OAuth Flow**
1. Użytkownik klika "Połącz z LinkedIn"
2. Przekierowanie na LinkedIn OAuth
3. Po autoryzacji → powrót na `/linkedin-callback`
4. Komponent `LinkedInCallback` obsługuje token
5. Token zapisywany w localStorage
6. Automatyczne odświeżanie danych

### **Struktura komponentów:**

```
src/
├── hooks/
│   └── useLinkedIn.js          # Hook do zarządzania danymi LinkedIn
├── components/
│   ├── LinkedInFeed.jsx        # Główny komponent sekcji
│   ├── LinkedInProfile.jsx     # Karta profilu
│   ├── LinkedInPosts.jsx       # Lista postów
│   └── LinkedInCallback.jsx    # Obsługa OAuth callback
```

### **API Endpoints używane:**

1. **Profil**: `https://api.linkedin.com/v2/people/~`
   ```json
   {
     "localizedFirstName": "Jakub",
     "localizedLastName": "Szych",
     "localizedHeadline": "IT Student | Cybersecurity Beginner"
   }
   ```

2. **Posty**: `https://api.linkedin.com/v2/shares`
   ```json
   {
     "elements": [
       {
         "text": {"text": "Content of the post"},
         "activity": "urn:li:activity:123456789"
       }
     ]
   }
   ```

### **Fallback dane:**
Jeśli LinkedIn API nie jest skonfigurowane lub dostępne, aplikacja automatycznie używa przykładowych danych demonstracyjnych.

### **Bezpieczeństwo:**
- Wszystkie API klucze w zmiennych środowiskowych
- OAuth 2.0 z PKCE
- Tokeny przechowywane bezpiecznie w localStorage
- Automatyczne wygasanie tokenów

### **Testowanie:**
```bash
# Development
npm run dev
# Aplikacja dostępna na http://localhost:3000

# Production build
npm run build
npm run preview
```

### **Deployment do GitHub Pages:**
```bash
# Build i deploy automatycznie przez GitHub Actions
git add .
git commit -m "Add LinkedIn integration"
git push origin main
```

### **Troubleshooting:**

**Problem**: "Invalid redirect URI"
- **Rozwiązanie**: Sprawdź czy URL w LinkedIn app odpowiada dokładnie tym w deployment

**Problem**: "Access token expired"  
- **Rozwiązanie**: Komponenty automatycznie przełączą się na dane fallback

**Problem**: CORS errors
- **Rozwiązanie**: LinkedIn API wymaga server-side proxy dla production

### **Przyszłe ulepszenia:**
- [ ] Server-side proxy dla LinkedIn API
- [ ] Automatyczne odświeżanie tokenów
- [ ] Cache'owanie danych w localStorage
- [ ] Dodanie więcej szczegółów profilu
- [ ] Integracja z LinkedIn messaging API
