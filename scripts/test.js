const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
    },
  ];
  
async function testExtension(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
        `;
        console.log(`Created "users" table`);
      
        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return client.sql`
            INSERT INTO users (id, name, email, password)
            VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
            ON CONFLICT (id) DO NOTHING;
            `;
            }),
        );
    
        console.log(`Seeded ${insertedUsers.length} users`);
    
        return {
            createTable,
            users: insertedUsers,
        };        

    } catch(error) {
        console.error('Error query extension:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();
    
    await testExtension(client);
  
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });
  