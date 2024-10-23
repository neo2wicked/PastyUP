import { useState } from 'react';
import { Link } from 'lucide-react';
import Button from './Button';

interface VideoInputProps {
  onSubmit: (url: string) => void;
}

const VideoInput = ({ onSubmit }: VideoInputProps) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onSubmit(url);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="video-url" className="text-sm font-medium text-gray-700">
          YouTube Short URL
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Link className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="video-url"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            placeholder="https://youtube.com/shorts/..."
            required
          />
        </div>
      </div>
      <Button type="submit" className="w-full">
        Generate Script & Clips
      </Button>
    </form>
  );
};

export default VideoInput;