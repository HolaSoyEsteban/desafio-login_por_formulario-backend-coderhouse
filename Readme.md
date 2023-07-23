# Implementación de login

En este proyecto, se levantará un sistema de login completo con las siguientes características:

1. **Routers:**
   - Se implementará una estructura de router para las sesiones en la ruta "/api/sessions/".
   - Este router contendrá métodos para registrar a un usuario y para realizar el login.

2. **Rutas de vistas:**
   - Se contará con un router de vistas en la ruta base "/" que llevará a los formularios de login, registro y perfil.

3. **Formulario de registro:**
   - El formulario de registro permitirá insertar un nuevo usuario en la base de datos.
   - Los campos requeridos para el registro serán: first_name, last_name, email, age y password.

4. **Formulario de login:**
   - El formulario de login verificará que el usuario exista en la base de datos.
   - Si los datos son correctos, se generará un objeto "user" en "req.session", indicando que el usuario puede utilizar la página.

5. **Validaciones de rutas de vistas:**
   - Se agregarán validaciones a las rutas de vistas para controlar el acceso basado en el estado de inicio de sesión.
   - Si el usuario no está logueado, no podrá acceder a la vista de perfil.
   - Si el usuario ya está logueado, no podrá volver a loguearse o registrarse.

6. **Vista de perfil:**
   - En la vista de perfil, solo se mostrarán los datos no sensibles del usuario que se haya logueado.

7. **Reajuste de autorización:**
   - Se cambiará la validación de rutas por middlewares de rutas públicas o privadas.
   - Las rutas públicas redireccionarán siempre a la pantalla de login si no se reconoce una sesión activa.
   - Las rutas privadas redireccionarán siempre a la pantalla de perfil si hay una sesión activa en "req.session".

8. **Botón "logout":**
   - Se implementará un botón "logout" en la vista de perfil.
   - Al hacer clic en este botón, se destruirá la sesión actual del usuario y se redireccionará a la vista de login.
