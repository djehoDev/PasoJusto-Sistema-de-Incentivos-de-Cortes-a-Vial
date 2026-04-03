# 🚀 PasoJusto – Sistema de Incentivos de Cortesía Vial en Tiempo Real

## 📌 Descripción
PasoJusto es un MVP (Producto Mínimo Viable) de una aplicación que busca incentivar la cortesía vial en tiempo real.  
Los usuarios pueden acumular y canjear puntos al ayudar a otros conductores, promoviendo una mejor convivencia en carretera.

---

## 🧱 Tecnologías utilizadas
- **Backend:** Node.js, Express.js  
- **Base de datos:** MongoDB Atlas (Mongoose)  
- **Frontend:** HTML, CSS, JavaScript  
- **Pruebas:** Thunder Client  

---

## ⚙️ Funcionalidades
- Consulta de datos de usuario mediante correo  
- Visualización de productos canjeables  
- Sistema dinámico de colores:
  - 🟢 Disponible  
  - 🟠 Cercano  
  - 🔴 No disponible  
- Gestión de puntos:
  - Puntos disponibles  
  - Puntos canjeados  
- Integración completa:
  Frontend → API → Base de datos  

---

## 🔌 Endpoints de la API

### 👤 Usuarios
- `GET /usuarios/:correo` → Obtener usuario por correo  
- `GET /usuarios` → Obtener todos los usuarios  
- `POST /usuarios` → Crear usuario  

### 🛍️ Productos
- `GET /productos` → Obtener todos los productos  
- `POST /productos` → Crear producto  

---

## 🧪 Pruebas
Se realizaron pruebas utilizando Thunder Client para verificar:
- Creación de usuarios  
- Creación de productos  
- Consulta de datos  
- Integración completa con el frontend  

---

## 📸 Evidencia
El sistema fue probado de extremo a extremo, asegurando la correcta comunicación entre:
Frontend → Backend → Base de datos  

---

## 📚 Aprendizajes clave
- Integración full stack (Frontend, Backend, Base de datos)  
- Diseño de APIs REST  
- Modelado de datos con MongoDB  
- Manejo de errores  
- Flujo real de desarrollo de software  

---

## ⚠️ Notas
Se pueden presentar advertencias del driver de MongoDB relacionadas con opciones deprecadas, sin afectar el funcionamiento del sistema.

---

## 👨‍💻 Autor
D`Jehovann Dixon Lawrence
