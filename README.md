# Laura Altozano — Portfolio minimal

## Abrir el proyecto

1. Abre esta carpeta en Visual Studio Code.
2. Instala la extensión **Live Server** si todavía no la tienes.
3. Pulsa con el botón derecho sobre `index.html` y selecciona **Open with Live Server**.

## Añadir Bethany Elingston

La tipografía no está incluida porque requiere su propia licencia.

1. Coloca el archivo adquirido legalmente en `assets/fonts/`.
2. La opción recomendada es renombrarlo como `Bethany-Elingston.woff2`.
3. También funciona el nombre anterior `Bethany.woff2`.
4. Los títulos usan la familia definida como `Bethany Elingston` en `style.css`.

## Cambiar el logo

En todos los HTML encontrarás:

```html
<a class="logo-slot" href="index.html">
  <span>LOGO</span>
</a>
```

Sustituye `<span>LOGO</span>` por una imagen:

```html
<img src="assets/images/logo.svg" alt="Laura Altozano">
```

## Cambiar fotografías

Sustituye los SVG provisionales de `assets/images/` por tus fotografías y actualiza las rutas en los HTML si cambias los nombres.

## Home y Projects

La imagen del carrusel de Home y las imágenes del archivo de Projects tienen exactamente la misma anchura en ordenador. La columna izquierda conserva el mismo tamaño en ambas páginas.

En `Projects`, la identidad de Laura permanece fija a la izquierda y solo se desplaza la columna derecha.

## Duplicar un proyecto

Duplica `project.html`, cambia el nombre del archivo y modifica el título, los textos y las cinco imágenes. Después enlázalo desde `projects.html` y, cuando corresponda, desde el carrusel de `index.html`.


## Bethany Elingston

Place your licensed font file in:

`assets/fonts/Bethany Elingston.otf`

The CSS is already configured to load that exact filename.
