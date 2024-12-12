'use client';

import { SessionProvider } from 'next-auth/react';

interface NextAuthProviderProps {
  children: any;
}

export const NextAuthProvider = ({ children }: NextAuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
