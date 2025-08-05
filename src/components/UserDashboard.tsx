import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, CheckCircle, TrendingUp } from "@phosphor-icons/react"
import { useUser } from '@clerk/clerk-react'

export function UserDashboard() {
  const { user } = useUser()

  const recentLessons = [
    { title: "Variables and Mutability", progress: 100, duration: "15 min", completed: true },
    { title: "Data Types", progress: 75, duration: "20 min", completed: false },
    { title: "Functions", progress: 0, duration: "25 min", completed: false },
  ]

  const stats = [
    { label: "Lessons Completed", value: "12", icon: <CheckCircle size={20} /> },
    { label: "Hours Learned", value: "8.5", icon: <Clock size={20} /> },
    { label: "Current Streak", value: "3 days", icon: <TrendingUp size={20} /> },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, {user?.firstName}! 👋
            </h2>
            <p className="text-muted-foreground">
              Continue your Rust learning journey where you left off.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className="text-primary">
                      {stat.icon}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Lessons */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen size={20} />
                  Continue Learning
                </CardTitle>
                <CardDescription>
                  Pick up where you left off in your Rust journey
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentLessons.map((lesson, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium text-foreground">{lesson.title}</h4>
                        {lesson.completed && (
                          <Badge variant="secondary" className="text-xs">
                            <CheckCircle size={12} className="mr-1" />
                            Complete
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Progress value={lesson.progress} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          {lesson.progress}% • {lesson.duration}
                        </p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant={lesson.completed ? "outline" : "default"}
                      className="ml-4"
                    >
                      {lesson.completed ? "Review" : "Continue"}
                    </Button>
                  </div>
                ))}
                <Button className="w-full" variant="outline">
                  Browse All Lessons
                </Button>
              </CardContent>
            </Card>

            {/* Learning Path */}
            <Card>
              <CardHeader>
                <CardTitle>Your Learning Path</CardTitle>
                <CardDescription>
                  Track your progress through the Rust curriculum
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <CheckCircle size={16} color="white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Getting Started</p>
                      <p className="text-sm text-muted-foreground">Completed • 5 lessons</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-accent/10 border border-accent/20 rounded-lg">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Core Concepts</p>
                      <p className="text-sm text-muted-foreground">In Progress • 3/8 lessons</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 border border-border rounded-lg opacity-50">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-muted-foreground">Ownership & Borrowing</p>
                      <p className="text-sm text-muted-foreground">Locked • 0/6 lessons</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}