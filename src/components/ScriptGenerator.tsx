import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import Button from './Button';

interface ScriptGeneratorProps {
  onGenerate: (script: string) => void;
}

const ScriptGenerator = ({ onGenerate }: ScriptGeneratorProps) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate script generation
    setTimeout(() => {
      const generatedScript = "Here's your generated script based on the video...";
      onGenerate(generatedScript);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="prompt" className="text-sm font-medium text-gray-700">
          Script Prompt
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[100px] p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          placeholder="E.g., Create a script similar to the original but focus on..."
        />
      </div>
      <Button
        onClick={handleGenerate}
        disabled={isGenerating || !prompt.trim()}
        className="w-full"
      >
        <Sparkles className="w-4 h-4 mr-2" />
        {isGenerating ? 'Generating Script...' : 'Generate Script'}
      </Button>
    </div>
  );
};

export default ScriptGenerator;