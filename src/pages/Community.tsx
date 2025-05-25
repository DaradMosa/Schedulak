
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Plus, Send, AlertTriangle, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Community = () => {
  const [newPost, setNewPost] = useState("");
  const [posts] = useState([
    {
      id: 1,
      author: "Mosa",
      content: "Does anyone have notes for Advanced Calculus? The midterm is next week!",
      timestamp: "2 hours ago",
      replies: 5,
      likes: 12,
      course: "MATH 301"
    },
    {
      id: 2,
      author: "Laith",
      content: "Looking for study partners for Computer Networks. Anyone interested in forming a study group?",
      timestamp: "4 hours ago",
      replies: 8,
      likes: 15,
      course: "CS 441"
    },
    {
      id: 3,
      author: "Azoz",
      content: "Professor Johnson's office hours have been moved to Thursdays 2-4 PM",
      timestamp: "1 day ago",
      replies: 2,
      likes: 8,
      course: "PHY 201"
    }
  ]);

  const [announcements] = useState([
    {
      id: 1,
      title: "Registration for Fall 2024 opens Monday",
      content: "Don't forget to register for your courses starting Monday at 9 AM",
      date: "March 15, 2024",
      priority: "high"
    },
    {
      id: 2,
      title: "Library extended hours during finals",
      content: "The library will be open 24/7 during finals week",
      date: "March 10, 2024",
      priority: "medium"
    }
  ]);

  const handleSubmitPost = () => {
    if (!newPost.trim()) {
      toast({
        title: "Error",
        description: "Please enter some content for your post",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Post Created",
      description: "Your post has been shared with the community",
    });
    setNewPost("");
  };

  const handleContactAdmin = () => {
    toast({
      title: "Contact Form",
      description: "Opening contact form to reach administrators",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-8 w-8 text-pink-600" />
          <h1 className="text-3xl font-bold">Community</h1>
        </div>
      
      </div>

      <Tabs defaultValue="posts" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="posts">Discussion Posts</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="groups">Study Groups</TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="space-y-4">
          {/* Create New Post */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Create New Post
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Share something with the community..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="min-h-[100px]"
              />
              <Button onClick={handleSubmitPost} className="gap-2">
                <Send className="h-4 w-4" />
                Post
              </Button>
            </CardContent>
          </Card>

          {/* Posts List */}
          <div className="space-y-4">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{post.author}</h3>
                      <Badge variant="outline">{post.course}</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>{post.content}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{post.likes} likes</span>
                    <span>{post.replies} replies</span>
                    <Button variant="ghost" size="sm">Reply</Button>
                    <Button variant="ghost" size="sm">Like</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="announcements" className="space-y-4">
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{announcement.title}</CardTitle>
                    <Badge variant={announcement.priority === 'high' ? 'destructive' : 'secondary'}>
                      {announcement.priority} priority
                    </Badge>
                  </div>
                  <CardDescription>{announcement.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{announcement.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="groups" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Study Groups
              </CardTitle>
              <CardDescription>
                Join or create study groups with your classmates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Calculus Study Group</h3>
                    <p className="text-sm text-muted-foreground">5 members • Meets Tuesdays 7 PM</p>
                  </div>
                  <Button size="sm">Join</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Physics Lab Partners</h3>
                    <p className="text-sm text-muted-foreground">3 members • Lab sessions</p>
                  </div>
                  <Button size="sm">Join</Button>
                </div>
                <Button className="w-full gap-2">
                  <Plus className="h-4 w-4" />
                  Create New Study Group
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Community;
