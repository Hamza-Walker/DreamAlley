"use client"

import { trpc } from '../utils/trpc';

export default function Home() {
  const hello = trpc.testProcedure.useQuery({text : 'client'}); 
  const nestedRout = trpc.users.getUser.useQuery();
  if (!hello.data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{hello.data.greeting}</p>
      <p>{nestedRout.data?.name}</p>
      <p>{nestedRout.data?.id}</p>
    </div>
  );
}
