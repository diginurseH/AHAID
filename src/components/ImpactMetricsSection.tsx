import { AnimatedCounter } from './AnimatedCounter';
import { HeartPulse, Users, Globe, Zap } from 'lucide-react';

const metrics = [
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    value: 2500,
    suffix: '+',
    label: 'Healthcare Professionals',
    subtext: 'Active community members'
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    value: 15,
    suffix: '',
    label: 'African Countries',
    subtext: 'Represented in our network'
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-red-500" />,
    value: 450,
    suffix: '+',
    label: 'Active Discussions',
    subtext: 'Community conversations'
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-600" />,
    value: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
    subtext: 'User experience rating'
  }
];

export function ImpactMetricsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Making Real Impact Across Africa
          </h2>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            See how Nursaera Health Tech is transforming healthcare through technology and community
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">
                <AnimatedCounter 
                  end={metric.value} 
                  suffix={metric.suffix}
                  duration={2000}
                />
              </div>
              <div className="text-sm font-semibold text-green-700 mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-gray-500">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}