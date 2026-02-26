import api from '@/lib/api/axios'

export interface LoginPayload {
  email: string
  password: string
}

export interface User {
  id: number
  email: string
  name: string
  password: string
}

export const authService = {
  async login(payload: LoginPayload): Promise<User> {
    const response = await api.get<User[]>(
      '/users'
    )

    const user = response.data.find(u => u.email === payload.email && u.password === payload.password)

    if (!user) {
      throw new Error('Invalid credentials')
    }

    return user
  }
}