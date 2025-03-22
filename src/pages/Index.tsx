
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, ShieldCheck, Users, Sparkles, Check } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className={`md:w-1/2 space-y-6 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div>
                <div className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-400 text-xs font-medium mb-4">
                  NCST Research Department
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Empowering Research with <span className="text-primary">Innovation</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Streamline thesis management with our comprehensive platform. Connect students, professors, and administrators in one unified research ecosystem.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <Button 
                  size="lg"
                  className="gap-2 bg-primary"
                  onClick={() => navigate('/login')}
                >
                  Get Started
                  <ArrowRight size={16} />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/about')}
                >
                  Learn More
                </Button>
              </div>
              
              <div className="pt-8 flex items-center gap-8">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-700 animate-fade-in"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Trusted by <span className="font-medium">500+</span> students and professors
                </p>
              </div>
            </div>
            
            {/* Right Image/Illustration */}
            <div className={`md:w-1/2 transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="relative backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-xl">
                  <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <div className="text-center p-6">
                      <BookOpen className="h-12 w-12 mx-auto text-primary mb-4" />
                      <h3 className="text-lg font-medium mb-2">NCST Research Dashboard</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Interactive thesis management platform</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                        <Check size={18} />
                      </div>
                      <div>
                        <span className="text-sm font-medium">48</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Thesis Groups</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <Users size={18} />
                      </div>
                      <div>
                        <span className="text-sm font-medium">156</span>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Students</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features for Research Excellence</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Our comprehensive platform streamlines the entire research process from thesis group formation to final submission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                title: "Thesis Group Management",
                description: "Easily create, manage, and track thesis groups with automated form collection and approval workflows."
              },
              {
                icon: <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
                title: "Personnel Assignment",
                description: "Assign technical advisers, statisticians, and language critics to thesis groups effortlessly."
              },
              {
                icon: <Sparkles className="h-8 w-8 text-amber-600 dark:text-amber-400" />,
                title: "AI-Powered Insights",
                description: "Get intelligent suggestions and validate thesis topics against existing research in the library."
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-green-600 dark:text-green-400" />,
                title: "Secure Authentication",
                description: "Google Authentication ensures only university email holders can access the system securely."
              },
              {
                icon: <Check className="h-8 w-8 text-red-600 dark:text-red-400" />,
                title: "Automated Fee Computation",
                description: "Calculate and track thesis fees automatically based on group size and department policies."
              },
              {
                icon: <ArrowRight className="h-8 w-8 text-gray-600 dark:text-gray-400" />,
                title: "Comprehensive Reporting",
                description: "Generate detailed reports for administrators, professors, and treasury department."
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 sm:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to streamline your research department?</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Join universities that have transformed their research process with our comprehensive management system.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      size="lg"
                      className="bg-primary"
                      onClick={() => navigate('/login')}
                    >
                      Get Started
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => navigate('/contact')}
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center animate-float">
                    <BookOpen className="h-20 w-20 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 px-4 md:px-8 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                NCST Research
              </span>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Empowering academic excellence through innovation
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                About
              </a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                Features
              </a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
                Help
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} NCST Research Department. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
