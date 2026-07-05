# Vacantes Delicias de León

Sitio web simple para publicar vacantes y recibir aplicaciones de candidatos. No necesita bases de datos externas ni cuentas adicionales — todo corre dentro de Netlify, que es lo único que necesitas para publicar el sitio.

## Cómo funciona

1. El sitio (`public/`) muestra las vacantes abiertas y un formulario de aplicación.
2. Cuando alguien aplica, **Netlify Forms** recibe la aplicación (incluyendo el CV/foto si lo adjuntan).
3. Tú ves cada aplicación en el panel de Netlify (pestaña **Forms** de tu sitio) y también puedes recibir un correo automático por cada una nueva.
4. Las vacantes que se muestran en la página **no vienen de ninguna base de datos** — están escritas directamente en el archivo [`public/js/vacantes-data.js`](public/js/vacantes-data.js). Para publicar o cerrar una vacante, se edita ese archivo y se vuelve a publicar el sitio.

## Cómo agregar o quitar una vacante

Abre `public/js/vacantes-data.js`. Ahí hay una lista como esta:

```js
const VACANTES = [
  {
    puesto: "Cajero/a",
    tipo: "Operativo",
    ubicacion: "Sucursal Centro",
    descripcion: "Atención al cliente en punto de venta, manejo de caja y cobro.",
    requisitos: "Disponibilidad de horario, buena actitud de servicio.",
  },
  // agrega otro bloque igual a este para una nueva vacante,
  // o borra un bloque completo para quitar una vacante
];
```

Si tú no editas código directamente, solo dile a quien te ayude con el sitio qué vacante quieres agregar/quitar y esos datos, y esa persona hace este cambio en un par de minutos.

## Configurar el sitio en Netlify (una sola vez)

1. Crea una cuenta gratis en [netlify.com](https://netlify.com) — puedes usar "Sign up with GitHub" si ya tienes cuenta ahí.
2. Conecta este proyecto (idealmente desde un repositorio de GitHub, así Netlify lo actualiza solo cada vez que hay un cambio).
3. Una vez publicado, ve a la pestaña **Forms** de tu sitio en Netlify:
   - Ahí aparecerá el formulario `aplicacion` automáticamente después del primer envío de prueba.
   - En **Forms → Settings and usage → Form notifications**, agrega tu correo para que te avise por cada aplicación nueva.
4. (Opcional) En **Domain settings** puedes conectar un dominio propio, por ejemplo `deliciasdeleon.com`, cuando lo tengas.

Con eso el sitio queda funcionando en una dirección tipo `tu-sitio.netlify.app`.

## Desarrollo local (para quien programe)

No requiere instalar dependencias — es HTML/CSS/JS simple. Basta con abrir `public/index.html` en un navegador, o servir la carpeta `public/` con cualquier servidor estático para probar los enlaces entre páginas.
