# react-lista-compra

API REST de la lista de la compra con cliente React.


## Instalar requerimientos

Instalar dependencias como es habitual con

```bash
npm install
```

Para poder construir el código en el cliente hace falta la herramienta en línea de comandos `watchify`. Si no está instalada, se puede instalar con

```bash
npm install watchify -g
```

> Si has instalado node usando  NVM (Node Version Manager) no harán falta permisos de *root* para instalar con `-g`, pero si lo has instalado por otros métodos es bastante probable que tengas que ejecutar la orden anterior en modo superusuario.
 
## En el proceso de desarrollo

Para ejecutar el servidor:

```bash
node server.js
```

Para poner en marcha el *build* del cliente, en una **nueva terminal** (sin cerrar el proceso del servidor):

```bash
npm run watch
```

Esto pondrá en marcha la generación del `bundle.js`. Si modificamos cualquier `.js` se regenerará el *bundle*. No hay que cerrar tampoco esta terminal.

Para probar la aplicación acceder a `http://localhost:3000/web`.