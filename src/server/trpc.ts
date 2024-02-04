import { initTRPC } from '@trpc/server';
import type { Context } from './context';

export const t = initTRPC
			.context<Context>() // to infere the type of context
			.create();


export const router = t.router; 
export const procedure = t.procedure; 
