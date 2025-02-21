const ContactCTA = () => {
  return (
    <section className="py-24 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-orange-500/10 to-slate-800 border border-orange-500/20 p-8 md:p-12 lg:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-neutral-400 mb-8 text-lg">
              Let's discuss how we can help your business grow with our custom
              digital solutions
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
