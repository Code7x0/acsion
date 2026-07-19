import { ContactHero } from '../components/contact/ContactHero';
import { ContactIntro } from '../components/contact/ContactIntro';
import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactStudio } from '../components/contact/ContactStudio';

export function ContactPage() {
  return (
    <div className="contact-page">
      <ContactHero />
      <ContactIntro />
      <ContactInfo />
      <ContactForm />
      <ContactStudio />
    </div>
  );
}
