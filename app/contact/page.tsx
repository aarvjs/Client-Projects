import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | PrimeEdge Academy",
  description: "Get in touch with PrimeEdge Academy. Book a free demo class or inquire about our coaching programs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-600">
            Have questions about our courses or want to book a free demo class? We are here to help!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <AnimatedSection animationType="slide-left" className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start group hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-indigo-50 p-4 rounded-2xl text-primary mr-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Our Campus</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  123 Education Hub, Knowledge Park,<br />
                  City Center, 400001
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start group hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-indigo-50 p-4 rounded-2xl text-primary mr-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Call Us</h3>
                <p className="text-slate-600 text-sm mb-1">+91 98765 43210</p>
                <p className="text-slate-600 text-sm">+91 98765 43211</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start group hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-indigo-50 p-4 rounded-2xl text-primary mr-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Email Us</h3>
                <p className="text-slate-600 text-sm">info@primeedge.com</p>
                <p className="text-slate-600 text-sm">admissions@primeedge.com</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start group hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="bg-indigo-50 p-4 rounded-2xl text-primary mr-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Working Hours</h3>
                <p className="text-slate-600 text-sm mb-1">Mon - Sat: 8:00 AM - 8:00 PM</p>
                <p className="text-slate-600 text-sm">Sunday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animationType="fade-up" className="lg:col-span-2">
            <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 h-full">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input type="text" id="name" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50 focus:bg-white" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50 focus:bg-white" placeholder="+91 98765 43210" required />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address (Optional)</label>
                    <input type="email" id="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-slate-50 focus:bg-white" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-bold text-slate-700 mb-2">Interested Course</label>
                    <select id="course" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-slate-700 bg-slate-50 focus:bg-white">
                      <option value="">Select a Course</option>
                      <option value="foundation">Class 9-10 Foundation</option>
                      <option value="boards">Class 11-12 Boards</option>
                      <option value="jee">IIT-JEE Prep</option>
                      <option value="neet">NEET Prep</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none bg-slate-50 focus:bg-white" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-primary text-white font-bold py-5 rounded-xl shadow-[0_8px_20px_-6px_rgba(79,70,229,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(79,70,229,0.6)] transition-all transform hover:-translate-y-1 flex items-center justify-center text-lg">
                  <Send className="h-5 w-5 mr-3" />
                  Submit Request
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>

        {/* Map */}
        <AnimatedSection animationType="fade-up" className="mt-20">
          <div className="w-full h-[500px] bg-slate-200 rounded-[2rem] overflow-hidden relative border border-slate-100 shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.355157929424!2d72.82512615!3d19.08182955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b0a70183ed%3A0xc6e4ff6ab964eb88!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
