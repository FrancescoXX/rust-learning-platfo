import { UserButton, useUser, useAuth } from '@clerk/clerk-react'
import { Button } from "@/components/ui/button"
import { SignInButton, SignUpButton } from '@clerk/clerk-react'

export function AuthButtons() {
  const { isSignedIn, user } = useUser()
  const { signOut } = useAuth()

  if (isSignedIn) {
    return (
      <div className="flex items-center space-x-3">
        <span className="text-sm text-muted-foreground hidden sm:inline">
          Welcome, {user.firstName || user.username}
        </span>
        <UserButton 
          appearance={{
            elements: {
              avatarBox: "w-8 h-8"
            }
          }}
        />
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      <SignInButton mode="modal">
        <Button variant="ghost" size="sm">
          Sign In
        </Button>
      </SignInButton>
      <SignUpButton mode="modal">
        <Button size="sm">
          Get Started
        </Button>
      </SignUpButton>
    </div>
  )
}