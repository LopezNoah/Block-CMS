import type { InferInsertModel, InferSelectModel } from "drizzle-orm"
import { blocks, blockTypes, pages } from "./schema"

export type Block = InferSelectModel<typeof blocks>;
export type BlockInsert = InferInsertModel<typeof blocks>;

export type BlockType = InferSelectModel<typeof blockTypes>;
export type BlockTypeInsert = InferInsertModel<typeof blockTypes>;

export type Page = InferSelectModel<typeof pages>;
export type PageInsert = InferInsertModel<typeof pages>;