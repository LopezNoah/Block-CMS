// src/db/seed.ts
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as models from "./models/schema.ts";
import Database from "better-sqlite3";
// import { db } from "./drizzle.ts";
import * as schema from '@lib/models/schema.ts';
import type { BlockTypeInsert } from "./models/types.ts";
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const zones = [
    "Main", "Navigation", "Header",
    "Section A", "Section B", "Section C", "Section D",
    "Section E", "Section F", "Login", "Footer"
];

const layouts = [
    "FullWidth", "Splash", "Blank", "Dialog",
    "Error", "FullWorksurface", "Homepage",
    "LeftSidebar", "RightSideBar", "PersonDetail",
    "ThreeColumn"
];

const main = async () => {
    const sqlite = new Database(
        process.env.PROD ? '/data/main.db' : './main.db'
    );
      
    const db = drizzle(sqlite, { schema });

    console.log("Seed start");
    const blockTypes: BlockTypeInsert[] = [];

    blockTypes.push({ name: "BlockType 1" });
    blockTypes.push({ name: "BlockType 2" });
    blockTypes.push({ name: "BlockType 3" });
    blockTypes.push({ name: "BlockType 4" });
    blockTypes.push({ name: "BlockType 5" });
    await db.insert(models.blockTypes).values(blockTypes);
    console.log("Pushed BlockType data");

    console.log("Seed done");
};

main();