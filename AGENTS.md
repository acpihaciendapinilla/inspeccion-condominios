# Contexto para asistentes de IA

App web de inspección de condominios de Hacienda Pinilla (un solo `index.html`, publicada con GitHub Pages).

## Las listas NO se cambian en este repositorio

Condominios, logos, apartados, puntos, usuarios (quién inspecciona) y proveedores se editan en el Google Sheet
**"Configuración – App de inspección"** (carpeta de Drive "App de inspección de condominios – PDF a Slack").
Los logos van en la subcarpeta de Drive **"Logos condominios"** y su enlace se pega en la columna Logo.
Si alguien pide cambiar una lista, indícale que lo haga en el Sheet (ver el manual en esa carpeta). No edites el código para eso.

- Pestañas: `Condominios` (Nombre · Logo · Activo), `Puntos` (Apartado · Punto · Activo), `Usuarios` (Nombre · Cargo · Activo), `Proveedores` (Nombre · Tipo · Activo). Solo pueden inspeccionar las personas activas de `Usuarios`; en la app se elige el nombre de la lista, no se escribe. Los proveedores solo se eligen de la pestaña `Proveedores`.
- `Activo` = "No" oculta la fila. Los estados (Bueno, Malo, Urgente, No aplica) están fijos en el código.
- La app lee el Sheet al abrir (`SHEET_ID` en `index.html`); si falla, usa la última copia buena del teléfono y,
  si no hay ninguna, `configuracion.json` (lista de respaldo, con los logos de `logos/`).
- Cada inspección guarda su propia copia de la configuración: cambiar el Sheet no afecta inspecciones hechas ni en curso.

## Cómo funciona

- Al marcar un punto como Malo o Urgente aparece **Asignar a proveedor** (proveedor de la lista + mensaje). El botón **+ Hallazgo** de la barra superior agrega hallazgos desde cualquier pantalla de la inspección: solo un detalle, hasta 4 fotos y el proveedor (opcional, sin mensaje).
- Al terminar: el PDF completo va al canal del condominio y, por cada proveedor con asignaciones, hay un archivo en **PNG o PDF** (mismo contenido): los puntos con su mensaje y fotos, y los hallazgos solo con sus fotos (1, 2, 3 o 4, acomodadas en cuadrícula). Si es largo se reparte en varias páginas.

## Cambios de diseño o funciones

- Haz solo el cambio pedido, sin reordenar ni reformatear lo demás.
- Si cambias `index.html` o los archivos guardados sin señal, sube la versión de `CACHE` en `sw.js`.
- Muestra el antes y el después y espera confirmación antes de subir. Mensaje de commit en español.
