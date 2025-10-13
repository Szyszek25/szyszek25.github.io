# 🤖 README dla AI Assistants

## Szybki Start

Jesteś asystentem aktualizującym portfolio DevOps/Data Engineer.

### Format zapytania użytkownika

```
TYDZIEŃ: [numer]
LINKEDIN: [treść posta]
LINK: [url]
PDF: [treść ze studiów]
AKCJA: aktualizuj portfolio
```

### Twoje zadania

1. ✅ Dodaj post do `public/linkedin.json` i `src/data/linkedin.json`
2. ✅ Zaktualizuj `src/data/skills-progress.json` (dodaj Tydzień {NR})
3. ✅ Zsynchronizuj `src/data/skills-progress.txt`
4. ✅ Waliduj składnię JSON

---

## 🎯 Mapowanie treści

| Słowa-klucze | Kafelek docelowy |
|--------------|------------------|
| Python, pandas, numpy, matplotlib | "Studia — Python" |
| Docker, kontener, obraz, CLI | "Studia — DevOps CKA" lub "Studia — Wirtualizacja" |
| Kubernetes, kubectl, pod, YAML | "Studia — DevOps CKA" |
| VirtualBox, Rocky Linux, SSH, minikube | "Studia — Wirtualizacja" |
| Algebra Boole'a, bramki, układy cyfrowe | "Studia — Techniki cyfrowe" |
| Paradygmat, imperatywne, algorytmy | "Studia — Paradygmaty programowania" |
| Analiza emocji, sentiment, Transformers, Streamlit | "Analiza emocji i wydźwięku w polskich mediach" |
| Pipeline, NLP, metryki, model | "Fundamenty pod projekt – Data Science / AI" |

---

## 📋 Zasady MUST-FOLLOW

1. **NIE TWÓRZ NOWYCH KAFELKÓW** bez wyraźnej zgody użytkownika
2. **DODAWAJ NA GÓRĘ** istniejących kafelków (zachowuj historię)
3. **PIERWSZY ELEMENT**: zawsze `"📅 Tydzień {NR}:"`
4. **JĘZYK POLSKI**: wszystkie treści po polsku (UTF-8)
5. **SYNCHRONIZACJA**: JSON ↔ TXT zawsze
6. **BRAK TRAILING COMMAS** w JSON
7. **DATA ISO 8601**: `"2025-10-13T08:00:00Z"`

---

## 📁 Pliki do edycji

### ✅ Edytuj ZAWSZE
- `public/linkedin.json` - Feed LinkedIn (produkcja)
- `src/data/linkedin.json` - Feed LinkedIn (backup)
- `src/data/skills-progress.json` - Dane kafelków
- `src/data/skills-progress.txt` - Mirror tekstowy

### ❌ NIE edytuj (bez zgody)
- `src/components/*.jsx` - Komponenty React
- `package.json` - Konfiguracja projektu
- `*.config.js` - Konfiguracje buildów

---

## 🔥 Quick Reference

### LinkedIn Post Structure
```json
{
  "id": 11,
  "title": "Tydzień 11: krótki tytuł",
  "summary": "Rozszerzone 2-3 zdania o treści",
  "link": "https://www.linkedin.com/feed/update/urn:li:ugcPost:XXXXX/",
  "publishDate": "2025-10-13T08:00:00Z",
  "author": "Jakub Szych"
}
```

### Skills Progress Entry
```json
{
  "Studia — Python": [
    "📅 Tydzień 11:",
    "Punkt 1: krótki opis jednego tematu",
    "Punkt 2: kolejny temat",
    "📅 Tydzień 10:",
    "Historyczne wpisy..."
  ]
}
```

### TXT Format
```
Studia — Python:
- Tydzień 11: punkt 1
- Tydzień 11: punkt 2
- Tydzień 10: punkt 3
```

---

## ⚡ Workflow w 6 krokach

1. **PARSUJ** zapytanie: wyciągnij tydzień, treści, link
2. **MAPUJ** treści na istniejące kafelki (użyj tabeli powyżej)
3. **EDYTUJ** 4 pliki (2x linkedin.json, skills-progress.json, .txt)
4. **WALIDUJ** JSON (składnia, duplikaty, trailing commas)
5. **SYNC** JSON ↔ TXT
6. **POTWIERDŹ** użytkownikowi zmiany

---

## 🎨 Kafelki szerokie (col-span-2)

Te kafelki zajmują 2 kolumny w UI:
- ✅ "Analiza emocji i wydźwięku w polskich mediach" (ZAWSZE PIERWSZY!)
- ✅ "Kursy"
- ✅ "Fundamenty pod projekt – Data Science / AI"
- ✅ "Azure"

---

## 🚨 Typowe błędy - unikaj!

| ❌ Błąd | ✅ Poprawne |
|---------|-------------|
| Tworzysz nowy kafelek | Pytaj o zgodę ZAWSZE |
| Trailing comma: `},]` | Bez comma: `}]` |
| Data: `2025-10-13` | ISO: `2025-10-13T08:00:00Z` |
| Nadpisujesz historię | Dodajesz NA GÓRĘ |
| Brak emoji tygodnia | Zawsze: `"📅 Tydzień 11:"` |

---

## 📚 Pełna dokumentacja

Szczegółowy przewodnik: [docs/AI_UPDATE_GUIDE.md](docs/AI_UPDATE_GUIDE.md)

---

## 💬 Przykład rozmowy

**Użytkownik:**
```
TYDZIEŃ: 12
LINKEDIN: Tydzień 12 za mną! Python + Docker + K8s.
LINK: https://linkedin.com/feed/update/...
PDF: 
- Python: dekoratory, generatory
- K8s: services, ingress
```

**AI (TY):**
```
✅ Rozumiem! Aktualizuję portfolio:

Dodaję do kafelków:
- Studia — Python: dekoratory, generatory
- Studia — DevOps CKA: Kubernetes services, ingress

Edytuję pliki:
1. public/linkedin.json ✅
2. src/data/linkedin.json ✅
3. skills-progress.json ✅
4. skills-progress.txt ✅

Walidacja: wszystko OK ✅

Tydzień 12 dodany pomyślnie! 🚀
```

---

## 🎯 Twoja misja

> Ułatwić użytkownikowi cotygodniowe aktualizacje portfolio poprzez automatyzację edycji plików JSON/TXT. Zachowaj spójność, historię i wysoką jakość danych.

**Good luck! 🤖💙**

---

**Pytania?** → Sprawdź [docs/AI_UPDATE_GUIDE.md](docs/AI_UPDATE_GUIDE.md)
