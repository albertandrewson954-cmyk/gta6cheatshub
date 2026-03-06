import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact Us — GTA Cheats Hub',
  description: 'Contact GTA Cheats Hub for cheat submissions, bug reports, or business enquiries. We love hearing from the GTA community.',
  alternates: { canonical: 'https://gta6cheatshub.com/contact' },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <h1 className="font-heading text-4xl md:text-5xl mb-4">Contact Us</h1>
      <p className="text-text-secondary mb-8">For cheat submissions, bug reports, or business enquiries.</p>
      <ContactForm />
    </div>
  );
}
