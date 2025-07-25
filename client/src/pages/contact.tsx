import ContactForm from "@/components/contact-form";
import { Phone, Mail, Linkedin, CheckCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-24 pb-16 bg-dark min-h-screen" data-testid="contact-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Discuss Your <span className="text-electric-blue">Software Goals</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're building a new app, automating a process, or scaling your ERP — I'd love to hear about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="neumorphism p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Ready to start your next software project? Let's schedule a free consultation to discuss your requirements and explore how we can work together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="glassmorphism p-6 rounded-xl flex items-center">
                <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-400">+91 63540 75540</div>
                </div>
              </div>

              <div className="glassmorphism p-6 rounded-xl flex items-center">
                <div className="w-12 h-12 bg-neon-purple rounded-lg flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-400">meghwindave04@gmail.com</div>
                </div>
              </div>

              <div className="glassmorphism p-6 rounded-xl flex items-center">
                <div className="w-12 h-12 bg-neon-cyan rounded-lg flex items-center justify-center mr-4">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-gray-400">Connect with me professionally</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="font-bold mb-4">Why Work With Me?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Free initial consultation and project assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Agile development with regular updates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Post-launch support and maintenance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3 w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">Transparent communication and documentation</span>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glassmorphism p-6 rounded-xl">
              <h3 className="font-bold mb-4 text-electric-blue">Current Availability</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>New Projects:</span>
                  <span className="text-green-400 font-semibold">Available</span>
                </div>
                <div className="flex justify-between">
                  <span>Consultations:</span>
                  <span className="text-green-400 font-semibold">Open</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Time:</span>
                  <span className="text-electric-blue font-semibold">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-electric-blue">What's your typical project timeline?</h3>
              <p className="text-gray-300">
                Most projects range from 2-12 weeks depending on complexity. I provide detailed timelines during our initial consultation with clear milestones and deliverables.
              </p>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-neon-purple">Do you work with international clients?</h3>
              <p className="text-gray-300">
                Absolutely! I have experience working with clients across different time zones and have even worked onsite internationally. I'm comfortable with remote collaboration.
              </p>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-neon-cyan">What's included in your project delivery?</h3>
              <p className="text-gray-300">
                Complete source code, documentation, deployment setup, testing, and 30 days of post-launch support. I also provide training if needed.
              </p>
            </div>
            <div className="neumorphism p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-green-400">How do you handle project changes?</h3>
              <p className="text-gray-300">
                I use agile methodology with regular sprint reviews. Changes are discussed, estimated, and integrated smoothly without disrupting the overall timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
