import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Privacy Policy — GTA Cheats Hub',
  description: 'Privacy Policy for GTA Cheats Hub. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://gta6cheatshub.com/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
      <h1 className="font-heading text-4xl md:text-5xl mb-6">Privacy Policy</h1>
      <p className="text-text-secondary mb-8">Last updated: January 1, 2025</p>

      <div className="space-y-8 text-text-secondary leading-relaxed">
        <section>
          <h2 className="font-heading text-2xl text-white mb-3">Introduction</h2>
          <p>GTA Cheats Hub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website gta6cheatshub.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-white mb-3">Information We Collect</h2>
          <p className="mb-2">We may collect information about you in a variety of ways:</p>
          <ul className="space-y-2 ml-4">
            <li><strong className="text-white">Usage Data:</strong> We automatically collect information about how you interact with our website, including pages visited, time spent, and referring URLs.</li>
            <li><strong className="text-white">Device Data:</strong> We collect information about your device including browser type, operating system, and screen resolution.</li>
            <li><strong className="text-white">Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience. See our Cookie section below.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-white mb-3">Cookies</h2>
          <p>We use cookies to improve your experience on our site. These include:</p>
          <ul className="space-y-2 ml-4 mt-2">
            <li><strong className="text-white">Essential Cookies:</strong> Required for the website to function properly, including remembering your cookie consent preference.</li>
            <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with our website to improve our content and services.</li>
            <li><strong className="text-white">Advertising Cookies:</strong> Used by our advertising partners (including Google AdSense) to show you relevant advertisements.</li>
          </ul>
          <p className="mt-2">You can manage your cookie preferences through your browser settings or our cookie consent banner.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-white mb-3">Third-Party Advertising</h2>
          <p>We use Google AdSense to display advertisements on our website. Google may use cookies to serve ads based on your prior visits to our website and other websites. You can opt out of personalized advertising by visiting Google&apos;s Ads Settings.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-white mb-3">How We Use Your Information</h2>
          <ul className="space-y-1 ml-4">
            <li>• To provide and maintain our website</li>
            <li>• To improve our content and user experience</li>
            <li>• To analyze usage patterns and trends</li>
            <li>• To display relevant advertisements</li>
            <li>• To respond to your inquiries</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-white mb-3">Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-white mb-3">Your Rights (GDPR)</h2>
          <p>If you are a resident of the European Economic Area, you have certain data protection rights including the right to access, correct, or delete your personal data. Contact us to exercise these rights.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-white mb-3">Children&apos;s Privacy</h2>
          <p>Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-white mb-3">Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl text-white mb-3">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us through our <a href="/contact" className="text-primary hover:underline">Contact Page</a>.</p>
        </section>
      </div>
    </div>
  );
}
