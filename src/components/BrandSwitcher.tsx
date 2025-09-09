import React from 'react';
import { Utensils, Stethoscope } from 'lucide-react';
import { useBrand } from '@/contexts/BrandContext';
import { cn } from '@/lib/utils';

const BrandSwitcher: React.FC = () => {
  const { brand, switchBrand } = useBrand();

  return (
    <div className="flex items-center bg-muted/50 rounded-full p-1 backdrop-blur-sm border border-border/50">
      <button
        onClick={() => switchBrand('restaurant')}
        className={cn(
          'flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
          'hover:bg-background/80',
          brand === 'restaurant'
            ? 'bg-background text-primary shadow-sm border border-border/50'
            : 'text-muted-foreground hover:text-foreground'
        )}
        aria-label="Switch to Restaurant AI"
      >
        <Utensils size={16} />
        <span className="hidden sm:inline">Restaurant</span>
      </button>
      <button
        onClick={() => switchBrand('medical')}
        className={cn(
          'flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
          'hover:bg-background/80',
          brand === 'medical'
            ? 'bg-background text-primary shadow-sm border border-border/50'
            : 'text-muted-foreground hover:text-foreground'
        )}
        aria-label="Switch to Medical AI"
      >
        <Stethoscope size={16} />
        <span className="hidden sm:inline">Medical</span>
      </button>
    </div>
  );
};

export default BrandSwitcher;