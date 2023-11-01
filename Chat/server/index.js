import express from "express";
import logger from "morgan";

const port = process.env.PORT ?? 3000; //Puerto como variable de entorno, o por defecto la 3000

//app: Se refiere a una instancia de la aplicación Express. Express es un framework de Node.js que facilita la creación de aplicaciones web y APIs.

const app = express();

//use: Es un método de Express que se utiliza para especificar funciones de middleware. Los middlewares son funciones que tienen acceso tanto a la solicitud (request) como a la respuesta (response) y pueden realizar tareas antes de que la solicitud alcance su ruta final.

app.use(logger('dev'));

//logger('dev'): Este es un middleware que proporciona registros (logs) de las solicitudes HTTP que llegan al servidor. El argumento 'dev' indica que se debe usar un formato de registro específico que es más adecuado para el desarrollo.
    
app.get('/', (req,res) => { 
    //app.get('/'): Esto define una ruta HTTP usando el método GET. En este caso, la ruta especificada es '/', lo que significa que se aplica a la página principal del sitio web.

    res.sendFile(process.cwd() + '/client/index.html')
})
//// //Si vamos a la pagina principal '/' contestamos con el siguiente callback

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
//app.listen(port, () => { ... }): Este método inicia el servidor Express y lo hace escuchar en un puerto específico. El primer argumento port es el número de puerto en el que quieres que tu servidor escuche. Por lo general, esto es un número como 3000, 5000, etc. El segundo argumento es una función de callback que se ejecutará una vez que el servidor esté listo para recibir conexiones.