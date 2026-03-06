'use client';

export default function ContactForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name" className="block text-sm text-text-secondary mb-1">Name</label>
        <input type="text" id="name" className="w-full bg-bg-card border border-border-color rounded-lg px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary transition-colors" placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-text-secondary mb-1">Email</label>
        <input type="email" id="email" className="w-full bg-bg-card border border-border-color rounded-lg px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm text-text-secondary mb-1">Subject</label>
        <select id="subject" className="w-full bg-bg-card border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors">
          <option value="">Select a subject</option>
          <option value="cheat-submission">Cheat Submission</option>
          <option value="bug-report">Bug Report</option>
          <option value="correction">Correction / Inaccuracy</option>
          <option value="business">Business Enquiry</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-text-secondary mb-1">Message</label>
        <textarea id="message" rows={6} className="w-full bg-bg-card border border-border-color rounded-lg px-4 py-3 text-white placeholder-text-secondary focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Your message..." />
      </div>
      <button type="submit" className="w-full px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors min-h-[44px]">
        Send Message
      </button>
      <p className="text-xs text-text-secondary text-center">This form is for display purposes. Backend integration required for submission.</p>
    </form>
  );
}
