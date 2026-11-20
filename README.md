# Inspección de Condominios · Hacienda Pinilla

App web para inspeccionar un condominio desde el teléfono, firmar en pantalla y compartir el PDF por Slack en el canal del condominio.

- **Para cambiar condominios, logos, puntos o cargos:** se edita el Google Sheet "Configuración – App de inspección" en Drive (ver el manual en la misma carpeta). No hace falta tocar este repositorio.
- `index.html`: la app (diseño y funciones). `configuracion.json` y `logos/` son solo el respaldo si no se puede leer el Sheet.
- Las inspecciones y fotos se guardan solo en el teléfono; no usa base de datos.
- `manifest.json`, `sw.js` e íconos permiten instalarla en la pantalla de inicio y abrirla sin señal.
- Reglas para asistentes de IA en `AGENTS.md`.
