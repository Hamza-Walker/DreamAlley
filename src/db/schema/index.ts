import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { integer, pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
export const users = pgTable('users', {
	id: uuid('id').defaultRandom().primaryKey(),
	email: varchar('email', { length: 256 }).notNull().unique(),
	password: varchar('password', { length: 256 }).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
})

export type user = InferSelectModel<typeof users>;
export type newUser = InferInsertModel<typeof users>;


export const products = pgTable('products', {
	id: uuid('id').defaultRandom().primaryKey(),
	name: varchar('name', { length: 256 }).notNull(),
	description: varchar('description', { length: 256 }).notNull(),
	price: integer('price').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type product = InferSelectModel<typeof products>; 
export type newProduct = InferInsertModel<typeof products>;


