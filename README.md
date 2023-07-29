# Èclat CaféShop - README
Éste es un pproyecto de e-commerce básico que se realiza en el contexto de entrega final del cuerso de Reacct Js de CoderHouse Academy.
La aplicación permite ver un alista de productos de supermercado y realizar compras en línea. Los productos y las órdenes de compra se almacenan en Firebase.

## Tecnologías utilizadas
- Vite
- React
- React Router
- Firebase

## Características y funcionalidades
- Explora una selección de productos.
- Visualiza descripciones e imágenes de los productos.
- Agrega productos a tu carrito de compras para una experiencia de café personalizada.
- Gestiona fácilmente los elementos de tu carrito y elimina productos de tu carrito.
- Realiza una orden de compra.


## Instalación
### Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos
1. Clona este repositorio en tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el siguiente comando, para instalar las dependencias:
```bash
npm install
```
4. Ejecuta el siguiente comando, para inciar la aplicación:
```bash
npm run dev
```
5. Abre tu navegador y navega a http://localhost:5173 para ver la aplicación en acción.


## Configuración de Firebase
1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Athentication" de Firebase, habilita el proveedor de 
3. Autenticación de correo electrónico y contraseña
4. EN la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
5. En la sección "Preject settings" de Firebase, haz click en "Add app" y sigue las instrucciones para agregar una nueva aplicación web. 
6. Copia las credenciales de Firebase y configura las variables de entorno .env de tu proyecto.


## Contribuciones
Agradecemos las contribuciones de la comunidad para mejorar nuestro e-commerce de Èclat CaféShop. Siéntete libre de enviar informes de errores, solicitudes de funciones o pull requests.

## Licencia
Este proyecto "Èclat CaféShop" se distribuye bajo la [Licencia MIT](LICENSE).
