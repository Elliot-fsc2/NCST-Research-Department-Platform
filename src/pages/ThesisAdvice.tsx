
import React, { useState } from 'react';
import { BookOpen, BrainCircuit, Send, ThumbsUp } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import TransitionLayout from '@/components/shared/TransitionLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Mock suggested research topics
const suggestedTopics = [
  {
    id: 1,
    title: "AI-Driven Early Disease Detection Systems",
    department: "Computer Science",
    difficulty: "High",
    relevance: "High",
    description: "Develop machine learning models that can detect early signs of diseases from medical images or patient data.",
  },
  {
    id: 2,
    title: "Blockchain for Academic Credential Verification",
    department: "Information Technology",
    difficulty: "Medium",
    relevance: "High",
    description: "Create a blockchain-based system to verify and authenticate academic credentials, reducing fraud and streamlining verification processes.",
  },
  {
    id: 3,
    title: "Sustainable Urban Farming Technologies",
    department: "Agriculture & Engineering",
    difficulty: "Medium",
    relevance: "High",
    description: "Research and develop technologies that enable efficient urban farming with minimal resources and environmental impact.",
  },
  {
    id: 4,
    title: "Mental Health Support Chatbot",
    department: "Psychology & Computer Science",
    difficulty: "Medium",
    relevance: "High",
    description: "Design an AI chatbot that provides preliminary mental health support and resources for university students.",
  },
];

// Mock previously asked questions
const previousQuestions = [
  {
    id: 1,
    query: "Is 'Machine Learning for Crop Disease Detection' a viable thesis topic?",
    response: "Yes, 'Machine Learning for Crop Disease Detection' is a highly viable thesis topic. It combines computer vision and agricultural science, addressing a real-world problem. Our library has 3 similar studies from 2019-2022, but you could focus on local crop varieties or improved algorithms. Consider consulting Prof. Rodriguez who specializes in agricultural technology.",
    timestamp: "2 days ago",
  },
  {
    id: 2,
    query: "What are some research gaps in renewable energy studies?",
    response: "Based on our library archive, some research gaps in renewable energy studies include: 1) Integration of multiple renewable sources in microgrids specific to island settings, 2) Cost-effective energy storage solutions for rural communities, 3) Social acceptance factors in renewable energy adoption in conservative communities, and 4) Optimizing renewable energy systems for specific industries like agriculture or manufacturing in tropical climates.",
    timestamp: "1 week ago",
  },
];

const ThesisAdvice = () => {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('ask');
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentResponse, setCurrentResponse] = useState<{query: string, response: string} | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsProcessing(true);
      
      // Simulate AI processing
      setTimeout(() => {
        setCurrentResponse({
          query: query,
          response: "Based on my analysis of the library archives, your topic on '" + query + "' has potential. There are 3 similar studies in our database from the last 5 years, but your approach could provide new insights, especially if you focus on [specific aspect]. Consider narrowing your scope to ensure feasibility within your timeline. I recommend consulting with Prof. Johnson who has expertise in this area."
        });
        setIsProcessing(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 pt-20 md:ml-[70px] lg:ml-64">
          <TransitionLayout>
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                  <h1 className="text-3xl font-bold">Thesis Advice</h1>
                  <p className="text-gray-500 mt-2">
                    Get AI-powered insights and feedback on your thesis ideas
                  </p>
                </div>
              </div>
              
              <Tabs defaultValue="ask" value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList className="grid grid-cols-3 max-w-md">
                  <TabsTrigger value="ask">Ask AI</TabsTrigger>
                  <TabsTrigger value="suggestions">Suggested Topics</TabsTrigger>
                  <TabsTrigger value="history">Previous Questions</TabsTrigger>
                </TabsList>
                
                <TabsContent value="ask" className="space-y-6 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BrainCircuit size={18} />
                        Ask the Research AI
                      </CardTitle>
                      <CardDescription>
                        Describe your thesis idea or ask for feedback on a topic
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit}>
                        <Textarea 
                          placeholder="e.g. Is 'Machine Learning for Crop Disease Detection' a viable thesis topic? Or: What are some research gaps in renewable energy studies?"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          rows={4}
                          className="mb-4"
                        />
                        <div className="flex justify-end">
                          <Button 
                            type="submit" 
                            disabled={!query.trim() || isProcessing}
                            className="flex items-center gap-2"
                          >
                            {isProcessing ? (
                              <>
                                <div className="animate-spin w-4 h-4 border-2 border-transparent border-t-current rounded-full" />
                                Processing...
                              </>
                            ) : (
                              <>
                                <Send size={16} />
                                Get Advice
                              </>
                            )}
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                  
                  {currentResponse && (
                    <Card className="border-t-4 border-t-primary">
                      <CardHeader>
                        <CardTitle className="text-base">Your Query</CardTitle>
                        <CardDescription className="text-gray-700 dark:text-gray-300 font-medium">
                          {currentResponse.query}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <h3 className="text-base font-medium mb-2">AI Response</h3>
                        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                          <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
                            {currentResponse.response}
                          </p>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between gap-4">
                        <div className="text-xs text-gray-500">
                          Based on analysis of the university's research archive
                        </div>
                        <Button variant="outline" size="sm" className="flex items-center gap-1.5">
                          <ThumbsUp size={14} />
                          Helpful
                        </Button>
                      </CardFooter>
                    </Card>
                  )}
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Tips for Effective Queries</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                          <span>Be specific about your research area and questions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                          <span>Ask about feasibility, scope, or research gaps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                          <span>Inquire about similar studies in the university's archive</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="bg-primary/10 text-primary rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                          <span>Ask for recommendations on faculty advisers with relevant expertise</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="suggestions" className="space-y-6 mt-6">
                  <h2 className="text-xl font-semibold mb-4">Trending Research Topics</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {suggestedTopics.map(topic => (
                      <Card key={topic.id}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <CardTitle className="text-lg">{topic.title}</CardTitle>
                          </div>
                          <div className="flex gap-2">
                            <Badge variant="outline">{topic.department}</Badge>
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400">
                              Difficulty: {topic.difficulty}
                            </Badge>
                            <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                              Relevance: {topic.relevance}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-4">
                          <p className="text-gray-700 dark:text-gray-300 text-sm">
                            {topic.description}
                          </p>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                          <Button variant="outline" size="sm">Explore Topic</Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen size={18} />
                        How Topics are Suggested
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        These research topics are suggested based on analysis of current academic trends, gaps in the university's research archive, and feedback from faculty advisers. Topics are rated for difficulty (implementation complexity) and relevance (academic and real-world impact).
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="history" className="space-y-6 mt-6">
                  <h2 className="text-xl font-semibold mb-4">Your Previous Questions</h2>
                  
                  {previousQuestions.length > 0 ? (
                    <div className="space-y-6">
                      {previousQuestions.map(item => (
                        <Card key={item.id}>
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-base font-medium">
                                {item.query}
                              </CardTitle>
                              <span className="text-xs text-gray-500">{item.timestamp}</span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                              {item.response}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 text-center">
                      <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BrainCircuit size={24} className="text-gray-500" />
                      </div>
                      <h3 className="text-lg font-medium mb-2">No previous questions</h3>
                      <p className="text-gray-500 max-w-md mx-auto">
                        You haven't asked any questions yet. Head over to the "Ask AI" tab to get started.
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </TransitionLayout>
        </main>
      </div>
    </div>
  );
};

export default ThesisAdvice;
