# Next.js OpenJira App

Para correr localmente se necesita la base de datos

```
docker-compose up -d
```

* El -d significa ___detached___

* MongoDB URL Local

```
mongodb://localhost:27017/entriesdb
```

## Configurar variables de entorno

Renombrar el archivo ___.env.template___ a ___.env___

## LLenar la base de datos con info de prueba
Llamar a 
```
    http://localhost:3000/api/seed
```