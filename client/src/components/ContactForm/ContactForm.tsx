import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { ShootingStars } from "../ui/shooting-stars";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all required fields");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Reset error state when user starts typing
    if (status === "error") setStatus("idle");
  };

  return (
    <section id="contact" className="relative bg-slate-800 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start your next project? We'd love to hear from you and
            discuss how we can help bring your vision to life.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-slate-700/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700"
        >
          <div className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-600"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-600"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-600"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-orange-600"
                required
              ></textarea>
            </div>

            {status === "error" && (
              <div className="flex items-center text-red-500 gap-2">
                <AlertCircle size={20} />
                <p>{errorMessage}</p>
              </div>
            )}

            {status === "success" && (
              <div className="flex items-center text-green-500 gap-2">
                <CheckCircle size={20} />
                <p>Message sent successfully!</p>
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`
                  inline-flex items-center gap-2 px-8 py-3 rounded-lg
                  ${
                    status === "loading"
                      ? "bg-slate-600 cursor-not-allowed"
                      : "bg-orange-600 hover:bg-orange-700"
                  }
                  text-white transition-colors duration-300
                `}
              >
                {status === "loading" ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Shooting Stars Background */}
      <ShootingStars
        starColor="#EA580C" // orange-600
        trailColor="#2EB9DF"
        className="absolute inset-0"
      />
    </section>
  );
};

export default ContactForm;
