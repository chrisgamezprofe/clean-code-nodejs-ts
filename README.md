# API Estudiantes Clean Architecture Node JS TS

## Available Scripts

    • npm init -y
    • npm i -D typescript @types/node ts-node-dev rimraf
    • npm install typescript --save-dev
    • npx tsc --init --outDir dist/ --rootDir  src
    • package.json
    "scripts": {
        "dev": "tsnd --respawn --clear src/app.ts",
        "build": "rimraf ./dist && tsc",
        "start": "npm run build && node dist/app.js"
      }

    Creamos el archivo app.ts dentro de src
    Escribimosconsole.log("Holaaa")
    Ejecutamos npm run dev

    Creamos las carpetas domain, presentation e infrastructure

    Instalamos express
    npm i express
    npm i --save-dev @types/express

    Creamos el archivo server.ts con una función autoinvocada:
    App.ts:

    import { Server } from "./presentation/server"
    //TODO: función anónima auto invocada
    (() => {
        main()
    })()
    async function main() {
        //todo: await base de datos
       
        //todo: iniciar server
        new Server().start();
    }
    Server.ts:
    import express from 'express'

    export class Server{
        public readonly app = express()
        constructor() { }
       
        async start() {
            this.app.listen(3000, () => {
                console.log(`Server is running on port ${3000}`)
            })
        }
    }

crear archivo docker-compose.yml
version: "3.8"

services:
mongo-db:
image: "mongo"
restart: always
environment:
MONGO_INITDB_ROOT_USERNAME: mongo-user
MONGO_INITDB_ROOT_PASSWORD: s3cr3t0
volumes: - ./mongo:/data/db
ports: - "27017:27017"

### `docker compose up -d`

Ejecutamos de nuevo

### `npm run dev`

docker compose up -d
