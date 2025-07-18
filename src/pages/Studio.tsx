
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const featuredStories = [
  {
    id: 1,
    title: "The Night Shift That Changed Everything",
    excerpt: "A nurse's story of innovation during a critical moment in rural Kenya.",
    author: "Dr. Amina Hassan",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Care Stories"
  },
  {
    id: 2,
    title: "Building Digital Bridges in Healthcare",
    excerpt: "How technology is connecting remote communities to life-saving care.",
    author: "Tech Team DINHA",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Innovation"
  },
  {
    id: 3,
    title: "Empowering SMEs Through Digital Health",
    excerpt: "Small businesses transforming healthcare delivery across Africa.",
    author: "Grace Okonkwo",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Commerce"
  }
];

const Studio = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-yellow-50 via-emerald-50 to-white font-sans">
      <Navbar />
      
      <main className="pt-20 pb-16">
        {/* Header Section */}
        <section className="max-w-4xl mx-auto py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-700 mb-4">
            DINHA Studio
          </h1>
          <p className="text-lg text-green-900 mb-8 max-w-2xl mx-auto">
            Where stories of healing meet innovation. Explore inspiring narratives, 
            health innovation insights, and personal journeys from across Africa's healthcare landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
              <BookOpen className="mr-2 h-5 w-5" />
              Browse All Stories
            </Button>
            <Button size="lg" variant="outline" className="border-green-700 text-green-800">
              Submit Your Story
            </Button>
          </div>
        </section>

        {/* Featured Stories */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">Featured Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStories.map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded">
                      {story.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{story.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-amber-700 transition-colors">
                    {story.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{story.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{story.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(story.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-4 text-amber-700 hover:text-amber-800">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Care Stories", "Innovation", "Community", "Commerce"].map((category) => (
              <Button
                key={category}
                variant="outline"
                className="h-16 border-green-200 hover:bg-green-50 hover:border-green-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <div className="bg-gradient-to-r from-amber-700 to-yellow-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
            <p className="mb-6 text-amber-100">
              Have a story of innovation, care, or transformation? 
              We'd love to feature your voice in DINHA Studio.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-amber-700 hover:bg-amber-50">
              Get in Touch
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Studio;
