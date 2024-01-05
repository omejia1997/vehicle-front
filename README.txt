README - Proyecto [Nombre del Proyecto]
Este README proporciona información sobre cómo configurar y ejecutar el proyecto [Nombre del Proyecto]. Asegúrese de seguir los pasos detallados a continuación para garantizar una implementación exitosa.
-----------------------------------------------------------
Requisitos Previos
Asegúrese de tener instalado lo siguiente antes de comenzar:

Java 17
Node.js
PostgreSQL
----------------------------------------------------------
Configuración del Backend (Spring Boot)
Clonar el repositorio:
bash
git clone [URL_DEL_REPOSITORIO]
Navegar al directorio del backend:
bash
cd vehicle-test
--------------------------------------------------------------
Configurar la base de datos:
base de datos en PostgreSQL
Actualizar las credenciales de la base de datos en el archivo 
application.properties con el usuario "postgress" y la clave "123".
Ejecutar la aplicación Spring Boot:

./mvnw spring-boot:run
La aplicación backend se ejecutará en http://localhost:8080.
--------------------------------------------------------------------
Configuración del Frontend (React)
Navegar al directorio del frontend:vechicle-front
bash
cd vechicle-front
Instalar las dependencias:
bash
npm install
Configurar la URL del backend:
En el archivo .env, ajustar la variable REACT_APP_BACKEND_URL para que apunte a la URL del backend.
Ejecutar la aplicación React:
bash
npm start
La aplicación frontend estará disponible en http://localhost:3000.
--------------------------------------------------------------------------------
Acceso a la Aplicación
Después de completar los pasos anteriores, puede acceder a la aplicación a través del navegador web utilizando la URL proporcionada por la aplicación frontend.

¡Listo! Ahora tienes el proyecto vehicle en funcionamiento.