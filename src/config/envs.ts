import 'dotenv/config'
import { get } from "env-var";

export const envs ={
    PORT : get("PORT").required().asPortNumber(),
    URL_SMS_SERVICE : get("URL_SMS_SERVICE").default("https://....").asString(),
}