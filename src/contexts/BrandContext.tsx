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

  const [brand, setBrandState] = useState<Brand>(() => {
    // Check localStorage first, then URL, then default to restaurant
    const saved = localStorage.getItem('tableai-brand') as Brand;
    const fromPath = getBrandFromPath(location.pathname);
    return saved || fromPath || 'restaurant';
  });

  // Update brand when route changes
  useEffect(() => {
    const currentBrand = getBrandFromPath(location.pathname);
    if (currentBrand !== brand) {
      setBrandState(currentBrand);
    }
  }, [location.pathname, brand]);

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