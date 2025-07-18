
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { Home, Network, BookOpen, Users, Palette, HeartHandshake } from "lucide-react";

interface BreadcrumbConfig {
  [key: string]: {
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
  };
}

const breadcrumbConfig: BreadcrumbConfig = {
  '/': { label: 'Home', icon: Home },
  '/ecosystem': { label: 'Ecosystem', icon: Network },
  '/empowerment-streams': { label: 'Empowerment Streams', icon: HeartHandshake },
  '/resources': { label: 'Resources', icon: BookOpen },
  '/community': { label: 'Community', icon: Users },
  '/studio': { label: 'Studio', icon: Palette },
};

interface BreadcrumbNavProps {
  customItems?: Array<{
    label: string;
    href?: string;
    isCurrentPage?: boolean;
  }>;
}

const BreadcrumbNav = ({ customItems }: BreadcrumbNavProps) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  // Build breadcrumb items from URL segments
  const breadcrumbItems = [
    { label: 'Home', href: '/', icon: Home }
  ];

  let currentPath = '';
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const config = breadcrumbConfig[currentPath];
    if (config) {
      breadcrumbItems.push({
        label: config.label,
        href: currentPath,
        icon: config.icon
      });
    }
  });

  // Add custom items if provided
  if (customItems) {
    breadcrumbItems.push(...customItems.map(item => ({
      label: item.label,
      href: item.href,
      isCurrentPage: item.isCurrentPage
    })));
  }

  // Don't show breadcrumb on home page unless there are custom items
  if (breadcrumbItems.length <= 1 && !customItems) {
    return null;
  }

  return (
    <div className="mb-6">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            const Icon = item.icon;

            return (
              <div key={item.href || item.label} className="flex items-center">
                <BreadcrumbItem>
                  {isLast || item.isCurrentPage ? (
                    <BreadcrumbPage className="flex items-center gap-2">
                      {Icon && <Icon className="w-4 h-4" />}
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={item.href || '#'} className="flex items-center gap-2">
                        {Icon && <Icon className="w-4 h-4" />}
                        {item.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </div>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbNav;
