import { useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        form.current,
        "your_public_key" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current!.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-700 mb-4 whitespace-nowrap">
          Get in Touch ✨
        </h2>
        <p className="text-center text-gray-700 mb-12">
          Let's bring your dream event to life — reach out to Siri Decorations today!
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white">
            <h3 className="text-2xl font-semibold text-purple-700 mb-6">
              Contact Information
            </h3>

            <div className="space-y-5 text-gray-800">
              <p className="flex items-center gap-3">
                <Phone className="text-pink-500" />
                <a
                  href="tel:+919848976339"
                  className="hover:text-pink-600 transition"
                >
                  +91 63031 30025
                </a>
              </p>

              <p className="flex items-center gap-3">
                <Mail className="text-pink-500" />
                <a
                  href="mailto:prasannakumarpanda2000@gmail.com"
                  className="hover:text-pink-600 transition"
                >
                  siridecorations@gmail.com
                </a>
              </p>

              <p className="flex items-center gap-3">
                <MapPin className="text-pink-500" />
                Siri Decorations, Vijayawada, Andhra Pradesh
              </p>
            </div>

            {/* Google Map */}
            <div className="mt-10">
              <iframe
                title="Siri Decorations Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d237.75233039468307!2d80.61128118467383!3d17.553411380486008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1761651974907!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-xl shadow-md"
              ></iframe>

              <div className="text-center mt-4">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=17.553411380486008,80.61128118467383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
                >
                  🚗 Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white">
            <h3 className="text-2xl font-semibold text-purple-700 mb-6">
              Send Us a Message 💌
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Contact Number"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
