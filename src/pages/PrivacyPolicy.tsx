import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Privacy Policy</h1>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
            <section>
              <p className="text-muted-foreground mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <p className="text-foreground leading-relaxed">
                At Nevxora ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>

              <h3 className="text-xl font-medium mb-3 text-foreground">Personal Information</h3>
              <p className="text-foreground leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company information and job title</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">Automatically Collected Information</h3>
              <p className="text-foreground leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>IP address and browser information</li>
                <li>Device information and operating system</li>
                <li>Website usage patterns and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Provide and maintain our services</li>
                <li>Communicate with you about projects and services</li>
                <li>Improve our website and user experience</li>
                <li>Send you updates and marketing communications (with your consent)</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Information Sharing and Disclosure</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist us in operating our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
              <p className="text-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Rights</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Objection to processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookies</h2>
              <p className="text-foreground leading-relaxed">
                Our website uses cookies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Third-Party Services</h2>
              <p className="text-foreground leading-relaxed">
                Our website may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Children's Privacy</h2>
              <p className="text-foreground leading-relaxed">
                Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you become aware that we have collected such information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to This Privacy Policy</h2>
              <p className="text-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
              <p className="text-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-foreground"><strong>Email:</strong> info@nevxora.com</p>
                <p className="text-foreground"><strong>Phone:</strong> +92 3229657649</p>
                <p className="text-foreground"><strong>Address:</strong> Islamabad | Pakistan</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;