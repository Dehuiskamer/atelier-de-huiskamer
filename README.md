# Atelier De Huiskamer Website

Een rustige, fotografisch gerichte website voor Atelier De Huiskamer - Tekst · Beeld · Smaak

## 📁 Structuur

```
atelier-de-huiskamer/
│
├── index.html                      # Homepage
├── portfolio.html                  # Portfolio overzicht
├── portfolio-adh.html             # ADH / Peter Schroyen fotografie
├── portfolio-visual-stories.html  # AI Creaties
├── portfolio-stories-words.html   # Teksten en verhalen
├── portfolio-rubensian.html       # Rubensian Dreamgirl (met wachtwoord)
├── blog.html                      # Blog pagina
├── contact.html                   # Contact pagina
│
├── style.css                      # Alle styling
├── script.js                      # JavaScript functionaliteit
│
├── images/                        # Map voor alle afbeeldingen
│   ├── placeholder1.jpg           # Placeholder voor homepage
│   ├── adh-1.jpg                 # ADH portfolio foto's
│   ├── ai-1.jpg                  # AI creaties
│   ├── rubensian-public-1.jpg    # Rubensian publiek
│   ├── rubensian-adult-1.jpg     # Rubensian beveiligd
│   └── blog-*.jpg                # Blog afbeeldingen
│
└── README.md                      # Dit bestand
```

## 🎨 Features

- **8 HTML-pagina's** met navigatie tussen alle secties
- **Responsive design** - werkt op desktop, tablet en mobiel
- **Lightbox functionaliteit** - klik op foto's voor volledig scherm weergave
- **Wachtwoordbeveiliging** - Red Light District sectie beveiligd (wachtwoord: `redlight2024`)
- **Rustige, elegante styling** - zwart/wit/grijs met focus op fotografie
- **Mobile menu** - hamburger menu op kleine schermen
- **Smooth scroll** - vloeiende navigatie
- **Footer links** - consistent op alle pagina's

## 🖼️ Afbeeldingen Toevoegen

Plaats jouw foto's in de `images/` map en vervang de placeholder bestandsnamen in de HTML:

### Homepage (index.html)
- `placeholder1.jpg`, `placeholder2.jpg`, `placeholder3.jpg`

### Portfolio ADH (portfolio-adh.html)
- `adh-1.jpg` tot `adh-6.jpg`

### Visual Stories (portfolio-visual-stories.html)
- `ai-1.jpg` tot `ai-6.jpg`

### Rubensian Dreamgirl (portfolio-rubensian.html)
- **Publiek:** `rubensian-public-1.jpg` tot `rubensian-public-6.jpg`
- **Beveiligd:** `rubensian-adult-1.jpg` tot `rubensian-adult-6.jpg`

### Blog (blog.html)
- `blog-recipe-1.jpg`, `blog-recipe-2.jpg`, etc.
- `blog-photo-1.jpg`, `blog-photo-2.jpg`, etc.

## 🔐 Wachtwoord Aanpassen

Het wachtwoord voor de Red Light District sectie staat in `script.js`:

```javascript
const protection = new PasswordProtection('redlight2024', 'protected-content');
```

Verander `'redlight2024'` naar je eigen wachtwoord.

## 🚀 Lokaal Testen

1. Open `index.html` in je browser
2. Navigeer door de site om alles te testen
3. Test de lightbox door op foto's te klikken
4. Test de wachtwoordbeveiliging op de Rubensian pagina
5. Test het mobile menu door je browser kleiner te maken

## 📤 Uploaden naar Netlify

### Methode 1: Drag & Drop
1. Ga naar netlify.com en log in
2. Klik "Add new site" → "Deploy manually"
3. Sleep de hele `atelier-de-huiskamer` map naar het vak
4. Wacht tot de deploy klaar is
5. Je krijgt een URL zoals `random-name-123.netlify.app`

### Methode 2: Via GitHub (automatisch deployen)
1. Maak een nieuwe repository op GitHub
2. Upload alle bestanden naar die repository
3. In Netlify: "Add new site" → "Import from Git"
4. Kies je GitHub repository
5. Netlify deploy nu automatisch bij elke update!

## ✏️ Teksten Aanpassen

Alle teksten staan direct in de HTML-bestanden. Zoek naar:
- `<h1>`, `<h2>`, `<h3>` voor titels
- `<p>` voor paragrafen
- `class="lead-text"` voor intro teksten

## 🎨 Kleuren Aanpassen

Alle kleuren staan in `style.css` onder `:root`:

```css
:root {
  --color-bg: #ffffff;              /* Achtergrond */
  --color-text: #1a1a1a;           /* Hoofdtekst */
  --color-text-secondary: #666666;  /* Secundaire tekst */
  --color-accent: #333333;          /* Accent kleur */
  --color-border: #e0e0e0;         /* Randen */
}
```

## 📱 Responsive Design

De website past automatisch aan voor:
- **Desktop** (>768px): volledig menu, grote foto's
- **Tablet** (>480px): aangepaste grid
- **Mobile** (<480px): hamburger menu, gestapelde content

## 🔧 JavaScript Functionaliteit

### Lightbox
- Klikt op foto's met class `lightbox-trigger`
- Opent fullscreen op zwarte achtergrond
- Navigatie met pijltjes en escape key
- Automatisch toegevoegd aan alle portfolio foto's

### Wachtwoord Beveiliging
- 3 pogingen voordat input geblokkeerd wordt
- Opslaan in session (blijft tijdens browser sessie)
- Simpel maar effectief voor basis beveiliging

### Mobile Menu
- Hamburger icoon op kleine schermen
- Sluit automatisch na klikken op link
- Smooth animaties

## 📝 Licentie

© 2026 Atelier De Huiskamer. Alle rechten voorbehouden.

---

**Gemaakt voor:** Peter Schroyen / Atelier De Huiskamer  
**Datum:** Mei 2026  
**Technologie:** HTML5, CSS3, Vanilla JavaScript  
**Hosting:** Netlify
