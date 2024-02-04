import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { boolean, jsonb, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';

export const posts = pgTable ('posts', {
 	id:uuid('id').defaultRandom().primaryKey(),
	title:varchar('title', {length:256}).notNull(),
	content:varchar('content',{length:256}).notNull(),
	createdAt:timestamp('created_at').defaultNow().notNull(),
})
// export type Post = InferSelectModel<typeof posts>;
// export type NewPost = InferInsertModel<typeof posts>; 
// TODO: find out where to put the types for your tables 
export const products = pgTable("products", {
	id: text("id").primaryKey().notNull(),
	active: boolean("active"),
	name: text("name"),
	description: text("description"),
	image: text("image"),
	metadata: jsonb("metadata"),
});
// TODO : i just added this to remove the error i was recieving but im gonna habe´ve to back trace mx steps and whatch the viedoe   