import { procedure, router } from '../trpc';
import { userRouter } from '../users';
import { z } from 'zod';

export const appRouter = router ({
	testProcedure: procedure.input(z.object({
	     text : z.string(),
	}),
	).query((opts) => {
		return {
		greeting: `hello ${opts.input.text}`,
		};
	}),
	testMutation: procedure.mutation((opts) => {
		//TODO: implement drizzle db mutation here. example: find a post by id and update it. 
	}), 
	users: userRouter, 
});

// export type definition of API 
export type AppRouter = typeof appRouter; 
