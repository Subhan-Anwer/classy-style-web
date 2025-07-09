'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useAuth } from '@/context/AuthContext';
import Login from '@/components/Login';

export default function CheckAuthPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const uid = user.uid;
      // Set secure cookie with uid
      Cookies.set('__uid', uid, {
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
      });
      // Redirect to orders
      router.push('/orders');
    } else {
      setLoading(false);
    }
  }, [user, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p>Checking authentication...</p>
      </div>
    );
  }

  // If not signed in, show login form
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] p-6">
      <h2 className="text-2xl font-bold mb-4">Sign in to view your orders</h2>
      <p className="text-gray-600 mb-6">Please sign in to access your order history.</p>
      <Login />
    </div>
  );
}
