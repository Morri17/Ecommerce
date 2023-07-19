# Ecommerce de The North Face

Esta es un ecommerce que vende ropa relacionada con la marta The Nort Face, en el mismo podras ver una lista de productos que se venden el mismo, como remeras, buzos, camperas, etc. Tambien podras filtrar por las prendas que tu prefieras. Puedes ingresar a cada uno de ellos, ver los detalles del elemento seleccionado y elegir que cantidad del mismo deseas llevar al carrito para luego finalizar tu compra. Una vez dentro del carrito, para finalizar la compra deberas completar una serie de datos y al finalizar el formulario obtendras tu numero de orden generada por Firebase.


## Tecnologías utilizadas

- Vite
- React
- React Router
- Firebase

## Funcionalidades

- Ver una lista de productos disponibles
- Ver los detalles del item seleccionado (precio, descripcion, etc)
- Agregar productos al carrito de compras
- Ver el carrito de compras (vaciar o agregar mas productos)
- Realizar una orden de compra

## Instalación

Para instalar y ejecutar la aplicación en tu máquina local, sigue los siguientes pasos:

1. Clona el repositorio a tu máquina local.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta el comando `npm install` para instalar las dependencias.
4. Ejecuta el comando `npm run dev` para iniciar la aplicación.
5. Abre tu navegador y navega a `http://localhost:5173` para ver la aplicación en acción.

## Configuración de Firebase

Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilita el proveedor de autenticación de correo electrónico y contraseña.
3. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
4. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
5. Copia las credenciales de Firebase y configura las variables de entorno en el archivo `.env` de tu proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más información.