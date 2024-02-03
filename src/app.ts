import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server"

//TODO: función anónima auto invocada
(() => {
    main()
})()

async function main() {
    //todo: await base de datos
    
    //todo: iniciar server
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    }).start();
    
}