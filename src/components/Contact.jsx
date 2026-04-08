import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  useEffect(() => {
    emailjs.init('uzgDE3a2W5AceO4Hc'); // tera public key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_43tfyvp',
      'template_a1awgws',
      form.current,
      'uzgDE3a2W5AceO4Hc'
    )
    .then(() => {
      alert("✅ Message sent successfully!");
      e.target.reset();
    })
    .catch((error) => {
      alert("❌ Error: " + error.text);
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" data-aos="fade-up">
      
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12">
          Let's Connect!
        </h2>

        <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">

          <p className="text-center text-lg mb-8">
            I'm always open to opportunities and collaborations. Feel free to reach out!
          </p>

          {/* Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-white dark:bg-gray-700"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-white dark:bg-gray-700"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-white dark:bg-gray-700"
              required
            />

            <button className="w-full py-3 bg-violet-600 text-white rounded hover:bg-violet-700">
              Send Message
            </button>

          </form>

          {/* Social Links */}
          <div className="mt-8 text-center">
            <p className="mb-4">You can also find me here:</p>

            <div className="flex justify-center space-x-6 text-2xl">

              <a href="tel:+917804885007">
                <i className="fas fa-phone"></i>
              </a>

              <a href="mailto:karangangwal143@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>

              <a href="https://www.linkedin.com/in/karan-gangwal-b1b185330/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="https://github.com/Karanexplore" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
