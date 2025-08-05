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
          colorPrimary: 'hsl(var(--primary))',
          colorBackground: 'hsl(var(--background))',
          colorText: 'hsl(var(--foreground))',
          colorInputBackground: 'hsl(var(--background))',
          colorInputText: 'hsl(var(--foreground))',
          colorShimmer: 'hsl(var(--muted))',
          borderRadius: 'var(--radius)',
        },
        elements: {
          formButtonPrimary: 'bg-primary hover:bg-primary/90 text-primary-foreground',
          headerTitle: 'text-foreground',
          socialButtonsBlockButton: 'border border-input text-foreground hover:bg-accent',
          dividerText: 'text-muted-foreground',
          formFieldInput: 'border border-input bg-background text-foreground',
        }
      }}
    >
      {children}
    </ClerkProvider>
  )
}