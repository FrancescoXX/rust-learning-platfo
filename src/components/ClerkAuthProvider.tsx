import { ClerkProvider } from '@clerk/clerk-react'
import { ReactNode } from 'react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

interface ClerkAuthProviderProps {
  children: ReactNode
}

export function ClerkAuthProvider({ children }: ClerkAuthProviderProps) {
  return (
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: '#ce5c00',
          colorBackground: '#ffffff',
          colorInputBackground: '#ffffff',
          colorInputText: '#000000'
        },
        elements: {
          card: 'bg-card border border-border shadow-lg',
          socialButtonsBlockButton: 'border border-border hover:bg-secondary',
          formFieldInput: 'border border-input bg-background',
          footerActionLink: 'text-primary hover:text-primary/80'
        }
      }}
    >
      {children}
    </ClerkProvider>
  )
}