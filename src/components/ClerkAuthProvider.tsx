import { ClerkProvider } from '@clerk/clerk-react'
import { ReactNode } from 'react'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!publishableKey) {
  throw new Error("Missing Publishable Key")
}

interface ClerkAuthProviderProps {
  children: ReactNode
}

export function ClerkAuthProvider({ children }: ClerkAuthProviderProps) {
  return (
    <ClerkProvider 
      publishableKey={publishableKey}
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: 'var(--primary)',
          colorBackground: 'var(--background)',
          colorInputBackground: 'var(--background)',
          colorInputText: 'var(--foreground)',
          borderRadius: 'var(--radius)',
        },
        elements: {
          headerTitle: 'text-foreground',
          dividerText: 'text-muted-foreground',
          formButtonPrimary: 'bg-primary hover:bg-primary/90',
          card: 'bg-card border-border',
          headerSubtitle: 'text-muted-foreground',
          socialButtonsBlockButton: 'border-border hover:bg-accent/10',
          formFieldLabel: 'text-foreground',
          formFieldInput: 'border-input bg-background text-foreground',
          footerActionText: 'text-muted-foreground',
          footerActionLink: 'text-primary hover:text-primary/90',
        }
      }}
    >
      {children}
    </ClerkProvider>
  )
}