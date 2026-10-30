# Cómo hacer cambios en la app de Inspección de Condominios

Esta guía es para cambiar **personas, cargos, condominios, logos, apartados o puntos** de la app usando cualquier IA que se pueda conectar a GitHub (Claude, ChatGPT, Gemini u otra).

Todo eso vive en **un solo archivo**: `configuracion.json`. Los logos van en la carpeta `logos/`. No hace falta tocar nada más, y la app no se rompe si se cambia solo eso.

Cuando el cambio se guarda en GitHub, **a todos les llega solo** la próxima vez que abran la app con señal (uno o dos minutos después).

---

## Pasos

1. Abre la IA y conéctala al repositorio **acpihaciendapinilla/inspeccion-condominios**.
2. Copia el **prompt** de abajo y pégalo.
3. En la parte final, **LO QUE NECESITO**, escribe el cambio con tus palabras. Si es un condominio nuevo, adjunta el logo.
4. La IA te va a mostrar **el antes y el después**. Revísalo con calma.
5. Si está bien, dile **"Sí, súbelo"**.
6. Espera uno o dos minutos, abre la app y revisa que el cambio se vea.

---

## Prompt (copiar y pegar completo)

```
Trabajas en el repositorio de GitHub acpihaciendapinilla/inspeccion-condominios (rama main). Es la app de inspección de condominios de Hacienda Pinilla. Antes de empezar, lee el archivo COMO-HACER-CAMBIOS.md del repositorio.

REGLAS
- Solo puedes modificar el archivo configuracion.json. Si el cambio incluye un logo nuevo, también puedes agregar la imagen en la carpeta logos/.
- No modifiques index.html, sw.js, manifest.json ni ningún otro archivo. Si lo que pido necesita cambiar otro archivo, detente y explícamelo sin hacer nada.
- Cambia solo lo que pido. No reordenes, no renombres, no reformatees ni "mejores" nada más.
- Copia exactamente el formato de un elemento que ya exista en configuracion.json.
- No cambies ni reutilices los "id" que ya existen. Para algo nuevo, crea un id corto nuevo, en minúsculas, sin espacios ni tildes (por ejemplo: "palmas" o "amen-8").
- Revisa que configuracion.json siga siendo un JSON válido (comas, comillas y corchetes).
- Antes de subir, muéstrame el antes y el después y espera mi confirmación.
- Al subir, usa un mensaje en español que describa el cambio.

LO QUE NECESITO:
[Escribe aquí el cambio]
```

---

## Ejemplos para "LO QUE NECESITO"

**Personas**
- Quitar a la persona "Adriana Arias".
- Agregar a "María López" con el cargo "COA Coordinator".
- Cambiar el cargo de "Yaner Rosales" a "Manager".

**Condominios**
- Agregar el condominio "Las Palmas". El logo es la imagen que te adjunto: guárdala como logos/las-palmas.jpg.
- Cambiar el logo de "Azur" por la imagen que te adjunto (reemplaza logos/azur.jpg).
- Quitar el condominio "One".

**Apartados y puntos**
- En el apartado "Amenidades", agregar el punto "Cancha de tenis" después de "Gimnasio".
- Cambiar el nombre del punto "Altura del césped" por "Corte de zacate".
- Quitar el punto "Deck de yoga".
- Agregar un apartado nuevo llamado "Parqueos" con los puntos "Demarcación" y "Iluminación de parqueo", después de "Seguridad y acceso".

---

## Cómo está armado `configuracion.json` (para la IA o para quien quiera revisarlo)

```json
{
  "personas": [
    { "nombre": "Joselyn Sánchez", "cargo": "Manager" }
  ],
  "condominios": [
    { "id": "almendros", "nombre": "Los Almendros", "logo": "logos/los-almendros.jpg" }
  ],
  "apartados": [
    { "id": "amen", "nombre": "Amenidades", "puntos": [
      { "id": "amen-1", "nombre": "Piscina" }
    ]}
  ]
}
```

- **personas**: quien aparece en "¿Quién inspecciona?". El **cargo** sale en el PDF junto a la firma.
- **condominios**: las tarjetas para elegir. `logo` es la ruta de la imagen dentro de `logos/`. Si se deja vacío (`""`), la tarjeta sale solo con el nombre.
- **apartados**: los grupos de puntos, en el orden en que aparecen en la app y en el PDF.
- **id**: identificador interno. No se muestra, pero **no se debe cambiar ni repetir**, porque las inspecciones en curso lo usan.

**Logos:** imagen JPG o PNG, de preferencia con fondo blanco y de menos de 500 KB. El nombre del archivo en minúsculas, sin espacios ni tildes (por ejemplo `las-palmas.jpg`).

---

## Tranquilidad

- **Las inspecciones ya hechas no cambian.** Cada inspección guarda su propia copia de la lista, así que si se quita una persona o un punto, los PDF anteriores siguen saliendo completos.
- **Si el archivo queda con un error**, la app no se cae: sigue usando la última configuración buena y avisa "La configuración nueva tiene un error". En ese caso, pídele a la IA que revise y corrija `configuracion.json`.
- **Para deshacer un cambio**, en GitHub se puede volver a la versión anterior del archivo, o pedirle a la IA: "Deshaz el último cambio que hiciste en configuracion.json".
- Para cambios de **diseño o funciones** de la app (no de listas), no se usa este prompt: hay que hacerlo con más cuidado y probar antes.
