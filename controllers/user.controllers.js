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

// Obtener un usuario por su ID
export const getUser = (req, res) => {/*
  const { id } = req.params; // Obtén el ID desde los parámetros de la URL

  pool.query("SELECT * FROM users WHERE id = ?", [id], (error, results) => {
    if (error) {
      console.log("Error al obtener el usuario: ", error);
      res.status(500).json({ message: "Error al obtener el usuario" });
    } else if (results.length === 0) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      res.status(200).json(results[0]); // Devuelve el primer resultado encontrado
    }
  });
*/};

// Crear un nuevo usuario
export const postUser = (req, res) => { /*
  const { username, email, password } = req.body;

  // Validación básica (por ejemplo, asegurarse de que no falten campos)
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }

  const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  pool.query(query, [username, email, password], (error, results) => {
    if (error) {
      console.log("Error al insertar el usuario: ", error);
      res.status(500).json({ message: "Error al crear el usuario" });
    } else {
      res.status(201).json({ message: "Usuario creado correctamente", id: results.insertId });
    }
  });
*/};

// Actualizar un usuario existente
export const putUser = (req, res) => {/*
  const { id } = req.params;
  const { username, email, password } = req.body;

  // Validación básica
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }

  const query = "UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?";
  pool.query(query, [username, email, password, id], (error, results) => {
    if (error) {
      console.log("Error al actualizar el usuario: ", error);
      res.status(500).json({ message: "Error al actualizar el usuario" });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      res.status(200).json({ message: "Usuario actualizado correctamente" });
    }
  });
*/};

// Eliminar un usuario
export const deleteUser = (req, res) => {/*
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
*/};

// Login (verificación de usuario)
export const login = (req, res) => {/*
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ?";
  pool.query(query, [username], (error, results) => {
    if (error) {
      console.log("Error al verificar las credenciales: ", error);
      res.status(500).json({ message: "Error al verificar el usuario" });
    } else if (results.length === 0) {
      res.status(404).json({ message: "Usuario no encontrado" });
    } else {
      // Aquí puedes agregar una verificación de contraseña (por ejemplo, usando bcrypt)
      const user = results[0];
      if (user.password === password) {
        res.status(200).json({ message: "Login exitoso", user });
      } else {
        res.status(401).json({ message: "Contraseña incorrecta" });
      }
    }
  });
*/};

