import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import { getSession } from 'next-auth/react';

export const createTrpcContext = async (opts: CreateNextContextOptions) => {
	const session = await getSession({ req: opts.req })
	
	//console.log('TRPC Context:', { session, req: opts.req });

	return {
		session,
	};

};

export type Context = Awaited<ReturnType<typeof createTrpcContext>>;

