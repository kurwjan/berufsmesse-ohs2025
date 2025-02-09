# Seite für die Berufsmesse "OHS Zukunftschancen"
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/LICENSE-EUPL_v1.2-blue?style=for-the-badge)

Das ist der Quellcode zur Berufsmesse meiner Schule. Ziel war es, eine bessere Webseite zu machen als zum letzten Jahr und es sollte auch für die nächsten Messen benutzbar sein.
Also habe ich [AstroJS](https://astro.build/) benutzt, da man damit per YAML und Markdown Dateien die Seite schnell neukonfigurieren kann. _(Ist nicht überall gelungen, da ich faul wurde, aber besser als nicht generated.)_

## Wie benutzt man es?
Vorausgesetzt wird NodeJS (latest), jenach Betriebssystem wird es anders installiert.

### Dependencies installieren
```sh
$ npm install .
```
### Ausführen
```sh
$ npm run dev
```
### Build
_Falls die Seite tatsächlich woanders benutzt wird, muss man die URLs in `astro.config.mjs` anpassen, sonst läuft die Seite glaube nicht._

```sh
$ npm run build
```

## Lizenz
[Das Projekt ist unter der EUPL v1.2 lizensiert.](https://github.com/kurwjan/berufsmesse-ohs2025/blob/master/src/LICENSE)

Kurzgefasst werden alle Rechte gewährt – also z. B. verändern, vervielfältigen, usw. – unter folgenden Bedingungen:
- Bei Modifizierung müssen alle Hinweise auf die Lizenz erhalten bleiben und es muss deutlich darauf gewiesen werden, dass das Werk geändert wurde.
- Die Bedingungen der Lizenz (EUPL v1.2) müssen eingehalten werden; Lizensierung unter kompatiblen Lizenzen ist möglich.
- Bei Verbreitung muss der Quellcode zugänglich sein.
