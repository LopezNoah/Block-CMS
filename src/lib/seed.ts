// src/db/seed.ts
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as models from "./models/schema.ts";
import Database from "better-sqlite3";
import { db } from "./drizzle.ts";
import type { BlockInsert, BlockTypeInsert, PageInsert } from "./models/types.ts";

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
    console.log("Seed start");
    const blockTypes: BlockTypeInsert[] = [];
    const pages: PageInsert[] = [];
    const blocks: BlockInsert[] = [];

    for (let i = 0; i < 200; i++) {
        pages.push({
            description: "Description",
            layout: "FullWidth",
            title: `Page ${i}`
        });
    }
    await db.insert(models.pages).values(pages);
    console.log("Pushed Page data");

    blockTypes.push({ name: "Block 1" });
    blockTypes.push({ name: "Block 2" });
    blockTypes.push({ name: "Block 3" });
    blockTypes.push({ name: "Block 4" });
    blockTypes.push({ name: "Block 5" });
    await db.insert(models.blockTypes).values(blockTypes);
    console.log("Pushed BlockType data");

    const zoneLength = zones.length - 1;

    for (let i = 0; i < 400; i++) {
        blocks.push({
            zone: zones[i % zoneLength],
            pageId: pages[i % 200].id,
            blockTypeId: blockTypes[i % 5].id
        });
    }
    await db.insert(models.blocks).values(blocks);
    console.log("Pushed Blocks data");
    console.log("Seed done");
};

await main();