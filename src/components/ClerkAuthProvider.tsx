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
          colorInputBackground: 'hsl(var(--background))',
          colorInputText: 'hsl(var(--foreground))',
          colorText: 'hsl(var(--foreground))',
          colorTextSecondary: 'hsl(var(--muted-foreground))',
          colorShimmer: 'hsl(var(--muted))',
          colorNeutral: 'hsl(var(--muted))',
          fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
          borderRadius: 'var(--radius)',
        },
        elements: {
          formButtonPrimary: 'bg-primary text-primary-foreground hover:bg-primary/90',
          card: 'border border-border shadow-lg',
          headerTitle: 'text-foreground',
          headerSubtitle: 'text-muted-foreground',
          socialButtonsBlockButton: 'border border-border hover:bg-muted/50',
          dividerLine: 'bg-border',
          dividerText: 'text-muted-foreground',
          formFieldLabel: 'text-foreground',
          formFieldInput: 'border border-input bg-background',
          footerActionLink: 'text-primary hover:text-primary/80',
        }
      }}
    >
      {children}
    </ClerkProvider>
  )
}