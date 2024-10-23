import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';
import Button from './Button';

interface VideoUploaderProps {
  onUpload: (file: File) => void;
}

const VideoUploader = ({ onUpload }: VideoUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onUpload(acceptedFiles[0]);
    }
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi']
    },
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className={`w-full p-8 border-2 border-dashed rounded-xl transition-colors ${
        isDragActive ? 'border-purple-500 bg-purple-50' : 'border-gray-300'
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="p-4 bg-purple-100 rounded-full">
          <Upload className="w-8 h-8 text-purple-600" />
        </div>
        <div className="text-center">
          <p className="text-lg font-medium text-gray-900">
            {isDragActive ? 'Drop your video here' : 'Drag & drop your video here'}
          </p>
          <p className="mt-1 text-sm text-gray-500">or</p>
        </div>
        <Button type="button" variant="outline" size="sm">
          Browse files
        </Button>
        <p className="text-xs text-gray-500">
          Supports MP4, MOV, or AVI (max 500MB)
        </p>
      </div>
    </div>
  );
};

export default VideoUploader;