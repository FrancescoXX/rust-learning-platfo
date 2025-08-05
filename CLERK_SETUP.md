# RustCraft - Clerk Authentication Setup

## Setting Up Clerk Authentication

### 1. Create a Clerk Account
1. Go to [clerk.com](https://clerk.com) and sign up for a free account
2. Create a new application in your Clerk Dashboard
3. Choose your preferred authentication methods (email, social logins, etc.)

### 2. Get Your API Keys
1. In your Clerk Dashboard, go to "API Keys"
2. Copy your **Publishable Key** and **Secret Key**

### 3. Configure Environment Variables
1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual Clerk keys:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here
```

### 4. Customize Authentication Appearance
The authentication modals are already themed to match your RustCraft brand colors. You can further customize the appearance in `src/components/ClerkAuthProvider.tsx`.

### 5. Test Authentication
1. Start your development server: `npm run dev`
2. Click "Sign Up" or "Sign In" in the navigation
3. Create a test account to see the authenticated user experience

## Features Added

### Authentication Components
- **ClerkAuthProvider**: Wraps the app with Clerk authentication context
- **AuthButtons**: Handles sign in/up buttons and user profile display
- **UserDashboard**: Shows personalized content for authenticated users

### User Experience
- **Landing Page**: Shows for unauthenticated users with newsletter signup
- **Dashboard**: Shows for authenticated users with learning progress
- **Conditional Navigation**: Different navigation options based on auth state
- **Branded UI**: Authentication modals match your app's theme

## Next Steps

1. **Configure Social Logins**: Add GitHub, Google, or other OAuth providers in Clerk Dashboard
2. **Add User Roles**: Set up different user types (student, instructor, admin)
3. **Implement Lessons**: Create the actual learning content and progress tracking
4. **Add User Profiles**: Allow users to customize their learning preferences
5. **Implement Webhooks**: Sync user data with your backend when needed

## Branch Management

This authentication feature was implemented as a separate feature. To merge:

```bash
git checkout main
git merge add-clerk-auth
```

## Troubleshooting

- **"Missing Publishable Key" error**: Make sure your `.env.local` file has the correct environment variables
- **Authentication modal not styled**: Check that your CSS variables are properly defined in `src/index.css`
- **User not persisting**: Ensure ClerkAuthProvider is wrapping your entire app in `main.tsx`