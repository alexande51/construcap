export const content = `
## ¿Por qué importar desde Excel?

Modelar columnas una por una en Revit es lento y propenso a errores. Con CAP Tools puedes cargar decenas de columnas en segundos desde una hoja de cálculo.

## Preparar el archivo Excel

Tu archivo debe tener las siguientes columnas:

- **Eje:** nombre del eje (ej. A, B, C)
- **Nivel:** nivel de inicio y fin
- **Sección:** dimensiones en cm (ej. 30x60)
- **Coordenadas:** X e Y en metros

## Pasos en Revit

1. Abre CAP Tools desde la pestaña de complementos
2. Ve a **Estructura → Importar Tipo → Importar columnas**
3. Selecciona tu archivo Excel
4. Revisa la vista previa y confirma

## Resultado

Revit generará todas las columnas automáticamente con las familias y parámetros correctos listos para documentar.
`
