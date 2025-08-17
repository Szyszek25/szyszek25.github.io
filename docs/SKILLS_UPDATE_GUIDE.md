# Instrukcja aktualizacji umiejętności DevOps

## Jak aktualizować swoje postępy w nauce

Twoje aktualnie zdobywane umiejętności są przechowywane w pliku:
`src/data/skills-progress.json`

## Format pliku

Plik ma format JSON z następującą strukturą:

```json
{
  "Nazwa Umiejętności": [
    "Opis postępu 1 (Tydzień X)",
    "Opis postępu 2 (Tydzień Y)",
    "Opis postępu 3 (W trakcie)"
  ]
}
```

## Jak dodać nową umiejętność

1. Otwórz plik `src/data/skills-progress.json`
2. Dodaj nową sekcję na końcu (przed zamykającym nawiasem):

```json
{
  "Istniejące umiejętności": [...],
  "Kubernetes": [
    "Pierwsze kroki z K8s (Tydzień 4)",
    "Podstawowe polecenia kubectl (Tydzień 4)"
  ]
}
```

## Jak aktualizować istniejące umiejętności

Dodaj nowy element do listy dla danej umiejętności:

```json
{
  "Azure": [
    "Podstawy usług chmurowych (Tydzień 3)",
    "Poznanie interfejsu Azure Portal (Tydzień 3)",
    "Przygotowanie do certyfikatu AZ-900 (Tydzień 3)",
    "Pierwszy deployment na Azure App Service (Tydzień 4)"
  ]
}
```

## Konwencje nazewnictwa

- **Tydzień X** - dla postępów z konkretnych tygodni
- **W trakcie** - dla umiejętności obecnie rozwijanych
- **Zakończone** - dla ukończonych etapów

## Przykład kompletnej aktualizacji

```json
{
  "Azure": [
    "Podstawy usług chmurowych (Tydzień 3)",
    "Pierwszy deployment na Azure (Tydzień 4)",
    "Egzamin AZ-900 zdany! (Tydzień 5)"
  ],
  "Terraform": [
    "Pierwsze kroki z Infrastructure as Code (Tydzień 4)",
    "Podstawowe zasoby Azure w Terraform (W trakcie)"
  ]
}
```

## Uwaga

Po każdej zmianie w pliku `skills-progress.json`, strona automatycznie się przeładuje i pokaże nowe umiejętności w sekcji "Aktualnie zdobywane umiejętności".

Pamiętaj o poprawnej składni JSON - każda linia (oprócz ostatniej w sekcji) musi kończyć się przecinkiem!
