# Contexto para asistentes de IA

App web de inspección de condominios de Hacienda Pinilla (un solo `index.html`, publicada con GitHub Pages).

## Cambios de listas (personas, cargos, condominios, logos, apartados o puntos)

- Modifica **solo** `configuracion.json`. Si hay un logo nuevo, agrega la imagen en `logos/`.
- No toques `index.html`, `sw.js`, `manifest.json` ni ningún otro archivo. Si el pedido lo requiere, detente y explícalo sin hacer cambios.
- Cambia únicamente lo que se pidió: no reordenes, no renombres, no reformatees.
- Copia el formato de un elemento existente.
- No cambies ni reutilices los `id` existentes. Para algo nuevo usa un id corto, en minúsculas, sin espacios ni tildes (ej.: `palmas`, `amen-8`).
- Deja `configuracion.json` como JSON válido.
- Muestra el antes y el después y espera confirmación antes de subir. Mensaje de commit en español.

## Formato de `configuracion.json`

```json
{
  "personas":    [ { "nombre": "Joselyn Sánchez", "cargo": "Manager" } ],
  "condominios": [ { "id": "almendros", "nombre": "Los Almendros", "logo": "logos/los-almendros.jpg" } ],
  "apartados":   [ { "id": "amen", "nombre": "Amenidades", "puntos": [ { "id": "amen-1", "nombre": "Piscina" } ] } ]
}
```

- `cargo` sale en el PDF junto a la firma.
- `logo` es la ruta dentro de `logos/`; si queda `""`, la tarjeta muestra solo el nombre. Logos JPG o PNG, fondo blanco, menos de 500 KB, nombre en minúsculas sin espacios ni tildes.
- El orden de `apartados` y `puntos` es el orden en la app y en el PDF.
- Cada inspección guarda su propia copia de la configuración, así que quitar algo no afecta inspecciones ya hechas ni en curso. Si el archivo queda inválido, la app sigue usando la última versión buena.
