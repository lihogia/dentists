import { Database } from "./type";
import { Kysely } from 'kysely';
import { NeonDialect } from 'kysely-neon';
import { neonConfig } from "@neondatabase/serverless";
import ws from 'ws';

neonConfig.webSocketConstructor = ws;
if (process.env.POSTGRES_HOST == "localhost") {
    neonConfig.wsProxy = (host) => `${host}:5433/v1`;
    neonConfig.useSecureWebSocket = false;
    neonConfig.pipelineTLS = false;
    neonConfig.pipelineConnect = false;    
}

export const db = new Kysely<Database>({
    dialect: new NeonDialect({
        connectionString: process.env.POSTGRES_URL,
    }),
});