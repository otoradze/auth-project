'use client';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const { status } = useSession();

  const handleSignOut = async () => {
    await signOut();
    localStorage.clear();
    sessionStorage.clear();
    document.cookie = '';
  };

  return (
    <div className="p-4 flex justify-between items-center shadow-md">
      <Link className="font-bold text-lg" href={'/'}>
        Home
      </Link>
      {status === 'authenticated' ? (
        <button
          onClick={handleSignOut}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn('google')}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign in
        </button>
      )}
    </div>
  );
}
