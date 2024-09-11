import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "@/db/schema";

config({ path: ".env.local" }); // or .env.local

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("seeding database");
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        console.log("Seeding finished");
        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Spanish",
                imageSrc: "/es.svg",
            },
            {
                id: 2,
                title: "Italian",
                imageSrc: "/it.svg",
            },
            {
                id: 3,
                title: "French",
                imageSrc: "/fr.svg",
            },
            {
                id: 4,
                title: "Croatian",
                imageSrc: "/hr.svg",
            },
        ]);
    } catch (error) {
        console.log(error);
        throw new Error("Failed to seed the database");
    }
};
main();
