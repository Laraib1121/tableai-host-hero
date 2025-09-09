import { Utensils, Stethoscope, Calendar, Phone, CreditCard, Clock, Users, Shield, Zap, BarChart3, MessageSquare, Calendar as CalendarIcon } from 'lucide-react';
import { Brand } from '@/contexts/BrandContext';

interface BrandConfig {
  name: string;
  tagline: string;
  description: string;
  cta: {
    primary: string;
    secondary: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    rotatingWords: string[];
    description: string;
  };
  features: Array<{
    icon: any;
    title: string;
    description: string;
    gradient: string;
  }>;
  integrations: Array<{
    name: string;
    category: string;
    description: string;
    logo: any;
  }>;
  testimonials: Array<{
    name: string;
    role: string;
    company: string;
    content: string;
  }>;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const brandConfigs: Record<Brand, BrandConfig> = {
  restaurant: {
    name: 'TableAI',
    tagline: 'AI-Powered Restaurant Front Desk',
    description: 'Transform your restaurant operations with our AI receptionist that handles calls, reservations, and orders 24/7.',
    cta: {
      primary: 'Book a Demo',
      secondary: 'Watch Demo Video'
    },
    hero: {
      badge: 'AI-Powered Restaurant Front Desk',
      title: 'Transform Your',
      titleHighlight: 'with TableAI',
      rotatingWords: ['Restaurant', 'Deli', 'Cafe'],
      description: 'Our AI receptionist handles phone calls, takes reservations, processes orders, and manages payments automatically - so you can focus on delivering exceptional dining experiences.'
    },
    features: [
      {
        icon: Phone,
        title: '24/7 Call Handling',
        description: 'Never miss a customer call again. Our AI answers every call professionally, even during busy hours.',
        gradient: 'from-blue-500 to-cyan-500'
      },
      {
        icon: Calendar,
        title: 'Smart Reservations',
        description: 'Automatically manage table bookings, send confirmations, and handle cancellations seamlessly.',
        gradient: 'from-purple-500 to-pink-500'
      },
      {
        icon: Utensils,
        title: 'Order Taking',
        description: 'Take accurate food orders over the phone and integrate with your POS system effortlessly.',
        gradient: 'from-orange-500 to-red-500'
      },
      {
        icon: CreditCard,
        title: 'Payment Processing',
        description: 'Secure payment collection over the phone with integrated payment processing solutions.',
        gradient: 'from-green-500 to-emerald-500'
      }
    ],
    integrations: [
      {
        name: 'OpenTable',
        category: 'Reservations',
        description: 'Seamlessly sync with OpenTable for unified reservation management.',
        logo: Calendar
      },
      {
        name: 'Square POS',
        category: 'Point of Sale',
        description: 'Direct integration with Square for order processing and payments.',
        logo: CreditCard
      },
      {
        name: 'Resy',
        category: 'Reservations',
        description: 'Connect with Resy to manage all your table bookings in one place.',
        logo: Users
      },
      {
        name: 'Toast POS',
        category: 'Point of Sale',
        description: 'Full integration with Toast for seamless order management.',
        logo: Utensils
      }
    ],
    testimonials: [
      {
        name: 'Maria Rodriguez',
        role: 'Owner',
        company: 'Bella Vista Restaurant',
        content: 'TableAI has completely transformed how we handle customer calls. We never miss a reservation now, and our staff can focus on providing excellent service instead of answering phones all day.'
      },
      {
        name: 'James Chen',
        role: 'Manager',
        company: 'Golden Dragon Takeout',
        content: 'The order accuracy has improved dramatically. TableAI understands our menu perfectly and even handles special requests better than some of our human staff used to.'
      }
    ],
    seo: {
      title: 'TableAI - AI-Powered Restaurant Phone System | 24/7 Reservations & Orders',
      description: 'Transform your restaurant with TableAI\'s AI receptionist. Handle calls, reservations, and orders 24/7. Boost efficiency and never miss a customer again.',
      keywords: ['restaurant AI', 'AI phone system', 'restaurant reservations', 'order taking', 'restaurant automation', 'AI receptionist']
    }
  },
  medical: {
    name: 'Receptr',
    tagline: 'AI-Powered Medical Reception',
    description: 'Revolutionize your clinic operations with our AI receptionist that handles patient calls, appointments, and inquiries 24/7.',
    cta: {
      primary: 'Book a Demo',
      secondary: 'Watch Demo Video'
    },
    hero: {
      badge: 'AI-Powered Medical Reception',
      title: 'Transform Your',
      titleHighlight: 'with Receptr',
      rotatingWords: ['Clinic', 'Practice', 'Office'],
      description: 'Our AI receptionist handles patient calls, schedules appointments, manages inquiries, and processes payments automatically - so you can focus on providing exceptional patient care.'
    },
    features: [
      {
        icon: Phone,
        title: '24/7 Patient Support',
        description: 'Always available for your patients. Our AI handles calls professionally with medical knowledge.',
        gradient: 'from-blue-500 to-cyan-500'
      },
      {
        icon: CalendarIcon,
        title: 'Smart Scheduling',
        description: 'Automatically manage appointments, send reminders, and handle rescheduling with ease.',
        gradient: 'from-purple-500 to-pink-500'
      },
      {
        icon: MessageSquare,
        title: 'Patient Inquiries',
        description: 'Answer common medical questions and route complex issues to the appropriate staff.',
        gradient: 'from-green-500 to-emerald-500'
      },
      {
        icon: Shield,
        title: 'HIPAA Compliant',
        description: 'Full HIPAA compliance ensures patient information remains secure and confidential.',
        gradient: 'from-red-500 to-pink-500'
      }
    ],
    integrations: [
      {
        name: 'Epic EMR',
        category: 'Electronic Health Records',
        description: 'Seamlessly integrate with Epic for unified patient management.',
        logo: BarChart3
      },
      {
        name: 'Cerner',
        category: 'Healthcare IT',
        description: 'Direct integration with Cerner for appointment and patient data sync.',
        logo: Shield
      },
      {
        name: 'Athenahealth',
        category: 'Practice Management',
        description: 'Connect with Athenahealth for comprehensive practice management.',
        logo: Users
      },
      {
        name: 'SimplePractice',
        category: 'Practice Management',
        description: 'Full integration with SimplePractice for streamlined operations.',
        logo: Calendar
      }
    ],
    testimonials: [
      {
        name: 'Dr. Sarah Johnson',
        role: 'Family Physician',
        company: 'Westside Medical Clinic',
        content: 'Receptr has been a game-changer for our practice. Our patients love the 24/7 availability, and we\'ve reduced appointment no-shows by 40% with automated reminders.'
      },
      {
        name: 'Michael Thompson',
        role: 'Practice Manager',
        company: 'Downtown Dental',
        content: 'The AI handles patient scheduling so efficiently that we\'ve been able to reduce our front desk staff while improving patient satisfaction scores.'
      }
    ],
    seo: {
      title: 'Receptr - AI Medical Receptionist | 24/7 Patient Support & Scheduling',
      description: 'Transform your medical practice with Receptr\'s AI receptionist. Handle patient calls, appointments, and inquiries 24/7. HIPAA compliant and efficient.',
      keywords: ['medical AI', 'AI receptionist', 'medical appointment scheduling', 'patient support', 'clinic automation', 'HIPAA compliant AI']
    }
  }
};

export const getBrandConfig = (brand: Brand): BrandConfig => {
  return brandConfigs[brand];
};