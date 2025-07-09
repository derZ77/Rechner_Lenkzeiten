
# Lenkzeiten-Rechner (PWA)

Diese PWA berechnet Lenkzeiten und exportiert sie als PDF – vollständig offlinefähig.

## 📦 Enthalten:
- index.html (unverändert, Update-Skript am Ende eingebaut)
- service-worker.js (mit Cache `rechner-lenkzeiten-v4`)
- manifest.json
- icon.png
- libs/pdfmake.min.js *(Platzhalter)*
- libs/vfs_fonts.js *(Platzhalter)*

## 🛠 Anleitung:
1. Ersetze die Platzhalter-Dateien in `libs/` durch die echten:
   - [pdfmake.min.js](https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.70/pdfmake.min.js)
   - [vfs_fonts.js](https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.70/vfs_fonts.js)

2. Lade alles ins GitHub-Repository und aktiviere GitHub Pages.

3. Erhöhe `CACHE_NAME` bei Änderungen, um Nutzer über Updates zu informieren.
