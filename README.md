# Test tecnico Rentalo MAQ

  Este test comprende las tecnologías React, Express y PostgreSQL. Se trata de una aplicación básica para poder agregar y ver usuarios.


## Funcionalidades
  
  - La app cuenta con 2 funcionalidades básicas:
    
    + Agregar usuarios, a traves de un form validado
    + Ver todos los usuarios agregados

## Para correr el proyecto seguir los siguientes pasos:

  1. Clonar el repositorio
  2. Posicionarse en la carpeta API y correr el comando `npm install`
  3. Posicionarse en la carpeta CLIENT y correr el comando `npm install`
  4. Crear una base de datos con el nombre `"test-maq"`
  5. Dentro de la carpeta API crear un archivo `.env` con la siguiente información. Corregir los campos de USER y PASSWORD según corresponda.

```
  DB_USER=usuariodepostgres
  DB_PASSWORD=contraseñapostgres
  DB_HOST=localhost
  DB_NAME=test-maq
```
  6. Correr el comando `npm start` en ambas carpetas.
  7. Para ejecutar los test tienen que dejar de correrse el servidor de la carpeta API, con el comando `CTRL + C`