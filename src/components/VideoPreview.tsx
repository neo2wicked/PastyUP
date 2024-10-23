import { Video, Loader2 } from 'lucide-react';
import Button from './Button';

interface VideoPreviewProps {
  videoUrl: string;
  isProcessing?: boolean;
  onGenerate: () => void;
}

const VideoPreview = ({ videoUrl, isProcessing = false, onGenerate }: VideoPreviewProps) => {
  return (
    <div className="space-y-4">
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
        {videoUrl ? (
          <video
            src={videoUrl}
            className="w-full h-full object-cover"
            controls
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Video className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>
      <Button
        onClick={onGenerate}
        disabled={isProcessing}
        className="w-full"
      >
        {isProcessing ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Processing...
          </>
        ) : (
          'Generate AI Video'
        )}
      </Button>
    </div>
  );
};

export default VideoPreview;