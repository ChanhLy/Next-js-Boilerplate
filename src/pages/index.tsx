import { useSession, signIn, signOut } from 'next-auth/react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  const { data: session } = useSession();
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      {session ? (
        <>
          Signed in as {session.user?.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </Main>
  );
};

export default Index;
