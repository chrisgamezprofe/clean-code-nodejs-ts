import { Server } from "./presentation/server"

//TODO: función anónima auto invocada
(() => {
    main()
})()

async function main() {
    //todo: await base de datos
    
    //todo: iniciar server
    new Server({
        port:4200
    }).start();
    
}