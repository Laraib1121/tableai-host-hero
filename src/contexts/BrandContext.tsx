import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export type Brand = 'restaurant' | 'medical';

interface BrandContextType {
  brand: Brand;
  setBrand: (brand: Brand) => void;
  switchBrand: (brand: Brand) => void;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

interface BrandProviderProps {
  children: ReactNode;
}

export const BrandProvider: React.FC<BrandProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine brand from URL
  const getBrandFromPath = (pathname: string): Brand => {
    if (pathname.startsWith('/medical')) return 'medical';
    return 'restaurant';
  };

  // Safe initial state - avoid localStorage during initial render
  const [brand, setBrandState] = useState<Brand>('restaurant');
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize brand from localStorage and URL after component mounts
  useEffect(() => {
    const saved = localStorage.getItem('tableai-brand') as Brand;
    const fromPath = getBrandFromPath(location.pathname);
    const initialBrand = saved || fromPath || 'restaurant';
    
    setBrandState(initialBrand);
    setIsInitialized(true);
  }, [location.pathname]);

  // Update brand when route changes (only after initialization)
  useEffect(() => {
    if (!isInitialized) return;
    
    const currentBrand = getBrandFromPath(location.pathname);
    if (currentBrand !== brand) {
      setBrandState(currentBrand);
    }
  }, [location.pathname, brand, isInitialized]);

  // Update data-brand attribute on document body
  useEffect(() => {
    document.body.setAttribute('data-brand', brand);
    localStorage.setItem('tableai-brand', brand);
  }, [brand]);

  const setBrand = (newBrand: Brand) => {
    setBrandState(newBrand);
  };

  const switchBrand = (newBrand: Brand) => {
    setBrandState(newBrand);
    const targetPath = newBrand === 'medical' ? '/medical' : '/restaurant';
    navigate(targetPath);
  };

  return (
    <BrandContext.Provider value={{ brand, setBrand, switchBrand }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};