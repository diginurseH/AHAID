
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, Repeat, TrendingUp, Heart } from "lucide-react";

const SustainabilityModel = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-center text-green-800 flex items-center justify-center gap-2">
          <Repeat className="w-6 h-6" />
          Sustainability Model
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="revenue" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="revenue" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Revenue Streams
            </TabsTrigger>
            <TabsTrigger value="reinvestment" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Reinvestment
            </TabsTrigger>
            <TabsTrigger value="impact" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Social Impact
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="revenue" className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-3">Primary Revenue (Commerce Stream)</h4>
                <ul className="space-y-2 text-sm text-yellow-700">
                  <li>• Digital transformation consulting (60%)</li>
                  <li>• Custom web & mobile app development (25%)</li>
                  <li>• WhatsApp business integrations (10%)</li>
                  <li>• Digital marketing services (5%)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-3">Supporting Revenue</h4>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Grant funding for healthcare initiatives</li>
                  <li>• Partnership fees from tech collaborations</li>
                  <li>• Training program certifications</li>
                  <li>• Community platform subscriptions</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reinvestment" className="mt-6">
            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-3">Revenue Distribution Model</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-700">40%</div>
                    <div className="text-sm text-green-600">Care Stream</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-700">30%</div>
                    <div className="text-sm text-blue-600">Code Stream</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-700">20%</div>
                    <div className="text-sm text-amber-600">Community Stream</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-700">10%</div>
                    <div className="text-sm text-yellow-600">Operations</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <h4 className="font-semibold text-emerald-800 mb-3">Reinvestment Strategy</h4>
                <ul className="space-y-2 text-sm text-emerald-700">
                  <li>• Technology infrastructure and AI development</li>
                  <li>• Healthcare professional training programs</li>
                  <li>• Community platform enhancement</li>
                  <li>• Research and development initiatives</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="impact" className="mt-6">
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
              <h4 className="font-semibold text-rose-800 mb-3">Social Impact Multiplier</h4>
              <p className="text-sm text-rose-700 mb-4">
                Every $1 earned through Commerce stream generates $3-5 in social value through improved healthcare outcomes, 
                enhanced digital literacy, and strengthened community connections.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white/50 rounded p-3">
                  <div className="text-lg font-semibold text-rose-800">Healthcare Access</div>
                  <div className="text-sm text-rose-600">Improved outcomes for 10,000+ patients</div>
                </div>
                <div className="bg-white/50 rounded p-3">
                  <div className="text-lg font-semibold text-rose-800">Digital Empowerment</div>
                  <div className="text-sm text-rose-600">500+ professionals upskilled</div>
                </div>
                <div className="bg-white/50 rounded p-3">
                  <div className="text-lg font-semibold text-rose-800">Economic Growth</div>
                  <div className="text-sm text-rose-600">25+ SMEs digitally transformed</div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SustainabilityModel;
