import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Target, 
  Calendar, 
  Users, 
  CheckCircle,
  Plus,
  Edit,
  Download,
  Share,
  Lightbulb,
  TrendingUp,
  Clock,
  AlertCircle
} from "lucide-react";

interface ActionItem {
  id: string;
  title: string;
  description: string;
  stream: string;
  priority: "high" | "medium" | "low";
  timeframe: string;
  resources: string[];
  dependencies: string[];
  completed: boolean;
  progress: number;
}

interface ActionPlan {
  id: string;
  title: string;
  description: string;
  streams: string[];
  goals: string[];
  timeline: string;
  actions: ActionItem[];
  created: Date;
  lastUpdated: Date;
}

interface ActionPlanningToolProps {
  userProfile?: any;
  userProgress?: any;
  onPlanSave: (plan: ActionPlan) => void;
}

const ActionPlanningTool = ({ userProfile, userProgress, onPlanSave }: ActionPlanningToolProps) => {
  const [currentPlan, setCurrentPlan] = useState<ActionPlan>({
    id: "",
    title: "",
    description: "",
    streams: [],
    goals: [],
    timeline: "",
    actions: [],
    created: new Date(),
    lastUpdated: new Date()
  });
  
  const [newAction, setNewAction] = useState<Partial<ActionItem>>({
    title: "",
    description: "",
    stream: "",
    priority: "medium",
    timeframe: "",
    resources: [],
    dependencies: []
  });
  
  const [isAddingAction, setIsAddingAction] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");

  const planTemplates = {
    "healthcare-provider": {
      title: "Healthcare Provider Digital Transformation",
      description: "Integrate AI tools and digital workflows into clinical practice",
      streams: ["care", "code"],
      goals: ["Improve patient outcomes", "Increase diagnostic accuracy", "Streamline workflows"],
      suggestedActions: [
        {
          title: "Complete Nursaera AI Training",
          description: "Learn to use AI diagnostic tools effectively",
          stream: "care",
          priority: "high" as const,
          timeframe: "2 weeks",
          resources: ["Training materials", "Practice cases"],
          dependencies: []
        },
        {
          title: "Implement Patient Data Integration",
          description: "Connect existing systems with AI platform",
          stream: "code",
          priority: "medium" as const,
          timeframe: "1 month",
          resources: ["Technical support", "Integration guide"],
          dependencies: ["Complete Nursaera AI Training"]
        }
      ]
    },
    "sme-transformation": {
      title: "SME Digital Transformation Journey",
      description: "Transform business operations with digital tools and create community impact",
      streams: ["commerce", "community"],
      goals: ["Increase revenue", "Improve efficiency", "Create community impact"],
      suggestedActions: [
        {
          title: "Business Assessment & Strategy",
          description: "Analyze current operations and define digital strategy",
          stream: "commerce",
          priority: "high" as const,
          timeframe: "1 week",
          resources: ["Assessment tool", "Strategy template"],
          dependencies: []
        },
        {
          title: "Digital Platform Implementation",
          description: "Deploy web platform and messaging integrations",
          stream: "commerce",
          priority: "high" as const,
          timeframe: "3 weeks",
          resources: ["Development team", "Platform tools"],
          dependencies: ["Business Assessment & Strategy"]
        }
      ]
    },
    "developer-contribution": {
      title: "Open Source Health Tech Contribution",
      description: "Contribute to AHAID's open source projects and build health solutions",
      streams: ["code", "community"],
      goals: ["Make technical contributions", "Build developer network", "Improve health outcomes"],
      suggestedActions: [
        {
          title: "Explore Codebase & Documentation",
          description: "Familiarize with existing projects and contribution guidelines",
          stream: "code",
          priority: "high" as const,
          timeframe: "1 week",
          resources: ["GitHub repository", "Documentation"],
          dependencies: []
        },
        {
          title: "First Contribution",
          description: "Submit first pull request or issue resolution",
          stream: "code",
          priority: "medium" as const,
          timeframe: "2 weeks",
          resources: ["Development environment", "Mentorship"],
          dependencies: ["Explore Codebase & Documentation"]
        }
      ]
    }
  };

  const handleTemplateSelect = (templateKey: string) => {
    const template = planTemplates[templateKey as keyof typeof planTemplates];
    if (template) {
      setCurrentPlan({
        ...currentPlan,
        title: template.title,
        description: template.description,
        streams: template.streams,
        goals: template.goals,
        actions: template.suggestedActions.map((action, index) => ({
          ...action,
          id: `action-${index}`,
          completed: false,
          progress: 0
        }))
      });
      setSelectedTemplate(templateKey);
    }
  };

  const addAction = () => {
    if (newAction.title && newAction.description) {
      const action: ActionItem = {
        id: `action-${Date.now()}`,
        title: newAction.title!,
        description: newAction.description!,
        stream: newAction.stream!,
        priority: newAction.priority!,
        timeframe: newAction.timeframe!,
        resources: newAction.resources || [],
        dependencies: newAction.dependencies || [],
        completed: false,
        progress: 0
      };
      
      setCurrentPlan(prev => ({
        ...prev,
        actions: [...prev.actions, action]
      }));
      
      setNewAction({
        title: "",
        description: "",
        stream: "",
        priority: "medium",
        timeframe: "",
        resources: [],
        dependencies: []
      });
      
      setIsAddingAction(false);
    }
  };

  const updateActionProgress = (actionId: string, progress: number) => {
    setCurrentPlan(prev => ({
      ...prev,
      actions: prev.actions.map(action =>
        action.id === actionId
          ? { ...action, progress, completed: progress === 100 }
          : action
      ),
      lastUpdated: new Date()
    }));
  };

  const toggleActionComplete = (actionId: string) => {
    setCurrentPlan(prev => ({
      ...prev,
      actions: prev.actions.map(action =>
        action.id === actionId
          ? { ...action, completed: !action.completed, progress: !action.completed ? 100 : 0 }
          : action
      ),
      lastUpdated: new Date()
    }));
  };

  const savePlan = () => {
    const planToSave = {
      ...currentPlan,
      id: currentPlan.id || `plan-${Date.now()}`,
      lastUpdated: new Date()
    };
    setCurrentPlan(planToSave);
    onPlanSave(planToSave);
  };

  const exportPlan = () => {
    const planData = {
      ...currentPlan,
      exportedAt: new Date().toISOString(),
      userProfile: userProfile?.role || "unknown"
    };
    
    const blob = new Blob([JSON.stringify(planData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ahaid-action-plan-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const getStreamColor = (stream: string) => {
    switch (stream) {
      case "care": return "bg-green-100 text-green-800";
      case "code": return "bg-blue-100 text-blue-800";
      case "community": return "bg-amber-100 text-amber-800";
      case "commerce": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const overallProgress = currentPlan.actions.length > 0 
    ? (currentPlan.actions.reduce((sum, action) => sum + action.progress, 0) / (currentPlan.actions.length * 100)) * 100
    : 0;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-green-600" />
                Unified Action Planning Tool
              </CardTitle>
              <p className="text-green-700">
                Create comprehensive action plans that leverage multiple streams for maximum impact
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={exportPlan}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button onClick={savePlan} className="bg-green-700 hover:bg-green-800">
                Save Plan
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="planning" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="planning">Plan Creation</TabsTrigger>
              <TabsTrigger value="actions">Action Items</TabsTrigger>
              <TabsTrigger value="tracking">Progress Tracking</TabsTrigger>
            </TabsList>

            <TabsContent value="planning" className="space-y-6">
              {/* Template Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Start with a Template</CardTitle>
                  <p className="text-green-700 text-sm">
                    Choose a template that matches your role and goals
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {Object.entries(planTemplates).map(([key, template]) => (
                      <Card 
                        key={key}
                        className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                          selectedTemplate === key ? 'ring-2 ring-green-500 bg-green-50' : 'hover:bg-green-50'
                        }`}
                        onClick={() => handleTemplateSelect(key)}
                      >
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-green-800 mb-2">{template.title}</h4>
                          <p className="text-green-700 text-sm mb-3">{template.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {template.streams.map(stream => (
                              <Badge key={stream} className={getStreamColor(stream)}>
                                {stream.charAt(0).toUpperCase() + stream.slice(1)}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Plan Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Plan Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-green-800 mb-2 block">Plan Title</label>
                    <Input
                      value={currentPlan.title}
                      onChange={(e) => setCurrentPlan(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter your action plan title"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-green-800 mb-2 block">Description</label>
                    <Textarea
                      value={currentPlan.description}
                      onChange={(e) => setCurrentPlan(prev => ({ ...prev, description: e.target.value }))}
                      placeholder="Describe your goals and expected outcomes"
                      rows={3}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-green-800 mb-2 block">Timeline</label>
                      <Select 
                        value={currentPlan.timeline} 
                        onValueChange={(value) => setCurrentPlan(prev => ({ ...prev, timeline: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-month">1 Month</SelectItem>
                          <SelectItem value="3-months">3 Months</SelectItem>
                          <SelectItem value="6-months">6 Months</SelectItem>
                          <SelectItem value="1-year">1 Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-green-800 mb-2 block">Streams Involved</label>
                      <div className="flex flex-wrap gap-2">
                        {["care", "code", "community", "commerce"].map(stream => (
                          <Badge 
                            key={stream}
                            className={currentPlan.streams.includes(stream) ? getStreamColor(stream) : "bg-gray-100 text-gray-500 cursor-pointer"}
                            onClick={() => {
                              setCurrentPlan(prev => ({
                                ...prev,
                                streams: prev.streams.includes(stream)
                                  ? prev.streams.filter(s => s !== stream)
                                  : [...prev.streams, stream]
                              }));
                            }}
                          >
                            {stream.charAt(0).toUpperCase() + stream.slice(1)}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="actions" className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-green-800">Action Items</h3>
                <Button 
                  onClick={() => setIsAddingAction(true)}
                  className="bg-green-700 hover:bg-green-800"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Action
                </Button>
              </div>

              {/* Add New Action Form */}
              {isAddingAction && (
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Add New Action</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-green-800 mb-2 block">Action Title</label>
                        <Input
                          value={newAction.title || ""}
                          onChange={(e) => setNewAction(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="Enter action title"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-green-800 mb-2 block">Stream</label>
                        <Select 
                          value={newAction.stream} 
                          onValueChange={(value) => setNewAction(prev => ({ ...prev, stream: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select stream" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="care">Care</SelectItem>
                            <SelectItem value="code">Code</SelectItem>
                            <SelectItem value="community">Community</SelectItem>
                            <SelectItem value="commerce">Commerce</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-green-800 mb-2 block">Description</label>
                      <Textarea
                        value={newAction.description || ""}
                        onChange={(e) => setNewAction(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Describe what needs to be done"
                        rows={2}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-green-800 mb-2 block">Priority</label>
                        <Select 
                          value={newAction.priority} 
                          onValueChange={(value: "high" | "medium" | "low") => setNewAction(prev => ({ ...prev, priority: value }))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-green-800 mb-2 block">Timeframe</label>
                        <Input
                          value={newAction.timeframe || ""}
                          onChange={(e) => setNewAction(prev => ({ ...prev, timeframe: e.target.value }))}
                          placeholder="e.g., 2 weeks"
                        />
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button onClick={addAction} className="bg-green-700 hover:bg-green-800">
                        Add Action
                      </Button>
                      <Button variant="outline" onClick={() => setIsAddingAction(false)}>
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Action Items List */}
              <div className="space-y-4">
                {currentPlan.actions.map((action) => (
                  <Card key={action.id} className={action.completed ? "bg-green-50 border-green-200" : ""}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <Checkbox
                            checked={action.completed}
                            onCheckedChange={() => toggleActionComplete(action.id)}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <h4 className={`font-semibold ${action.completed ? 'line-through text-green-600' : 'text-green-800'}`}>
                              {action.title}
                            </h4>
                            <p className={`text-sm ${action.completed ? 'text-green-600' : 'text-green-700'} mb-2`}>
                              {action.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              <Badge className={getStreamColor(action.stream)}>
                                {action.stream.charAt(0).toUpperCase() + action.stream.slice(1)}
                              </Badge>
                              <Badge className={getPriorityColor(action.priority)}>
                                {action.priority.charAt(0).toUpperCase() + action.priority.slice(1)}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {action.timeframe}
                              </Badge>
                            </div>
                            {action.dependencies.length > 0 && (
                              <div className="mt-2 text-sm text-amber-600">
                                <AlertCircle className="w-3 h-3 inline mr-1" />
                                Depends on: {action.dependencies.join(", ")}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tracking" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    Progress Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-800">{Math.round(overallProgress)}%</div>
                      <div className="text-sm text-green-600">Overall Progress</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-800">
                        {currentPlan.actions.filter(a => a.completed).length}
                      </div>
                      <div className="text-sm text-green-600">Completed Actions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-800">{currentPlan.actions.length}</div>
                      <div className="text-sm text-green-600">Total Actions</div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-green-800 mb-3">Action Progress</h4>
                    <div className="space-y-3">
                      {currentPlan.actions.map((action) => (
                        <div key={action.id} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-green-800">{action.title}</span>
                            <span className="text-sm text-green-600">{action.progress}%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${action.progress}%` }}
                                ></div>
                              </div>
                            </div>
                            {!action.completed && (
                              <div className="flex gap-1">
                                {[25, 50, 75, 100].map(value => (
                                  <Button
                                    key={value}
                                    size="sm"
                                    variant="outline"
                                    className="h-6 w-8 text-xs"
                                    onClick={() => updateActionProgress(action.id, value)}
                                  >
                                    {value}%
                                  </Button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActionPlanningTool;