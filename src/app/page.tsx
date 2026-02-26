'use client'

import { useAuth } from '@/providers/AuthProvider'
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HomePage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) return null

  return redirect('/dashboard/employees');
}