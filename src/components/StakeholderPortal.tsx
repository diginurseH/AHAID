import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Building2, Code, Heart, ArrowRight, Download, ExternalLink } from 'lucide-react';

interface StakeholderRole {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  primaryActions: Array<{
    label: string;
    href: string;
    icon: React.ReactNode;
    type: 'primary' | 'secondary';
  }>;
  metrics: Array<{
    label: string;
    value: string;
    trend: string;
  }>;
  resources: Array<{
    title: string;
    description: string;
    link: string;
    type: 'doc' | 'tool' | 'demo';
  }>;
}

const stakeholderRoles: StakeholderRole[] = [
  {
    id: 'healthcare',
    title: 'Healthcare Workers',
    icon: <Heart className="w-6 h-6" />,
    description: 'Access Nursaera platform, clinical tools, and peer collaboration networks',
    primaryActions: [
      { label: 'Access Nursaera Platform', href: '/nursaera', icon: <ArrowRight className="w-4 h-4" />, type: 'primary' },
      { label: 'Join Community', href: '/community', icon: <Users className="w-4 h-4" />, type: 'secondary' },
      { label: 'Clinical Resources', href: '/resources', icon: <Download className="w-4 h-4" />, type: 'secondary' }
    ],
    metrics: [
      { label: 'Active Users', value: '2,500+', trend: '+15% this month' },
      { label: 'Task Efficiency', value: '30%', trend: 'improvement' },
      { label: 'Countries', value: '15', trend: 'actively using' }
    ],
    resources: [
      { title: 'Nursaera Quick Start Guide', description: 'Get started with task management and peer collaboration', link: '/docs/nursaera', type: 'doc' },
      { title: 'Clinical Decision Tools', description: 'Evidence-based diagnostic and treatment protocols', link: '/tools/clinical', type: 'tool' },
      { title: 'Live Demo Session', description: 'Join weekly demo sessions with our team', link: '/demo/healthcare', type: 'demo' }
    ]
  },
  {
    id: 'government',
    title: 'Government & Policy',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Policy frameworks, implementation roadmaps, and compliance tracking',
    primaryActions: [
      { label: 'Policy Dashboard', href: '/government', icon: <ArrowRight className="w-4 h-4" />, type: 'primary' },
      { label: 'Implementation Guide', href: '/docs/implementation', icon: <Download className="w-4 h-4" />, type: 'secondary' },
      { label: 'ROI Calculator', href: '/tools/roi', icon: <ExternalLink className="w-4 h-4" />, type: 'secondary' }
    ],
    metrics: [
      { label: 'Partner Countries', value: '8', trend: 'signed MOUs' },
      { label: 'Cost Savings', value: '$2.1M', trend: 'estimated annually' },
      { label: 'Compliance Rate', value: '98%', trend: 'HL7/FHIR standards' }
    ],
    resources: [
      { title: 'Digital Health Policy Framework', description: 'Comprehensive policy recommendations for digital health adoption', link: '/docs/policy', type: 'doc' },
      { title: 'Compliance Tracker', description: 'Monitor adherence to international health data standards', link: '/tools/compliance', type: 'tool' },
      { title: 'Government Success Stories', description: 'Case studies from early adopter countries', link: '/demo/government', type: 'demo' }
    ]
  },
  {
    id: 'developers',
    title: 'Developers & Tech Partners',
    icon: <Code className="w-6 h-6" />,
    description: 'APIs, SDKs, technical documentation, and developer community',
    primaryActions: [
      { label: 'Developer Portal', href: '/developers', icon: <ArrowRight className="w-4 h-4" />, type: 'primary' },
      { label: 'API Documentation', href: '/docs/api', icon: <Download className="w-4 h-4" />, type: 'secondary' },
      { label: 'Integration Sandbox', href: '/sandbox', icon: <ExternalLink className="w-4 h-4" />, type: 'secondary' }
    ],
    metrics: [
      { label: 'API Calls', value: '1.2M+', trend: 'monthly' },
      { label: 'SDK Downloads', value: '5,400', trend: '+45% growth' },
      { label: 'Integration Partners', value: '120+', trend: 'active developers' }
    ],
    resources: [
      { title: 'API Reference Guide', description: 'Complete documentation for all Nursaera Health Tech ecosystem APIs', link: '/docs/api-reference', type: 'doc' },
      { title: 'SDK & Libraries', description: 'Ready-to-use SDKs for popular programming languages', link: '/tools/sdk', type: 'tool' },
      { title: 'Integration Examples', description: 'Live examples and code samples for common use cases', link: '/demo/integration', type: 'demo' }
    ]
  },
  {
    id: 'investors',
    title: 'Investors & Partners',
    icon: <Users className="w-6 h-6" />,
    description: 'Impact metrics, financial models, and partnership opportunities',
    primaryActions: [
      { label: 'Impact Dashboard', href: '/impact', icon: <ArrowRight className="w-4 h-4" />, type: 'primary' },
      { label: 'Partnership Inquiry', href: '/partner', icon: <Download className="w-4 h-4" />, type: 'secondary' },
      { label: 'Due Diligence Pack', href: '/investors', icon: <ExternalLink className="w-4 h-4" />, type: 'secondary' }
    ],
    metrics: [
      { label: 'Social Impact', value: '450K+', trend: 'lives improved' },
      { label: 'Market Reach', value: '$50M', trend: 'addressable market' },
      { label: 'ROI Potential', value: '300%', trend: '5-year projection' }
    ],
    resources: [
      { title: 'Impact Report 2024', description: 'Comprehensive analysis of social and economic impact', link: '/reports/impact', type: 'doc' },
      { title: 'Financial Model', description: 'Detailed revenue projections and cost structure', link: '/tools/financial', type: 'tool' },
      { title: 'Partnership Showcase', description: 'Success stories from current strategic partners', link: '/demo/partners', type: 'demo' }
    ]
  }
];

