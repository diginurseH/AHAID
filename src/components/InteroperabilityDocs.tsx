import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, ExternalLink, Download, Code, Shield, Globe } from 'lucide-react';

const standards = [
  {
    name: 'HL7 FHIR R4',
    status: 'compliant',
    description: 'Fast Healthcare Interoperability Resources standard for health data exchange',
    coverage: '95%',
    lastUpdated: '2024-01-15'
  },
  {
    name: 'openHIE',
    status: 'certified',
    description: 'Open Health Information Exchange architecture and standards',
    coverage: '100%',
    lastUpdated: '2024-01-10'
  },
  {
    name: 'IHE Profiles',
    status: 'partial',
    description: 'Integrating the Healthcare Enterprise technical frameworks',
    coverage: '78%',
    lastUpdated: '2024-01-08'
  },
  {
    name: 'WHO Classifications',
    status: 'compliant',
    description: 'ICD-11, SNOMED CT, and other WHO-endorsed classifications',
    coverage: '92%',
    lastUpdated: '2024-01-12'
  }
];

const apiEndpoints = [
  {
    category: 'Patient Management',
    endpoints: [
      { method: 'GET', path: '/api/v1/patients', description: 'Retrieve patient records with FHIR compliance' },
      { method: 'POST', path: '/api/v1/patients', description: 'Create new patient record' },
      { method: 'PUT', path: '/api/v1/patients/{id}', description: 'Update patient information' }
    ]
  },
  {
    category: 'Clinical Data',
    endpoints: [
      { method: 'GET', path: '/api/v1/observations', description: 'Fetch clinical observations and vitals' },
      { method: 'POST', path: '/api/v1/encounters', description: 'Record clinical encounters' },
      { method: 'GET', path: '/api/v1/diagnostics', description: 'Access diagnostic reports and results' }
    ]
  },
  {
    category: 'Interoperability',
    endpoints: [
      { method: 'POST', path: '/api/v1/fhir/sync', description: 'Synchronize data with external FHIR servers' },
      { method: 'GET', path: '/api/v1/capability', description: 'Get system capabilities and supported profiles' },
      { method: 'POST', path: '/api/v1/validate', description: 'Validate FHIR resources against profiles' }
    ]
  }
];

const certifications = [
  {
    title: 'USAID Digital Health Compliance',
    issuer: 'USAID Global Health Supply Chain Program',
    validity: 'Valid until Dec 2024',
    scope: 'Digital health platform standards and data governance',
    icon: <Shield className="w-5 h-5" />
  },
  {
    title: 'African Union Health Data Standards',
    issuer: 'AU Commission - Health, Humanitarian Affairs & Social Development',
    validity: 'Valid until Mar 2025',
    scope: 'Cross-border health data exchange and privacy compliance',
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: 'IHE Connectathon Certification',
    issuer: 'Integrating the Healthcare Enterprise',
    validity: 'Valid until Jun 2024',
    scope: 'Patient identification and clinical document sharing',
    icon: <CheckCircle className="w-5 h-5" />
  }
];

export function InteroperabilityDocs() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'compliant': return 'bg-green-100 text-green-800 border-green-200';
      case 'certified': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'partial': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-800';
      case 'POST': return 'bg-blue-100 text-blue-800';
      case 'PUT': return 'bg-orange-100 text-orange-800';
      case 'DELETE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Technical Documentation & Standards
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive documentation for seamless integration with AHAID ecosystem modules, 
            ensuring compliance with international health data standards.
          </p>
        </div>

        <Tabs defaultValue="standards" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="standards">Standards</TabsTrigger>
            <TabsTrigger value="apis">API Reference</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
          </TabsList>

          <TabsContent value="standards" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {standards.map((standard, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{standard.name}</CardTitle>
                      <Badge className={getStatusColor(standard.status)}>
                        {standard.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{standard.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Coverage:</span>
                        <span className="font-medium">{standard.coverage}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Last Updated:</span>
                        <span>{standard.lastUpdated}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Documentation
                      </Button>
                      <Button size="sm" variant="outline">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Specification
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="apis" className="space-y-6">
            {apiEndpoints.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.endpoints.map((endpoint, endpointIndex) => (
                      <div key={endpointIndex} className="p-4 border border-border rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className={getMethodColor(endpoint.method)}>
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm bg-muted px-2 py-1 rounded">
                            {endpoint.path}
                          </code>
                        </div>
                        <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Try in Sandbox
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download Spec
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                        <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground mb-3">{cert.scope}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{cert.validity}</Badge>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Certificate
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="implementation" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Start Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      <span>Register for API access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      <span>Download SDK for your platform</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</div>
                      <span>Test integration in sandbox</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</div>
                      <span>Deploy to production</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Start Integration
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Implementation Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    SDK Downloads (Python, Node.js, Java)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Code className="w-4 h-4 mr-2" />
                    Code Examples & Tutorials
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Interactive API Explorer
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="w-4 h-4 mr-2" />
                    Security & Authentication Guide
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}