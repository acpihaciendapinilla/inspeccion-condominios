# Inspección de Condominios · Hacienda Pinilla

App web para que los administradores (COA Coordinators) hagan la inspección de un condominio desde el teléfono, firmen en pantalla y compartan el PDF por Slack en el canal del condominio.

- App: `index.html` (un solo archivo). Los administradores, condominios y puntos se configuran al inicio del script (`ADMINISTRADORES`, `CONDOMINIOS`, `SECCIONES`).
- Todo se guarda en el teléfono; no usa base de datos.
- `manifest.json`, `sw.js` e íconos permiten instalarla en la pantalla de inicio y abrirla sin señal.
