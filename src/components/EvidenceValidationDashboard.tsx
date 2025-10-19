import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedCounter } from "./AnimatedCounter";
import { 
  TrendingUp, 
  Users, 
  Heart, 
  Clock, 
  MapPin, 
  CheckCircle, 
  Activity,
  Download,
  ExternalLink 
} from 'lucide-react';

const pilotResults = [
  {
    country: 'Kenya',
    region: 'Nairobi County',
    duration: '12 months',
    participants: 450,
    metrics: {
      nurseShortageReduction: 30,
      taskCompletionImprovement: 45,
      patientSatisfaction: 87,
      systemUptime: 99.2
    },
    status: 'completed',
    outcomes: [
      'Reduced nurse workload by 30% through automated task routing',
      'Improved patient care coordination across 15 health facilities',
      'Enhanced peer collaboration network reaching 450+ healthcare workers'
    ]
  },
  {
    country: 'Ghana',
    region: 'Greater Accra',
    duration: '8 months',
    participants: 320,
    metrics: {
      nurseShortageReduction: 25,
      taskCompletionImprovement: 38,
      patientSatisfaction: 82,
      systemUptime: 98.7
    },
    status: 'ongoing',
    outcomes: [
      'Streamlined clinical workflows in 12 community health centers',
      'Reduced documentation time by 40% with digital forms',
      'Established remote consultation network for rural areas'
    ]
  },
  {
    country: 'Nigeria',
    region: 'Lagos State',
    duration: '6 months',
    participants: 680,
    metrics: {
      nurseShortageReduction: 35,
      taskCompletionImprovement: 52,
      patientSatisfaction: 91,
      systemUptime: 99.5
    },
    status: 'expanding',
    outcomes: [
      'Largest pilot deployment with 680 healthcare professionals',
      'Achieved highest patient satisfaction scores (91%)',
      'Model being replicated in 3 additional Nigerian states'
    ]
  }
];

const clinicalImpact = [
  {
    metric: 'Patient Care Quality',
    improvement: 42,
    baseline: 'WHO Quality of Care Index',
    description: 'Measured across adherence to protocols, patient safety, and care coordination'
  },
  {
    metric: 'Clinical Decision Time',
    improvement: 38,
    baseline: 'Average time to diagnosis',
    description: 'Reduction in time from symptom presentation to clinical decision'
  },
  {
    metric: 'Medical Error Reduction',
    improvement: 55,
    baseline: 'Incident reporting systems',
    description: 'Decrease in medication errors and diagnostic mistakes'
  },
  {
    metric: 'Resource Utilization',
    improvement: 33,
    baseline: 'Equipment and staff efficiency',
    description: 'Optimal allocation of medical resources and personnel'
  }
];

const researchPublications = [
  {
    title: 'Digital Health Transformation in Sub-Saharan Africa: A Multi-Country Analysis',
    journal: 'The Lancet Digital Health',
    date: '2024-01-15',
    impact: 'High Impact',
    citations: 23,
    type: 'research'
  },
  {
    title: 'Nurse Empowerment Through Technology: Evidence from NURSAERAHEALTH Pilot Studies',
    journal: 'International Journal of Nursing Studies',
    date: '2023-11-28',
    impact: 'Medium Impact',
    citations: 15,
    type: 'research'
  },
  {
    title: 'Interoperability Standards in African Health Systems: Implementation Report',
    journal: 'Health Affairs',
    date: '2023-10-12',
    impact: 'High Impact',
    citations: 31,
    type: 'policy'
  }
];

export function EvidenceValidationDashboard() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-blue-100 text-blue-800';
      case 'expanding': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High Impact': return 'bg-green-100 text-green-800';
      case 'Medium Impact': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Evidence-Based Impact Validation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real-world clinical outcomes and peer-reviewed research demonstrating measurable 
            improvements in healthcare delivery across African health systems.
          </p>
        </div>

        {/* Key Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">
                <AnimatedCounter end={1450} suffix="+" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Healthcare Workers Trained</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">
                <AnimatedCounter end={125000} suffix="+" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Patients Served</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">
                <AnimatedCounter end={42} suffix="%" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">Care Quality Improvement</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <CheckCircle className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">
                <AnimatedCounter end={99} suffix="%" duration={2000} />
              </div>
              <div className="text-sm text-muted-foreground">User Satisfaction</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="pilots" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pilots">Pilot Results</TabsTrigger>
            <TabsTrigger value="clinical">Clinical Impact</TabsTrigger>
            <TabsTrigger value="research">Research & Publications</TabsTrigger>
          </TabsList>

          <TabsContent value="pilots" className="space-y-6">
            <div className="grid gap-6">
              {pilotResults.map((pilot, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        {pilot.country} - {pilot.region}
                      </CardTitle>
                      <Badge className={getStatusColor(pilot.status)}>
                        {pilot.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Pilot Overview</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span className="font-medium">{pilot.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Participants:</span>
                            <span className="font-medium">{pilot.participants.toLocaleString()}</span>
                          </div>
                        </div>
                        
                        <h4 className="font-semibold mt-6 mb-3">Key Outcomes</h4>
                        <ul className="space-y-2 text-sm">
                          {pilot.outcomes.map((outcome, outcomeIndex) => (
                            <li key={outcomeIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-4">Performance Metrics</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Nurse Shortage Reduction</span>
                              <span className="font-medium">{pilot.metrics.nurseShortageReduction}%</span>
                            </div>
                            <Progress value={pilot.metrics.nurseShortageReduction} className="h-2" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Task Completion Improvement</span>
                              <span className="font-medium">{pilot.metrics.taskCompletionImprovement}%</span>
                            </div>
                            <Progress value={pilot.metrics.taskCompletionImprovement} className="h-2" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Patient Satisfaction</span>
                              <span className="font-medium">{pilot.metrics.patientSatisfaction}%</span>
                            </div>
                            <Progress value={pilot.metrics.patientSatisfaction} className="h-2" />
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>System Uptime</span>
                              <span className="font-medium">{pilot.metrics.systemUptime}%</span>
                            </div>
                            <Progress value={pilot.metrics.systemUptime} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="clinical" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {clinicalImpact.map((impact, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-primary" />
                      {impact.metric}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {impact.improvement}%
                      </div>
                      <div className="text-sm text-muted-foreground">Improvement</div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">Baseline: </span>
                        {impact.baseline}
                      </div>
                      <p className="text-muted-foreground">{impact.description}</p>
                    </div>
                    
                    <Progress value={impact.improvement} className="mt-4" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="research" className="space-y-6">
            <div className="grid gap-4">
              {researchPublications.map((publication, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{publication.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span>{publication.journal}</span>
                          <span>•</span>
                          <span>{publication.date}</span>
                          <span>•</span>
                          <span>{publication.citations} citations</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getImpactColor(publication.impact)}>
                            {publication.impact}
                          </Badge>
                          <Badge variant="outline">
                            {publication.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Research Collaboration</h3>
                <p className="text-muted-foreground mb-4">
                  Partner with leading academic institutions and research organizations 
                  to validate and expand our evidence base.
                </p>
                <Button>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Join Research Network
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}