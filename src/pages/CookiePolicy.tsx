import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground">Last updated: January 1, 2024</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
              <p className="mb-4 leading-relaxed">
                Cookies are small text files that are stored on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
              <p className="mb-4 leading-relaxed">
                TableAI uses cookies to enhance your experience on our website and improve our services. We use cookies for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Authentication and security</li>
                <li>Remembering your preferences and settings</li>
                <li>Analytics and performance monitoring</li>
                <li>Improving user experience</li>
                <li>Marketing and advertising (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-medium mb-3">Essential Cookies</h3>
              <p className="mb-4 leading-relaxed">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, 
                network management, and accessibility.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Authentication tokens</li>
                <li>Session management</li>
                <li>Security features</li>
                <li>Load balancing</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Performance Cookies</h3>
              <p className="mb-4 leading-relaxed">
                These cookies collect information about how you use our website, helping us understand and improve performance.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Google Analytics</li>
                <li>Page load times</li>
                <li>Error tracking</li>
                <li>Usage statistics</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Functional Cookies</h3>
              <p className="mb-4 leading-relaxed">
                These cookies allow the website to remember choices you make and provide enhanced features.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Language preferences</li>
                <li>Theme settings (dark/light mode)</li>
                <li>Dashboard customization</li>
                <li>Form data retention</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Marketing Cookies</h3>
              <p className="mb-4 leading-relaxed">
                These cookies track your activity across websites to deliver targeted advertisements (only with your consent).
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Advertising networks</li>
                <li>Social media integration</li>
                <li>Conversion tracking</li>
                <li>Retargeting pixels</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Cookies</h2>
              <p className="mb-4 leading-relaxed">
                We may use third-party services that set their own cookies. These include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Stripe:</strong> For payment processing security</li>
                <li><strong>Intercom:</strong> For customer support chat functionality</li>
                <li><strong>Hotjar:</strong> For user experience analysis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Cookie Consent</h2>
              <p className="mb-4 leading-relaxed">
                When you first visit our website, we will ask for your consent to use non-essential cookies. You can:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
                <li>Change your preferences at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Managing Cookies</h2>
              <p className="mb-4 leading-relaxed">
                You can control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>View cookies stored on your device</li>
                <li>Delete cookies individually or all at once</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies (may affect website functionality)</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6">Browser-Specific Instructions</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Cookie Retention</h2>
              <p className="mb-4 leading-relaxed">
                Different types of cookies have different lifespans:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain until expiry date or manual deletion</li>
                <li><strong>Authentication cookies:</strong> 30 days or until logout</li>
                <li><strong>Preference cookies:</strong> 1 year</li>
                <li><strong>Analytics cookies:</strong> 2 years (Google Analytics default)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Updates to This Policy</h2>
              <p className="mb-4 leading-relaxed">
                We may update this Cookie Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. 
                We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium">TableAI Support</p>
                <p>Email: support@tableai.com</p>
                <p>Privacy: privacy@tableai.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;