
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageSquare, Shield, AlertTriangle, Trash2, Ban } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const AdminDashboard = () => {
  const [users] = useState([
    { id: 1, name: "John Doe", email: "john@university.edu", status: "active", major: "Computer Science" },
    { id: 2, name: "Jane Smith", email: "jane@university.edu", status: "blocked", major: "Mathematics", blockReason: "Inappropriate behavior" },
    { id: 3, name: "Mike Johnson", email: "mike@university.edu", status: "active", major: "Physics" },
  ]);

  const [communityPosts] = useState([
    { id: 1, author: "John Doe", content: "Great discussion about algorithms!", status: "active", reports: 0 },
    { id: 2, author: "Jane Smith", content: "This post was inappropriate", status: "deleted", reports: 3, deleteReason: "Violation of community guidelines" },
    { id: 3, author: "Mike Johnson", content: "Need help with calculus homework", status: "active", reports: 0 },
  ]);

  const [userQuestions] = useState([
    { id: 1, user: "Alice Brown", subject: "Account Access Issue", message: "I can't access my account", status: "pending" },
    { id: 2, user: "Bob Wilson", subject: "Community Guidelines", message: "Question about posting rules", status: "resolved" },
  ]);

  const handleBlockUser = (userId: number, userName: string) => {
    toast({
      title: "User Blocked",
      description: `${userName} has been blocked from the platform`,
      variant: "destructive",
    });
  };

  const handleDeletePost = (postId: number) => {
    toast({
      title: "Post Deleted",
      description: "Post has been removed from the community",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Shield className="h-8 w-8 text-red-600" />
        <h1 className="text-3xl font-bold text-red-700">Admin Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Posts</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{communityPosts.filter(p => p.status === 'active').length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blocked Users</CardTitle>
            <Ban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.filter(u => u.status === 'blocked').length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Questions</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userQuestions.filter(q => q.status === 'pending').length}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="posts">Community Posts</TabsTrigger>
          <TabsTrigger value="questions">User Questions</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Monitor and manage platform users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{user.name}</h3>
                        <Badge variant={user.status === 'active' ? 'default' : 'destructive'}>
                          {user.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <p className="text-sm text-muted-foreground">Major: {user.major}</p>
                      {user.blockReason && (
                        <p className="text-sm text-red-600">Block Reason: {user.blockReason}</p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {user.status === 'active' && (
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleBlockUser(user.id, user.name)}
                        >
                          <Ban className="h-4 w-4 mr-1" />
                          Block User
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="posts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Community Posts</CardTitle>
              <CardDescription>Monitor community activity and moderate content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {communityPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{post.author}</h3>
                        <Badge variant={post.status === 'active' ? 'default' : 'destructive'}>
                          {post.status}
                        </Badge>
                        {post.reports > 0 && (
                          <Badge variant="outline" className="text-orange-600">
                            {post.reports} reports
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm">{post.content}</p>
                      {post.deleteReason && (
                        <p className="text-sm text-red-600">Delete Reason: {post.deleteReason}</p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {post.status === 'active' && (
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeletePost(post.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete Post
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="questions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Questions</CardTitle>
              <CardDescription>Handle user inquiries and support requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userQuestions.map((question) => (
                  <div key={question.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{question.user}</h3>
                        <Badge variant={question.status === 'pending' ? 'destructive' : 'default'}>
                          {question.status}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium">{question.subject}</p>
                      <p className="text-sm text-muted-foreground">{question.message}</p>
                    </div>
                    <div className="flex gap-2">
                      {question.status === 'pending' && (
                        <Button size="sm">
                          Respond
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
