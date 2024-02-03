import 'dotenv/config'
import { get } from "env-var";

export const envs ={
    PORT : get("PORT").default(3000).asPortNumber(),
    MONGO_URL : get("MONGO_URL").required().asString(),
    MONGO_DB_NAME : get("MONGO_DB_NAME").default('university_db').asString(),
}