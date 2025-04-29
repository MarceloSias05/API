import { pool } from "../db/db.js";

// Obtener todos los usuarios
export const getUsers = (req, res) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      res.status(500).json({ msg: error, users: [] });
      return
    }  
    res.status(200).json({ msg: "Ok", users: results });
    
  });
};


export const postUsers = (req, res) => {
  const { name, username, password } = req.body;
  const query = "INSERT INTO users (name, username, password) VALUES (?, ?, ?)";
  pool.query(query, [name, username, password], (error, results) => {
    if (error) {
      return res.status(500).json({ msg: error });
    }
    res.status(200).json({ msg: "Usuario insertado correctamente", id: results.insertId });
  });
};

// Actualizar un usuario existente
export const putUser = (req, res) => {
  const { id } = req.params;
  const { name, username, password } = req.body;

  // Validación básica
  if (!name || !username || !password) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }

  const query = "UPDATE users SET username = ?, name = ?, password = ? WHERE id = ?";
  pool.query(query, [username, name, password, id], (error, results) => {
    if (error) {
      console.log("Error al actualizar el usuario: ", error);
      res.status(500).json({ message: "Error al actualizar el usuario" });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      res.status(200).json({ message: "Usuario actualizado correctamente" });
    }
  });
};

// Eliminar un usuario
export const deleteUser = (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM users WHERE id = ?";
  pool.query(query, [id], (error, results) => {
    if (error) {
      console.log("Error al eliminar el usuario: ", error);
      res.status(500).json({ message: "Error al eliminar el usuario" });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      res.status(200).json({ message: "Usuario eliminado correctamente" });
    }
  });
};

// Login (verificación de usuario)
export const login = (req, res) => {
  const { username, password } = req.body;
  pool.execute(
    "SELECT * FROM users WHERE username = ?",
    [usernamewd],
    (error, results) => {
      if (error) {
        return res.status(500).json({ message: "Error al verificar el usuario", error });
      }

      // Verifica si la consulta regresó resultados
      if (results.length === 0) {
        return res.status(404).json({ isLogin: false, msg: "Usuario no encontrado", user: {} });
      }

      // Compara la contraseña
      if (results[0].password === password) {
        return res.status(200).json({ isLogin: true, msg: "Ok", user: results[0] });
      } else {
        return res.status(401).json({ isLogin: false, msg: "Credenciales incorrectas", user: {} });
      }
    }
  );
};
