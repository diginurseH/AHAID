
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, MessageCircle, Calendar, Globe, Heart, Zap, Trophy, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import communityImage from "@/assets/community-health-tech.jpg";

const communityStats = [
  { icon: <Users className="h-6 w-6" />, label: "Active Members", value: "2,500+" },
  { icon: <Globe className="h-6 w-6" />, label: "Countries", value: "15" },
  { icon: <MessageCircle className="h-6 w-6" />, label: "Discussions", value: "450+" },
  { icon: <Heart className="h-6 w-6" />, label: "Lives Impacted", value: "10,000+" }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Digital Health Innovation Webinar",
    date: "2024-02-15",
    time: "15:00 GMT",
    type: "Webinar",
    attendees: 120
  },
  {
    id: 2,
    title: "Nurse Empowerment Workshop",
    date: "2024-02-20",
    time: "14:00 GMT",
    type: "Workshop",
    attendees: 85
  },
  {
    id: 3,
    title: "Community Health Champions Meet",
    date: "2024-02-25",
    time: "16:00 GMT",
    type: "Meetup",
    attendees: 200
  }
];

const forumTopics = [
  {
    id: 1,
    title: "Best Practices for Rural Healthcare",
    author: "Dr. Amina Hassan",
    replies: 24,
    lastActivity: "2 hours ago",
    category: "Healthcare"
  },
  {
    id: 2,
    title: "Tech Solutions for Patient Management",
    author: "Michael Okonkwo",
    replies: 18,
    lastActivity: "4 hours ago",
    category: "Technology"
  },
  {
    id: 3,
    title: "Community Health Worker Training",
    author: "Sarah Kiplagat",
    replies: 31,
    lastActivity: "1 day ago",
    category: "Training"
  }
];

const resources = [
  {
    title: "Healthcare Innovation Toolkit",
    description: "Comprehensive guide for implementing health tech solutions",
    type: "PDF Guide",
    downloads: 1250
  },
  {
    title: "Community Health Metrics Dashboard",
    description: "Templates and tools for tracking community health outcomes",
    type: "Excel Template",
    downloads: 890
  },
  {
    title: "Funding Opportunities Database",
    description: "Curated list of grants and funding sources for health projects",
    type: "Database",
    downloads: 2100
  }
];

const testimonials = [
  {
    name: "Dr. Sarah Kipkoech",
    role: "Community Health Nurse, Kenya",
    quote: "NURSAERAHEALTH's community has transformed how I approach patient care. The support and knowledge sharing here is incredible."
  },
  {
    name: "Michael Osei",
    role: "Healthcare Developer, Ghana",
    quote: "Being part of this community means being part of a movement that's genuinely changing healthcare in Africa."
  },
  {
    name: "Fatima Al-Rashid",
    role: "Health Tech Entrepreneur, Morocco",
    quote: "The connections I've made here have been instrumental in growing my health tech startup."
  }
];

const Community = () => {
  return (
    <div className="relative min-h-screen w-full bg-background font-sans">
      <Navbar />
      
      <main className="pt-20 pb-16">
        {/* Header Section with Image */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-secondary">NURSAERAHEALTH</span> <span className="text-primary">Community</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Join a thriving community of healthcare professionals, developers, 
                and innovators dedicated to transforming healthcare across Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Users className="mr-2 h-5 w-5" />
                  Join Community
                </Button>
                <Button size="lg" variant="outline">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Start Discussion
                </Button>
              </div>
            </div>
            <div>
              <img 
                src={communityImage} 
                alt="African community members using digital health technology" 
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow">
                <div className="flex justify-center mb-2 text-green-700">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-green-900">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <Tabs defaultValue="events" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-8">
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Events
              </TabsTrigger>
              <TabsTrigger value="forum" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Forum
              </TabsTrigger>
              <TabsTrigger value="resources" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Resources
              </TabsTrigger>
              <TabsTrigger value="voices" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                Voices
              </TabsTrigger>
            </TabsList>

            <TabsContent value="events">
              <div className="grid md:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded">
                          {event.type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {event.attendees} attending
                        </span>
                      </div>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <span>{event.time}</span>
                      </div>
                      <Button className="w-full bg-green-700 hover:bg-green-800">
                        Register Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="forum">
              <div className="space-y-4">
                {forumTopics.map((topic) => (
                  <Card key={topic.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-green-900 mb-2">{topic.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>by {topic.author}</span>
                            <span>{topic.replies} replies</span>
                            <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                              {topic.category}
                            </span>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {topic.lastActivity}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <div className="grid md:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{resource.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded">
                          {resource.type}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {resource.downloads} downloads
                        </span>
                      </div>
                      <Button className="w-full mt-4 bg-green-700 hover:bg-green-800">
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="voices">
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-green-50">
                    <CardContent className="p-6">
                      <p className="text-green-900 mb-4 italic">"{testimonial.quote}"</p>
                      <div>
                        <div className="font-semibold text-green-800">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Join Call to Action */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-green-800 to-emerald-700 text-white rounded-2xl p-8 text-center">
            <Zap className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
            <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
            <p className="mb-6 text-green-100 max-w-2xl mx-auto">
              Join thousands of healthcare professionals, developers, and innovators 
              who are working together to transform healthcare across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-green-800 hover:bg-green-50">
                Join Our Discord
              </Button>
              <Button size="lg" className="bg-primary-foreground text-primary border border-primary hover:bg-primary hover:text-primary-foreground">
                Follow on LinkedIn
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Community;
