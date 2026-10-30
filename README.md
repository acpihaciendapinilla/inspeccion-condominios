# Inspección de Condominios · Hacienda Pinilla

App web para inspeccionar un condominio desde el teléfono, firmar en pantalla y compartir el PDF por Slack en el canal del condominio.

- **Para cambiar personas, cargos, condominios, logos o puntos:** solo se edita `configuracion.json` (y la carpeta `logos/`). Reglas para IA en `AGENTS.md`.
- `index.html`: la app (diseño y funciones).
- Las inspecciones y fotos se guardan solo en el teléfono; no usa base de datos.
- `manifest.json`, `sw.js` e íconos permiten instalarla en la pantalla de inicio y abrirla sin señal.
