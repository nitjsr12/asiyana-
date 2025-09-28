import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { LocationMap } from '@/components/LocationMap';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">Get in touch with our expert team today</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <ContactInfo />
            <LocationMap />
          </div>
        </div>
      </div>
    </div>
  );
}