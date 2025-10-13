# 🤖 Przewodnik aktualizacji portfolio - Instrukcje dla AI

## 📋 Spis treści
1. [Wprowadzenie](#wprowadzenie)
2. [Format wejściowy](#format-wejściowy)
3. [Główny prompt dla AI](#główny-prompt-dla-ai)
4. [Zasady edycji plików](#zasady-edycji-plików)
5. [Struktura projektu](#struktura-projektu)
6. [Przykłady użycia](#przykłady-użycia)
7. [Walidacja i testowanie](#walidacja-i-testowanie)

---

## 🎯 Wprowadzenie

Ten dokument zawiera kompletne instrukcje dla asystentów AI (ChatGPT, Claude, Copilot) do automatycznej aktualizacji portfolio. System działa w oparciu o cotygodniowe aktualizacje z LinkedIn i materiałów PDF ze studiów.

### Cel systemu
- Automatyczne dodawanie postępów nauki do portfolio
- Synchronizacja treści między LinkedIn a stroną
- Utrzymanie spójności danych w JSON i TXT
- Minimalizacja ręcznej pracy przy aktualizacjach

---

## 📥 Format wejściowy

### Struktura zapytania od użytkownika

```
TYDZIEŃ: [numer]

LINKEDIN POST:
[pełna treść posta z LinkedIn]
LINK: [URL do posta LinkedIn]

PDF CONTENT:
[treść z PDF lub opis zajęć ze studiów]

AKCJA: aktualizuj portfolio
```

### Przykład rzeczywistego zapytania

```
TYDZIEŃ: 11

LINKEDIN POST:
Cześć wszystkim, jest poniedziałek, a to oznacza, że...
Tydzień 11. nauki DevOps/Data za mną! 🚀

🗓️ W sobotę wystartowałem ze swoim pierwszym biuletynem, otwierając go artykułem 
o analizie emocji w polskich mediach...

LINK: https://www.linkedin.com/feed/update/urn:li:ugcPost:7383509195725357057/

PDF CONTENT:
Tydzień 11 - studia (2 tygodnie):

1) Python:
- Nauka podstaw Pythona
- Typy podstawowe: int, float, bool, str
- Pętle: for, while
- Struktury danych: listy, krotki, słowniki, zbiory

2) DevOps CKA:
- Kubernetes podstawy
- kubectl run, logs, patch, apply
- YAML konfiguracje

3) Wirtualizacja:
- Docker CLI
- docker pull, run, exec, start
- Opcje kontenerów

4) Techniki cyfrowe:
- Algebra Boole'a
- Bramki logiczne: AND, OR, NOT, NAND, NOR

5) Paradygmaty programowania:
- Programowanie imperatywne
- Python i C

AKCJA: aktualizuj portfolio
```

---

## 🤖 Główny prompt dla AI

### PROMPT SYSTEMOWY

```markdown
Jesteś asystentem aktualizującym portfolio DevOps/Data na GitHub Pages (React/Vite).

KONTEKST PROJEKTU:
- Portfolio: szyszek25.github.io
- Stack: React + Vite + Tailwind CSS
- Dane: JSON + TXT (synchronizacja)
- Aktualizacje: cotygodniowe (poniedziałki)

ZADANIA:
1. Dodaj nowy post LinkedIn do feedu
2. Zaktualizuj postępy nauki w odpowiednich kafelkach
3. Zachowaj synchronizację JSON ↔ TXT
4. Waliduj składnię JSON

---

MAPOWANIE TREŚCI → KAFELKI:

📌 STUDIA (osobne kafelki dla każdego przedmiotu):
- Słowa-klucze "Python", "pandas", "numpy" 
  → "Studia — Python"
  
- Słowa-klucze "Docker", "kontener", "obraz", "CLI"
  → "Studia — DevOps CKA"
  
- Słowa-klucze "kubectl", "Kubernetes", "pod", "YAML"
  → "Studia — DevOps CKA"
  
- Słowa-klucze "VirtualBox", "Rocky Linux", "SSH", "minikube"
  → "Studia — Wirtualizacja"
  
- Słowa-klucze "algebra Boole'a", "bramki logiczne", "układy cyfrowe"
  → "Studia — Techniki cyfrowe"
  
- Słowa-klucze "paradygmat", "imperatywne", "algorytmy"
  → "Studia — Paradygmaty programowania"

📌 PROJEKTY OSOBISTE:
- Słowa-klucze "analiza emocji", "sentiment", "model", "Streamlit", "Transformers"
  → "Analiza emocji i wydźwięku w polskich mediach"
  
- Słowa-klucze "pipeline", "dane treningowe", "metryki", "NLP"
  → "Fundamenty pod projekt – Data Science / AI"

📌 TECHNOLOGIE:
- Azure, Docker, GitHub Actions, Railway, AWS, GCP, Linux/Bash
  → Odpowiednie kafelki technologiczne

---

STRUKTURA WPISU W KAFELKU:

1. Pierwszy element ZAWSZE: "📅 Tydzień {NR}:"
2. Kolejne elementy: zwięzłe punkty (1 linia = 1 temat)
3. Język polski, bez duplikatów
4. Zachowaj historię poprzednich tygodni

---

PLIKI DO EDYCJI:

1. public/linkedin.json
   - Dodaj nowy post z: id, title, summary, link, publishDate, author
   - Zaktualizuj "lastUpdated" (ISO 8601)
   - Posortuj: najnowszy na górze

2. src/data/linkedin.json
   - Synchronizuj z public/linkedin.json

3. src/data/skills-progress.json
   - Dodaj Tydzień {NR} do odpowiednich kafelków
   - WAŻNE: Dodawaj NA GÓRĘ istniejących kafelków (nie twórz nowych!)
   - Każdy kafelek = klucz JSON
   - Format: tablica stringów

4. src/data/skills-progress.txt
   - Mirror zmian z JSON
   - Format: nagłówki + lista punktów

---

ZASADY NAZEWNICTWA KAFELKÓW:

✅ POPRAWNE (istniejące):
- "Analiza emocji i wydźwięku w polskich mediach"
- "Studia — Python"
- "Studia — DevOps CKA"
- "Studia — Wirtualizacja"
- "Studia — Techniki cyfrowe"
- "Studia — Paradygmaty programowania"
- "Fundamenty pod projekt – Data Science / AI"
- "Azure", "Docker", "GitHub Actions", "Railway", "AWS", "Google Cloud Platform", "Linux/Bash"
- "Kursy", "Studia"

❌ NIE TWÓRZ NOWYCH KAFELKÓW bez wyraźnej zgody użytkownika!

---

KAFELKI SZEROKIE (col-span-2):
- "Analiza emocji i wydźwięku w polskich mediach" (ZAWSZE PIERWSZY!)
- "Kursy"
- "Fundamenty pod projekt – Data Science / AI"
- "Azure"

---

WALIDACJA:

Po każdej edycji sprawdź:
1. JSON jest poprawny składniowo (brak trailing commas!)
2. Brak duplikatów kluczy w JSON
3. Synchronizacja JSON ↔ TXT
4. Data ISO 8601: "2025-10-13T08:00:00Z"
5. ID postu LinkedIn = kolejny numer

---

WORKFLOW:

1. PARSUJ zapytanie użytkownika:
   - Wyciągnij numer tygodnia
   - Wyciągnij treść posta LinkedIn + link
   - Wyciągnij treści ze studiów/PDF
   - Zidentyfikuj słowa-klucze

2. MAPUJ treści na kafelki:
   - Użyj słów-kluczowych
   - Sprawdź istniejące kafelki
   - NIE twórz nowych!

3. EDYTUJ pliki:
   - public/linkedin.json → nowy post
   - src/data/linkedin.json → sync
   - src/data/skills-progress.json → dodaj Tydzień {NR}
   - src/data/skills-progress.txt → sync

4. WALIDUJ:
   - Sprawdź składnię JSON
   - Potwierdź brak duplikatów
   - Podsumuj zmiany dla użytkownika

---

PRZYKŁAD WYJŚCIA:

✅ Dodano Tydzień 11:
- 📄 public/linkedin.json: nowy post (id: 11)
- 📄 src/data/linkedin.json: zsynchronizowano
- 📄 skills-progress.json: zaktualizowano 5 kafelków
  • Studia — Python (7 nowych punktów)
  • Studia — DevOps CKA (6 nowych punktów)
  • Studia — Wirtualizacja (8 nowych punktów)
  • Studia — Techniki cyfrowe (7 nowych punktów)
  • Studia — Paradygmaty programowania (6 nowych punktów)
- 📄 skills-progress.txt: zsynchronizowano

✅ Walidacja: wszystkie pliki poprawne składniowo
```

---

## 📁 Zasady edycji plików

### 1. LinkedIn Feed (JSON)

**Pliki:**
- `public/linkedin.json` (produkcja)
- `src/data/linkedin.json` (backup/dev)

**Struktura posta:**
```json
{
  "id": 11,
  "title": "Tydzień 11: krótki tytuł",
  "summary": "Rozszerzony opis (2-3 zdania)",
  "link": "https://www.linkedin.com/feed/update/urn:li:ugcPost:XXXXX/",
  "publishDate": "2025-10-13T08:00:00Z",
  "author": "Jakub Szych"
}
```

**Zasady:**
- ID = kolejny numer (poprzedni + 1)
- publishDate = poniedziałek rano (08:00:00Z)
- Aktualizuj `lastUpdated` w głównym obiekcie
- Sortuj: najnowszy post na górze tablicy `posts`

### 2. Skills Progress (JSON)

**Plik:** `src/data/skills-progress.json`

**Struktura kafelka:**
```json
{
  "Studia — Python": [
    "📅 Tydzień 11:",
    "Punkt 1: krótki opis",
    "Punkt 2: krótki opis",
    "📅 Tydzień 10:",
    "Punkt z poprzedniego tygodnia",
    "..."
  ]
}
```

**Zasady:**
- Każdy klucz = jeden kafelek UI
- Pierwszy element nowego tygodnia ZAWSZE: `"📅 Tydzień {NR}:"`
- Nowy tydzień dodawaj NA GÓRĘ tablicy (zachowuj historię)
- Jeden punkt = jeden string (bez zagnieżdżania)
- Język polski, polskie znaki (UTF-8)
- Bez trailing commas!

### 3. Skills Progress (TXT)

**Plik:** `src/data/skills-progress.txt`

**Format:**
```
Nazwa kafelka:
- Tydzień 11: punkt 1
- Tydzień 11: punkt 2
- Tydzień 10: punkt 3

Następny kafelka:
- Tydzień 11: punkt 1
```

**Zasady:**
- Mirror zmian z JSON
- Każda sekcja = nagłówek + lista
- Pusta linia między sekcjami
- Zachowaj polskie znaki

---

## 🏗️ Struktura projektu

```
szyszek25.github.io/
├── public/
│   ├── linkedin.json          # ← Feed LinkedIn (produkcja)
│   └── google8262...html
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Przyciski CTA
│   │   ├── SkillsProgress.jsx # Renderowanie kafelków
│   │   ├── LinkedInFeed.jsx
│   │   └── ...
│   ├── data/
│   │   ├── linkedin.json      # ← Feed LinkedIn (backup)
│   │   ├── skills-progress.json # ← Główne dane postępów
│   │   └── skills-progress.txt  # ← Mirror (human-readable)
│   ├── hooks/
│   │   └── useSkillsProgress.js
│   └── ...
├── docs/
│   ├── AI_UPDATE_GUIDE.md     # ← TEN DOKUMENT
│   ├── LINKEDIN_INTEGRATION.md
│   └── SKILLS_UPDATE_GUIDE.md
├── package.json
└── README.md
```

### Pliki kluczowe dla AI

| Plik | Cel | Format | Edycja AI |
|------|-----|--------|-----------|
| `public/linkedin.json` | Feed LinkedIn (prod) | JSON | ✅ TAK |
| `src/data/linkedin.json` | Feed LinkedIn (backup) | JSON | ✅ TAK |
| `src/data/skills-progress.json` | Dane kafelków | JSON | ✅ TAK |
| `src/data/skills-progress.txt` | Mirror (readable) | TXT | ✅ TAK |
| `src/components/SkillsProgress.jsx` | UI kafelków | JSX | ❌ NIE* |
| `src/components/Hero.jsx` | Przyciski hero | JSX | ❌ NIE* |

*Tylko w przypadku dodawania nowych kafelków lub zmiany layoutu (z pozwoleniem użytkownika)

---

## 💡 Przykłady użycia

### Przykład 1: Standardowa aktualizacja tygodniowa

**Input użytkownika:**
```
TYDZIEŃ: 12

LINKEDIN:
Tydzień 12. nauki DevOps/Data za mną! 🚀
Kubernetes deep dive, Azure Functions, nowy projekt ML.
Link: https://www.linkedin.com/feed/update/urn:li:ugcPost:7385000000000000000/

PDF:
- Python: List comprehensions, generatory, dekoratory
- DevOps CKA: Kubernetes services (ClusterIP, NodePort, LoadBalancer)
- Wirtualizacja: Docker Compose, multi-container apps
```

**Oczekiwane akcje AI:**

1. **Dodaj post do LinkedIn feed:**
```json
{
  "id": 12,
  "title": "Tydzień 12: Kubernetes, Azure Functions i ML",
  "summary": "Tydzień 12. nauki DevOps/Data za mną! 🚀 Kubernetes deep dive, Azure Functions, nowy projekt ML.",
  "link": "https://www.linkedin.com/feed/update/urn:li:ugcPost:7385000000000000000/",
  "publishDate": "2025-10-20T08:00:00Z",
  "author": "Jakub Szych"
}
```

2. **Zaktualizuj kafelki:**
- `Studia — Python`: dodaj 3 punkty o list comprehensions
- `Studia — DevOps CKA`: dodaj 3 punkty o Kubernetes services
- `Studia — Wirtualizacja`: dodaj 2 punkty o Docker Compose

3. **Sync TXT**

### Przykład 2: Projekt osobisty

**Input:**
```
TYDZIEŃ: 12

Ukończyłem pierwszą wersję dashboardu analizy emocji!
- Dodano wykresy interaktywne (Plotly)
- Integracja z API OpenAI
- Automatyczne raporty PDF
```

**Akcje AI:**
Dodaj do kafelka "Analiza emocji i wydźwięku w polskich mediach":
```json
"📅 Tydzień 12:",
"Dashboard analizy emocji – pierwsza wersja ukończona",
"Wykresy interaktywne z użyciem Plotly",
"Integracja z API OpenAI dla analizy zaawansowanej",
"Automatyczne generowanie raportów PDF",
```

---

## ✅ Walidacja i testowanie

### Checklist przed finalizacją

```markdown
□ Składnia JSON poprawna (użyj narzędzia JSON validator)
□ Brak duplikatów kluczy w JSON
□ Wszystkie stringi w UTF-8 (polskie znaki)
□ Data w formacie ISO 8601
□ ID postów LinkedIn: rosnąco, bez luk
□ Nowy tydzień NA GÓRZE istniejących wpisów
□ Synchronizacja JSON ↔ TXT
□ Brak trailing commas w JSON
□ Zachowana historia poprzednich tygodni
□ Nagłówki tygodni: "📅 Tydzień {NR}:"
```

### Komendy walidacji

```bash
# Walidacja JSON
npm run validate-json

# Build test
npm run build

# Dev server test
npm run dev
```

### Typowe błędy

| Błąd | Przyczyna | Rozwiązanie |
|------|-----------|-------------|
| `Duplicate object key` | Duplikat klucza w JSON | Usuń duplikat, zachowaj jeden |
| `Unexpected token` | Trailing comma | Usuń przecinek przed `}` lub `]` |
| `Invalid date` | Zły format daty | Użyj ISO 8601: `YYYY-MM-DDTHH:mm:ssZ` |
| Brak polskich znaków | Kodowanie | Zapisz jako UTF-8 |

---

## 🔄 Workflow pełny przykład

### Krok po kroku: Aktualizacja Tygodnia 11

**1. Użytkownik dostarcza dane:**
```
TYDZIEŃ: 11
LINKEDIN: [treść + link]
PDF: [treść ze studiów]
```

**2. AI parsuje zapytanie:**
- Tydzień: 11
- Tematy: Python (podstawy), Kubernetes, Docker, elektronika, paradygmaty
- Link LinkedIn: urn:li:ugcPost:7383509195725357057

**3. AI mapuje treści:**
- Python → "Studia — Python"
- Kubernetes → "Studia — DevOps CKA"  
- Docker → "Studia — Wirtualizacja"
- Elektronika → "Studia — Techniki cyfrowe"
- Paradygmaty → "Studia — Paradygmaty programowania"

**4. AI edytuje pliki:**

`public/linkedin.json`:
```json
{
  "lastUpdated": "2025-10-13T12:00:00Z",
  "posts": [
    {
      "id": 11,
      "title": "Tydzień 11: emocje w mediach, biuletyn i studia",
      "summary": "...",
      "link": "https://www.linkedin.com/feed/update/urn:li:ugcPost:7383509195725357057/",
      "publishDate": "2025-10-13T08:00:00Z",
      "author": "Jakub Szych"
    },
    ...poprzednie posty
  ]
}
```

`src/data/skills-progress.json`:
```json
{
  "Studia — Python": [
    "📅 Tydzień 11:",
    "Nauka podstaw Pythona",
    "Typy podstawowe: int, float, bool, str",
    "Pętle: for, while",
    "...",
    "📅 Tydzień 10:",
    "..."
  ],
  ...
}
```

**5. AI waliduje:**
- ✅ JSON valid
- ✅ Brak duplikatów
- ✅ TXT zsynchronizowany
- ✅ Daty poprawne

**6. AI podsumowuje:**
```
✅ Zaktualizowano portfolio:
- Dodano post LinkedIn (Tydzień 11)
- Zaktualizowano 5 kafelków studiów
- Zsynchronizowano wszystkie pliki
- Walidacja: OK
```

---

## 🎓 Wskazówki dla AI

### Do's ✅
- Czytaj CAŁY kontekst przed edycją
- Używaj narzędzia `multi_replace_string_in_file` dla wielu edycji
- Waliduj JSON po każdej zmianie
- Zachowuj historię (nie nadpisuj starych wpisów)
- Pytaj o zgodę przed tworzeniem nowych kafelków
- Używaj polskich znaków (UTF-8)

### Don'ts ❌
- NIE twórz nowych kafelków bez zgody
- NIE usuwaj historii poprzednich tygodni
- NIE używaj trailing commas w JSON
- NIE mieszaj formatów dat
- NIE duplikuj kluczy w JSON
- NIE edytuj komponentów React bez potrzeby

---

## 📞 Kontakt i feedback

Jeśli AI napotka problem:
1. Zatrzymaj edycję
2. Opisz problem użytkownikowi
3. Zaproponuj rozwiązanie
4. Poczekaj na potwierdzenie

**Przykład:**
```
❌ Problem: Nie znalazłem kafelka pasującego do tematu "Cyberbezpieczeństwo"

💡 Propozycja:
- Opcja A: Dodać do istniejącego kafelka "Azure" (Security-related)
- Opcja B: Utworzyć nowy kafelek "Cyberbezpieczeństwo"

❓ Jak chcesz, żebym postąpił?
```

---

## 📝 Historia zmian dokumentu

| Data | Wersja | Zmiany |
|------|--------|--------|
| 2025-10-13 | 1.0 | Pierwsza wersja kompletnego przewodnika |

---

**Autor:** Jakub Szych  
**Projekt:** szyszek25.github.io  
**Ostatnia aktualizacja:** 13 października 2025
