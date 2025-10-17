'use client';

import { useState } from 'react';
import { Download, FileText, File } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface BrochureData {
  pdf?: string;
  doc?: string;
  title?: string;
}

interface DownloadBrochureProps {
  brochure?: BrochureData;
  propertyTitle?: string;
  className?: string;
}

export function DownloadBrochure({ brochure, propertyTitle, className = "" }: DownloadBrochureProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  if (!brochure || (!brochure.pdf && !brochure.doc)) {
    return null;
  }

  const handleDownload = async (url: string, filename: string) => {
    setIsDownloading(true);
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(url, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  const getFileName = (url: string, type: 'pdf' | 'doc') => {
    const baseName = propertyTitle || 'brochure';
    return `${baseName}_${type.toUpperCase()}.${type === 'pdf' ? 'pdf' : 'docx'}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className={`gradient-gold hover:opacity-90 text-white font-semibold shadow-gold transition-premium ${className}`}
          disabled={isDownloading}
        >
          <Download className="h-4 w-4 mr-2" />
          {isDownloading ? 'Downloading...' : 'Download Brochure'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white shadow-lg rounded-md border border-brand-gray-100">
        {brochure.pdf && (
          <DropdownMenuItem 
            onClick={() => handleDownload(brochure.pdf!, getFileName(brochure.pdf!, 'pdf'))}
            className="flex items-center space-x-3 cursor-pointer hover:bg-brand-cream text-brand-text-primary p-3"
          >
            <FileText className="h-5 w-5 text-red-600" />
            <div className="flex flex-col">
              <span className="font-medium">PDF Brochure</span>
              <span className="text-xs text-brand-text-secondary">Best for viewing</span>
            </div>
          </DropdownMenuItem>
        )}
        {brochure.doc && (
          <DropdownMenuItem 
            onClick={() => handleDownload(brochure.doc!, getFileName(brochure.doc!, 'doc'))}
            className="flex items-center space-x-3 cursor-pointer hover:bg-brand-cream text-brand-text-primary p-3"
          >
            <File className="h-5 w-5 text-blue-600" />
            <div className="flex flex-col">
              <span className="font-medium">DOC Brochure</span>
              <span className="text-xs text-brand-text-secondary">Editable format</span>
            </div>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Simple download button variant
export function DownloadBrochureSimple({ brochure, propertyTitle, className = "" }: DownloadBrochureProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  if (!brochure || (!brochure.pdf && !brochure.doc)) {
    return null;
  }

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Prefer PDF over DOC
      const url = brochure.pdf || brochure.doc;
      const filename = `${propertyTitle || 'brochure'}_brochure.${brochure.pdf ? 'pdf' : 'docx'}`;
      
      const link = document.createElement('a');
      link.href = url!;
      link.download = filename;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      window.open(brochure.pdf || brochure.doc, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button 
      onClick={handleDownload}
      variant="outline" 
      className={`border-brand-gold text-brand-gold hover:bg-brand-cream hover:text-brand-text-primary transition-premium ${className}`}
      disabled={isDownloading}
    >
      <Download className="h-4 w-4 mr-2" />
      {isDownloading ? 'Downloading...' : 'Download Brochure'}
    </Button>
  );
}
