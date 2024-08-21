//import { Client } from '@neondatabase/serverless';
//import ws from 'ws';
import { db } from '@/src/app/lib/data/database';
import { sql } from 'kysely';

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

async function testQuery() {
  const query = "mai";
  const count = await db.selectFrom("treatment_records as t")
                    .fullJoin("patients as p", "p.id", "t.pid")
                    .select(({fn, val, ref}) => [
                      fn.count<number>('t.pid').as('numpages')])
                    .where((eb) => eb.or([
                      eb("p.first_name", 'ilike', `%${query}%`),
                      eb("p.middle_name", 'ilike', `%${query}%`),
                      eb("p.last_name", 'ilike', `%${query}%`),
                      eb(sql<string>`t.amount::text`, 'ilike', `%${query}%`)
                      ]))
                    .execute();

  console.log(count);
}

async function testQuery2() {
  const MAX_ITEMS_PER_PAGE = 10;
  const offset = 0;
  const query = "mai";
  const data = await db.selectFrom("treatment_records as t")
                      .fullJoin("patients as p", "p.id", "t.pid")
                      .select(({fn, val, ref}) => [
                        "t.pid as id",
                        sql<string>`to_char(t.exam_date, 'YYYY-MM-DD')`.as("exam_date"),
                        "t.amount",
                        sql<string>`concat(
                          ${ref('first_name')},
                          ' ',
                          ${ref('middle_name')},
                          ' ',
                          ${ref('last_name')}
                        )`.as("name"),
                        "t.paid"
                      ])
                      .where((eb) => eb.or([
                        eb("p.first_name", 'ilike', `%${query}%`),
                        eb("p.middle_name", 'ilike', `%${query}%`),
                        eb("p.last_name", 'ilike', `%${query}%`),
                        eb(sql<string>`t.amount::text`, 'ilike', `%${query}%`)
                        ]))
                      .orderBy("t.exam_date desc")
                      .limit(MAX_ITEMS_PER_PAGE)
                      .offset(offset)
                      .execute();

  console.log(data);
}

async function main() {
  console.log(`env: ${ENV}`);
  try {
      //await requestPatientsInfo();  
      await testQuery2();
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