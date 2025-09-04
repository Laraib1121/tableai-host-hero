import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 1, 2024</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="mb-4 leading-relaxed">
                TableAI collects information to provide better services to our users. We collect information in the following ways:
              </p>
              
              <h3 className="text-xl font-medium mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Account information (name, email address, phone number)</li>
                <li>Restaurant business details (name, address, contact information)</li>
                <li>Billing and payment information</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">Usage Information</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Call recordings and transcripts for AI training and quality assurance</li>
                <li>Reservation and order data processed through our system</li>
                <li>Analytics data on system usage and performance</li>
                <li>Customer interaction logs and feedback</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
              <p className="mb-4 leading-relaxed">We use the collected information for:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Providing and improving our AI-powered restaurant services</li>
                <li>Processing reservations and orders</li>
                <li>Training and improving our AI models</li>
                <li>Generating analytics and insights for your business</li>
                <li>Communicating with you about our services</li>
                <li>Billing and account management</li>
                <li>Compliance with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <p className="mb-4 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist in our operations</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
              <p className="mb-4 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
              <p className="mb-4 leading-relaxed">
                We retain your information for as long as necessary to provide our services and comply with legal obligations. 
                Specific retention periods include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Account information: Until account deletion plus 90 days</li>
                <li>Call recordings: 2 years for quality assurance and training</li>
                <li>Transaction data: 7 years for tax and accounting purposes</li>
                <li>Analytics data: 3 years for business intelligence</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="mb-4 leading-relaxed">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Object to or restrict processing of your information</li>
                <li>Data portability for your information</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking</h2>
              <p className="mb-4 leading-relaxed">
                We use cookies and similar technologies to enhance your experience. For detailed information about our use of cookies, 
                please refer to our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. International Transfers</h2>
              <p className="mb-4 leading-relaxed">
                Your information may be transferred to and processed in countries other than your own. We ensure adequate protection 
                through appropriate safeguards such as standard contractual clauses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
              <p className="mb-4 leading-relaxed">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. 
                If we become aware of such collection, we will delete the information immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
              <p className="mb-4 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium">TableAI Privacy Team</p>
                <p>Email: privacy@tableai.com</p>
                <p>Support: support@tableai.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;