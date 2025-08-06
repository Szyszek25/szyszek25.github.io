# 🔗 Jak dodać prawdziwe posty LinkedIn

## Krok po kroku:

### 1. **Znajdź link do swojego postu:**
- Otwórz swój post na LinkedIn
- Kliknij w datę postu (np. "2 dni temu")
- Skopiuj URL z paska adresu

### 2. **Dodaj post do `src/hooks/useLinkedIn.js`:**

```javascript
{
  id: '4', // unikalny ID
  content: 'Treść twojego postu...', // skopiuj z LinkedIn
  timestamp: new Date('2025-01-27').toISOString(), // data postu
  likes: 15, // liczba polubień (opcjonalne)
  comments: 3, // liczba komentarzy (opcjonalne)
  shares: 1, // liczba udostępnień (opcjonalne)
  linkedInUrl: 'https://www.linkedin.com/posts/jakub-szych_...', // 🔥 PRAWDZIWY LINK
  author: {
    name: 'Jakub Szych',
    profileUrl: 'https://www.linkedin.com/in/jakub-szych/'
  },
  hashtags: ['Python', 'Cybersecurity'] // hashtagi z postu
}
```

### 3. **Przykładowe formaty linków LinkedIn:**

**Post aktywności:**
```
https://www.linkedin.com/posts/jakub-szych_tryhackme-cybersecurity-ethicalhacking-activity-1234567890123456789-abcd
```

**Post z komentarzem:**
```
https://www.linkedin.com/posts/jakub-szych_cybersecurity-activity-1234567890123456789-abcd?utm_source=share&utm_medium=member_desktop
```

### 4. **Gdzie znaleźć linki:**

1. **Na profilu LinkedIn:**
   - Idź na swój profil
   - Kliknij "Aktywność" 
   - Kliknij datę każdego postu

2. **Z powiadomień:**
   - Otwórz powiadomienie o polubienia/komentarzu
   - Kliknij w post

3. **Z feed'a:**
   - Znajdź swój post w głównym feed'ie
   - Kliknij datę postu

## ✅ Korzyści tego podejścia:

- ✅ **Autentyczność** - prawdziwe linki do twoich postów
- ✅ **SEO** - linki wychodzące do LinkedIn
- ✅ **Profesjonalizm** - odwiedzający mogą zobaczyć prawdziwe engagement
- ✅ **Prostota** - nie potrzeba API ani autoryzacji
- ✅ **Kontrola** - wybierasz które posty pokazać

## 🔄 Aktualizacja postów:

Gdy dodasz nowy post na LinkedIn:
1. Skopiuj link do postu
2. Dodaj go do tablicy `postsData` w `useLinkedIn.js`
3. Uruchom `npm run build` i wdróż

## 💡 Pro Tips:

- **Sortuj chronologicznie** - najnowsze posty na górze
- **Aktualizuj statystyki** - likes/comments zmieniają się
- **Używaj emoji** - czyni posty bardziej atrakcyjnymi
- **Hashtagi** - pomagają w kategoryzacji treści
