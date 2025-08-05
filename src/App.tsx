import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Toaster } from "@/components/ui/sonner"
import { useKV } from '@github/spark/hooks'
import { Code, Shield, Zap, Users, BookOpen, CheckCircle } from "@phosphor-icons/react"
import { toast } from 'sonner'
import { AuthButtons } from './components/AuthButtons'
import { UserDashboard } from './components/UserDashboard'
import { useUser } from '@clerk/clerk-react'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribers, setSubscribers] = useKV('newsletter-subscribers', [])
  const { isSignedIn, user } = useUser()

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // Check if email already exists
    if (subscribers.includes(email)) {
      toast.error('You\'re already subscribed!')
      setIsSubmitting(false)
      return
    }

    // Add email to subscribers
    setSubscribers(currentSubscribers => [...currentSubscribers, email])
    
    toast.success('Thanks for subscribing! We\'ll keep you updated.')
    setEmail('')
    setIsSubmitting(false)
  }

  const features = [
    {
      icon: <Code size={24} />,
      title: "Interactive Learning",
      description: "Write and execute Rust code directly in your browser with instant feedback and guidance."
    },
    {
      icon: <Shield size={24} />,
      title: "Memory Safety First",
      description: "Master Rust's unique ownership system through visual examples and hands-on practice."
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Focused",
      description: "Learn to write blazingly fast code while understanding the performance implications."
    },
    {
      icon: <Users size={24} />,
      title: "Community Driven",
      description: "Join a supportive community of Rust learners and get help when you need it."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Structured Path",
      description: "Follow a carefully crafted curriculum that takes you from beginner to confident Rust developer."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Real Projects",
      description: "Build actual applications and tools that demonstrate Rust's practical capabilities."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code size={20} color="white" weight="bold" />
            </div>
            <span className="text-xl font-bold text-foreground">RustCraft</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <AuthButtons />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          {isSignedIn ? (
            <>
              <Badge variant="secondary" className="mb-6">
                🎉 Welcome back, {user.firstName || user.username}!
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Continue Your Rust Journey
                <span className="block text-primary">Start Learning Today</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Jump back into your Rust learning path or explore new concepts. Your progress is saved and waiting for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Continue Learning
                </Button>
                <Button size="lg" variant="outline">
                  Browse Lessons
                </Button>
              </div>
            </>
          ) : (
            <>
              <Badge variant="secondary" className="mb-6">
                🦀 Coming Soon
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Master Rust Programming
                <span className="block text-primary">The Safe Way</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Learn Rust through interactive lessons, real-world projects, and a supportive community. 
                Build memory-safe, blazingly fast applications with confidence.
              </p>
              
              {/* Newsletter Signup */}
              <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90">
                  {isSubmitting ? 'Subscribing...' : 'Get Early Access'}
                </Button>
              </form>
              
              <p className="text-sm text-muted-foreground">
                Join {subscribers.length > 0 ? `${subscribers.length} other` : ''} developers waiting for launch
              </p>
            </>
          )}
        </div>
      </section>

      {/* User Dashboard - Only show for authenticated users */}
      {isSignedIn && <UserDashboard />}

      {/* Features Section */}
      <section id="features" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose RustCraft?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've designed the most effective way to learn Rust, combining theory with practical application.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border/50">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Rust Made Accessible
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Rust has a reputation for being difficult to learn, but it doesn't have to be. 
                  Our platform breaks down complex concepts into digestible lessons, providing 
                  clear explanations and plenty of practice opportunities.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-primary" />
                    <span className="text-foreground">Step-by-step guided learning path</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-primary" />
                    <span className="text-foreground">Real-time code execution and feedback</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-primary" />
                    <span className="text-foreground">Community support and mentorship</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-primary" />
                    <span className="text-foreground">Project-based learning approach</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <pre className="text-sm text-foreground">
                    <code>{`fn main() {
    let message = "Hello, Rust!";
    println!("{}", message);
    
    // Memory safety guaranteed ✓
    // Zero-cost abstractions ✓
    // Fearless concurrency ✓
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isSignedIn && (
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Rust Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Be among the first to experience the most effective way to learn Rust programming.
            </p>
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-primary-foreground text-foreground"
                required
              />
              <Button type="submit" disabled={isSubmitting} variant="secondary">
                {isSubmitting ? 'Subscribing...' : 'Join Waitlist'}
              </Button>
            </form>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Code size={16} color="white" weight="bold" />
              </div>
              <span className="text-lg font-semibold text-foreground">RustCraft</span>
            </div>
            <div className="flex space-x-6 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 RustCraft. Making Rust accessible to everyone.</p>
          </div>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}

export default App