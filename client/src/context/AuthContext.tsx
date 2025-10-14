import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useSession } from '../lib/auth';
interface User {
  id: string
  email: string
  name?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, isPending } = useSession()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if (session?.user) {
      setUser({
        id: session.user.id,
        email: session.user.email,
        name: session.user.name,
      })
    } else {
      setUser(null)
    }
  }, [session])

  return (
    <AuthContext.Provider
      value={{
        user,
        loading: isPending,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider')
  return context
}

export { useAuth, AuthProvider }