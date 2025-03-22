
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send, Bot, Sparkles, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AIQueryBoxProps {
  placeholder?: string;
  promptType?: 'thesis' | 'admin';
  className?: string;
}

const AIQueryBox: React.FC<AIQueryBoxProps> = ({
  placeholder = "Ask AI for assistance...",
  promptType = 'thesis',
  className,
}) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    setIsLoading(true);
    setResponse(null);

    try {
      // Simulate AI response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      let mockResponse = '';
      
      if (promptType === 'thesis') {
        if (query.toLowerCase().includes('blockchain') && query.toLowerCase().includes('education')) {
          mockResponse = "I found 3 similar studies in our archive related to blockchain in education:\n\n1. \"Blockchain-based Academic Records Verification System\" (2022) - This thesis explored using blockchain for secure academic credentials.\n\n2. \"Smart Contracts for Educational Assessment\" (2021) - Focused on automated grading systems using blockchain technology.\n\n3. \"Decentralized Learning Management Systems\" (2023) - Examined blockchain for tracking educational achievements.\n\nYour topic has potential but consider focusing on a specific aspect like credential verification, incentive systems, or privacy concerns to differentiate your research.";
        } else {
          mockResponse = "Based on my analysis, your thesis topic has potential. I didn't find exact matches in our archive, but there are some related studies you might want to review. Consider narrowing your focus to a specific aspect or application to make your research more unique. I recommend consulting with your technical adviser for more specific guidance.";
        }
      } else {
        mockResponse = "Based on the current database:\n\n- Total professors: 24\n- Total students: 156\n- Thesis groups: 48\n- Pending submissions: 16\n- Approved thesis: 32\n\nThere's been a 12% increase in thesis submissions compared to last semester.";
      }
      
      setResponse(mockResponse);
    } catch (error) {
      setResponse("Sorry, I encountered an error processing your request. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetQuery = () => {
    setQuery('');
    setResponse(null);
  };

  return (
    <Card className={cn("overflow-hidden shadow-sm", className)}>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <Bot size={18} className="text-primary" />
            </div>
            <h3 className="font-medium">
              {promptType === 'thesis' ? 'Thesis Topic Assistant' : 'Research Database Insights'}
            </h3>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <Textarea
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-h-[100px] resize-none border-gray-200 focus:border-primary focus:ring-primary/20"
            />
            
            <div className="flex items-center justify-between">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={resetQuery}
                className="text-xs"
              >
                <RefreshCw size={14} className="mr-1" />
                Reset
              </Button>
              
              <Button
                type="submit"
                size="sm"
                disabled={!query.trim() || isLoading}
                className="gap-1.5"
              >
                {isLoading ? (
                  <>
                    <span className="animate-pulse">Processing</span>
                    <Sparkles size={14} className="animate-pulse" />
                  </>
                ) : (
                  <>
                    <span>Ask AI</span>
                    <Send size={14} />
                  </>
                )}
              </Button>
            </div>
          </form>
          
          {response && (
            <div className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-sm">
              <div className="flex items-start space-x-2">
                <Sparkles size={16} className="text-primary mt-0.5" />
                <div className="space-y-2 flex-1">
                  <h4 className="font-medium text-sm">AI Response</h4>
                  <div className="whitespace-pre-wrap text-muted-foreground">
                    {response}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIQueryBox;