export function StakeholderPortal() {
  const [activeRole, setActiveRole] = useState('healthcare');

  const currentRole = stakeholderRoles.find(role => role.id === activeRole);

  const getActionVariant = (type: 'primary' | 'secondary') => 
    type === 'primary' ? 'default' : 'outline';

  const getResourceIcon = (type: 'doc' | 'tool' | 'demo') => {
    switch (type) {
      case 'doc': return <Download className="w-4 h-4" />;
      case 'tool': return <ExternalLink className="w-4 h-4" />;
      case 'demo': return <ArrowRight className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Your Pathway to Digital Health Innovation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose your role to access personalized resources, tools, and pathways tailored to your specific needs in the Nursaera Health Tech ecosystem.
          </p>
        </div>

        <Tabs value={activeRole} onValueChange={setActiveRole} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {stakeholderRoles.map((role) => (
              <TabsTrigger key={role.id} value={role.id} className="flex items-center gap-2">
                {role.icon}
                <span className="hidden sm:inline">{role.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {stakeholderRoles.map((role) => (
            <TabsContent key={role.id} value={role.id} className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Role Overview */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {role.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{role.title}</CardTitle>
                        <p className="text-muted-foreground mt-1">{role.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3">Quick Actions</h4>
                        <div className="flex flex-wrap gap-3">
                          {role.primaryActions.map((action, index) => (
                            <Button
                              key={index}
                              variant={getActionVariant(action.type)}
                              size="sm"
                              className="flex items-center gap-2"
                            >
                              {action.icon}
                              {action.label}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Key Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {role.metrics.map((metric, index) => (
                      <div key={index} className="border-b border-border/50 pb-3 last:border-0">
                        <div className="flex justify-between items-start">
                          <span className="text-sm text-muted-foreground">{metric.label}</span>
                          <Badge variant="secondary" className="text-xs">
                            {metric.trend}
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold text-primary mt-1">
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Resources & Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {role.resources.map((resource, index) => (
                      <div
                        key={index}
                        className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-medium group-hover:text-primary transition-colors">
                            {resource.title}
                          </h5>
                          {getResourceIcon(resource.type)}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {resource.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}