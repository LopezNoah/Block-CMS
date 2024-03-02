import { db } from "@lib/drizzle"
import { blockTypes } from "@lib/models/schema"
import type { BlockTypeInsert } from "@lib/models/types"
import type { APIRoute } from "astro"

export const GET: APIRoute = async ({ params, request }) => {
    const randomNumber: number = Math.floor(Math.random() * 1001);
    const values: BlockTypeInsert = {
        name: `BlockType ${randomNumber}`
    };

    const newBlockType = await createBlockTypeQuery(values);

    return new Response(JSON.stringify(newBlockType))
}

const createBlockTypeQuery = (values: BlockTypeInsert) => db
    .insert(blockTypes)
    .values(values)
    .returning();

export const POST: APIRoute = async ({ request }) => {
    const randomNumber: number = Math.floor(Math.random() * 1001);
    const values: BlockTypeInsert = {
        name: `BlockType ${randomNumber}`
    };

    const newBlockType = await createBlockTypeQuery(values);

    return new Response(JSON.stringify(newBlockType))
}  
export const DELETE: APIRoute = ({ request }) => {
    return new Response(JSON.stringify({
        message: "This was a DELETE!"
      })
    )
}
  
export const ALL: APIRoute = ({ request }) => {
    return new Response(JSON.stringify({
        message: `This was a ${request.method}!`
      })
    )
}