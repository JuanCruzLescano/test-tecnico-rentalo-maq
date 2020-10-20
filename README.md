# Test tecnico Rentalo MAQ

  Este test comprende las tecnologías React, Express y PostgreSQL

## Para correr el proyecto seguir los siguientes pasos:

  - Clonar el repositorio
  - Correr el comando `npm install` en la carpeta API y CLIENT
  - Crear una base de datos con el nombre `"test-maq"`
  - Dentro de la carpeta API crear un archivo `.env` con la siguiente información. Corregir los campos de USER y PASSWORD según corresponda.

```
  DB_USER=usuariodepostgres
  DB_PASSWORD=contraseñapostgres
  DB_HOST=localhost
  DB_NAME=test-maq
```
  - Correr el comando `npm start` en ambas carpetas.

## Funcionalidades
  
  - La app cuenta con 2 funcionalidades básicas:
    
    + Agregar usuarios, a traves de un form validado
    + Ver todos los usuarios agregados
