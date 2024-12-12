'use client';

import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { useEffect } from 'react';

export default function Dashboard() {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status]);

  if (status === 'authenticated') {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="shadow-xl p-8 rounded-medium flex flex-col gap-3 bg-orange-400 rounded-xl w-96">
          <Image
            className="rounded-full"
            src={session?.user?.image as string}
            width={60}
            height={60}
            alt="profile"
          />
          <div>
            Name: <span className="font-bold">{session?.user?.name}</span>
          </div>
          <div>
            Email: <span className="font-bold">{session?.user?.email}</span>
          </div>
        </div>
      </div>
    );
  }
}
