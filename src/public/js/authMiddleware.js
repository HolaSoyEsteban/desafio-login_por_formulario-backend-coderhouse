// authMiddleware.js
const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
      // El usuario está autenticado, permite que continúe a la siguiente ruta
      next();
    } else {
      // El usuario no está autenticado, redirecciona a la página de inicio de sesión
      res.redirect('/login');
    }
  };
  
  export default isAuthenticated;