
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, User, ArrowRight, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  },
  {
    id: 4,
    title: "Community Health Workers: Unsung Heroes",
    excerpt: "Stories from the frontlines of community healthcare in Ghana.",
    author: "Kwame Asante",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Community"
  },
  {
    id: 5,
    title: "Telemedicine Success in Remote Areas",
    excerpt: "How digital consultations are bridging healthcare gaps in rural Tanzania.",
    author: "Dr. Sarah Mwalimu",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Innovation"
  },
  {
    id: 6,
    title: "Mobile Health Clinics Revolution",
    excerpt: "Bringing healthcare to doorsteps across sub-Saharan Africa.",
    author: "Mobile Health Initiative",
    date: "2024-01-03",
    readTime: "4 min read",
    category: "Care Stories"
  }
];

const categories = ["All", "Care Stories", "Innovation", "Community", "Commerce"];

const Studio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAllStories, setShowAllStories] = useState(false);

  const filteredStories = featuredStories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedStories = showAllStories ? filteredStories : filteredStories.slice(0, 3);

  const handleStoryClick = (storyId: number) => {
    console.log(`Opening story with ID: ${storyId}`);
    // For now, we'll just log the story click
    // In a real app, this would navigate to the full story
  };

  const handleSubmitStory = () => {
    console.log("Opening story submission form");
    // This would open a story submission form or navigate to a submission page
  };

  const handleGetInTouch = () => {
    console.log("Opening contact form");
    // This would scroll to contact section or open contact modal
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-yellow-50 via-emerald-50 to-white font-sans">
      <Navbar />
      
      <main className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <BreadcrumbNav />
        </div>

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
            <Button 
              size="lg" 
              className="bg-amber-700 hover:bg-amber-800"
              onClick={() => setShowAllStories(true)}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Browse All Stories
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-700 text-green-800"
              onClick={handleSubmitStory}
            >
              Submit Your Story
            </Button>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search stories, authors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Featured Stories */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-green-800">
              {selectedCategory === "All" ? "Featured Stories" : `${selectedCategory} Stories`}
            </h2>
            <span className="text-sm text-muted-foreground">
              {filteredStories.length} stories found
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedStories.map((story) => (
              <Card 
                key={story.id} 
                className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
                onClick={() => handleStoryClick(story.id)}
              >
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
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{story.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(story.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full text-amber-700 hover:text-amber-800 hover:bg-amber-50">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {!showAllStories && filteredStories.length > 3 && (
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => setShowAllStories(true)}
                className="border-green-700 text-green-800 hover:bg-green-50"
              >
                Show More Stories ({filteredStories.length - 3} more)
              </Button>
            </div>
          )}
        </section>

        {/* Categories */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.slice(1).map((category) => (
              <Button
                key={category}
                variant="outline"
                className={`h-16 border-green-200 hover:bg-green-50 hover:border-green-300 ${
                  selectedCategory === category ? 'bg-green-50 border-green-300' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center" id="contact">
          <div className="bg-gradient-to-r from-amber-700 to-yellow-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Share Your Story</h3>
            <p className="mb-6 text-amber-100">
              Have a story of innovation, care, or transformation? 
              We'd love to feature your voice in DINHA Studio.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-amber-700 hover:bg-amber-50"
              onClick={handleGetInTouch}
            >
              Get in Touch
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Studio;
