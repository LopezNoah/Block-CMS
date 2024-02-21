import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

const users = sqliteTable('users', {
  id: text('id'),
  textModifiers: text('text_modifiers').notNull().default(sql`CURRENT_TIMESTAMP`),
  intModifiers: integer('int_modifiers', { mode: 'boolean' }).notNull().default(false),
});

export const pages = sqliteTable('Page', {
    id: integer('id').primaryKey({ autoIncrement: true}),
    description: text('description'),
    layout: text('layout'),
    title: text('title'),
  });
  
export const blocks = sqliteTable('Block', {
  id: integer('id').primaryKey({ autoIncrement: true}),
  pageId: integer('pageId').references(() => pages.id),
  zone: text('zone').notNull(),
  blockTypeId: integer('blockTypeId').references(() => blockTypes.id)
});

export const blockTypes = sqliteTable('BlockType', {
  id: integer('id').primaryKey({ autoIncrement: true}),
  name: text('name').notNull()
});