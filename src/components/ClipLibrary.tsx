import { useState } from 'react';
import { Video, GripVertical } from 'lucide-react';
import Button from './Button';

interface Clip {
  id: string;
  thumbnail: string;
  duration: string;
}

interface ClipLibraryProps {
  clips: Clip[];
  onOrderChange: (newOrder: Clip[]) => void;
}

const ClipLibrary = ({ clips, onOrderChange }: ClipLibraryProps) => {
  const [selectedClips, setSelectedClips] = useState<string[]>([]);

  const toggleClip = (clipId: string) => {
    setSelectedClips(prev =>
      prev.includes(clipId)
        ? prev.filter(id => id !== clipId)
        : [...prev, clipId]
    );
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {clips.map((clip) => (
          <div
            key={clip.id}
            className={`relative rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
              selectedClips.includes(clip.id) ? 'ring-2 ring-purple-500' : ''
            }`}
            onClick={() => toggleClip(clip.id)}
          >
            <div className="aspect-video bg-gray-100 relative">
              {clip.thumbnail ? (
                <img
                  src={clip.thumbnail}
                  alt={`Clip ${clip.id}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video className="w-8 h-8 text-gray-400" />
                </div>
              )}
              <div className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                {clip.duration}
              </div>
            </div>
            <div className="absolute top-2 left-2">
              <GripVertical className="w-4 h-4 text-white drop-shadow-lg" />
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="primary"
        disabled={selectedClips.length === 0}
        className="w-full"
      >
        Create Video with Selected Clips
      </Button>
    </div>
  );
};

export default ClipLibrary;