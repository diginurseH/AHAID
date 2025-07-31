
import AhaidLogo from "./AhaidLogo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { useI18n } from "@/hooks/useI18n";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const solutionsItems = [
  {
    title: "Ecosystem Overview",
    href: "/ecosystem",
    description: "Explore our comprehensive healthcare ecosystem and integrated solutions."
  },
  {
    title: "Empowerment Streams",
    href: "/empowerment-streams", 
    description: "Discover pathways for healthcare professional development and growth."
  }
];

const resourcesItems = [
  {
    title: "Resources Hub",
    href: "/resources",
    description: "Access digital tools, training materials, and developer documentation."
  },
  {
    title: "Studio",
    href: "/studio",
    description: "Creative tools and resources for healthcare innovation."
  },
  {
    title: "Community",
    href: "/community",
    description: "Connect with healthcare professionals and innovators across Africa."
  }
];

const Navbar = () => {
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-30 bg-white/90 border-b border-green-50 shadow-sm backdrop-blur-lg">
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-3 py-1 md:py-2">
        <Link to="/" className="flex items-center gap-3 group" aria-label="AHAID Home">
          <AhaidLogo size={38} />
          <span className="font-bold text-xl md:text-2xl text-green-900 tracking-tight group-hover:text-amber-700 transition">
            AHAID
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/#home"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-green-50 hover:text-amber-700 focus:bg-green-50 focus:text-amber-700 focus:outline-none"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/#about"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-green-50 hover:text-amber-700 focus:bg-green-50 focus:text-amber-700 focus:outline-none"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-background hover:bg-green-50 hover:text-amber-700 focus:bg-green-50 focus:text-amber-700">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] bg-white border border-green-100 shadow-lg">
                    {solutionsItems.map((item) => (
                      <NavigationMenuLink key={item.title} asChild>
                        <Link
                          to={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-amber-700 focus:bg-green-50 focus:text-amber-700"
                        >
                          <div className="text-sm font-medium leading-none text-green-900">
                            {item.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-background hover:bg-green-50 hover:text-amber-700 focus:bg-green-50 focus:text-amber-700">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] bg-white border border-green-100 shadow-lg">
                    {resourcesItems.map((item) => (
                      <NavigationMenuLink key={item.title} asChild>
                        <Link
                          to={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-amber-700 focus:bg-green-50 focus:text-amber-700"
                        >
                          <div className="text-sm font-medium leading-none text-green-900">
                            {item.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <LanguageSelector />
          <Button
            asChild
            size="sm"
            className="ml-3 bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-6 w-6 text-green-900" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-white">
              <DrawerHeader className="text-left">
                <div className="flex items-center justify-between">
                  <DrawerTitle className="text-green-900 text-lg font-bold">
                    Navigation
                  </DrawerTitle>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="sm" className="p-2">
                      <X className="h-5 w-5" />
                    </Button>
                  </DrawerClose>
                </div>
              </DrawerHeader>
              <div className="px-4 pb-8">
                <nav className="space-y-2">
                  <Link
                    to="/#home"
                    className="block px-3 py-2 rounded-md text-base font-medium text-green-900 hover:text-amber-700 hover:bg-green-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>

                  <Link
                    to="/#about"
                    className="block px-3 py-2 rounded-md text-base font-medium text-green-900 hover:text-amber-700 hover:bg-green-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  
                  <Collapsible open={solutionsOpen} onOpenChange={setSolutionsOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-green-800 uppercase tracking-wider hover:text-amber-700 transition-colors">
                      Solutions
                      <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      {solutionsItems.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="block px-6 py-2 rounded-md text-base font-medium text-green-900 hover:text-amber-700 hover:bg-green-50 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible open={resourcesOpen} onOpenChange={setResourcesOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-green-800 uppercase tracking-wider hover:text-amber-700 transition-colors">
                      Resources
                      <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      {resourcesItems.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="block px-6 py-2 rounded-md text-base font-medium text-green-900 hover:text-amber-700 hover:bg-green-50 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>

                  <div className="pt-4">
                    <Button
                      asChild
                      className="w-full bg-amber-700 hover:bg-amber-800 text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <a href="#contact">Get in Touch</a>
                    </Button>
                  </div>
                </nav>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
