//

import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';

const server = Server.init(3000);

server.app.use(router);


//const mysql = new MySQL();

MySQL.intance;


server.start(()=>{
    console.log('Servidor Corriendo en el puerto 3000')
});