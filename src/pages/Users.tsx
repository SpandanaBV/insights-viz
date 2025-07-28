import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const Users = () => {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "active", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "active", role: "User" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", status: "inactive", role: "User" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Users</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{user.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Badge variant={user.status === "active" ? "default" : "secondary"}>
                  {user.status}
                </Badge>
                <span className="text-sm text-muted-foreground">{user.role}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Users