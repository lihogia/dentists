//import { Client } from '@neondatabase/serverless';
//import ws from 'ws';
import { db } from '@/src/app/lib/data/database';

const ENV = process.env.NODE_ENV;

/*
async function createClient() {
    const client = new Client(process.env.DATABASE_URL);
    client.neonConfig.webSocketConstructor = ws;
    if (process.env.POSTGRES_HOST == "localhost") {
        client.neonConfig.wsProxy = (host) => `${host}:5433/v1`;
        client.neonConfig.useSecureWebSocket = false;
        client.neonConfig.pipelineTLS = false;
        client.neonConfig.pipelineConnect = false;    
    }
    return client;  
}

async function requestDBInfo(client: Client) {
  try {
    const result = await client.query(`SELECT * from patients`);

    let showRes = result.rows;
    if (showRes.length > 10) {
      showRes = showRes.filter((value, index) => index < 11);
    }
    console.log(showRes);

  }catch (error) {
    console.error('Error with Database interaction:', error);
    throw error;
  }
}
*/
async function requestPatientsInfo() {

  let query = db.selectFrom('patients');
  const result = await query.selectAll().execute();

  let showRes = result;
  if (showRes.length > 10) {
    showRes = showRes.filter((value, index) => index < 11);
  }
  console.log(showRes);
}


async function main() {
  console.log(`env: ${ENV}`);
  try {
      await requestPatientsInfo();  
  }catch(error) {
      console.error('Error with Database: ', error);
  }finally {
    db.destroy();
  }
}

main().catch((err) => {
  console.error(
      'An error occurred while attempting to seed the database:',
      err,
  );
});