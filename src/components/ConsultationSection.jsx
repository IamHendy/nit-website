"use client";

export default function ConsultationSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-14 md:mt-20">
      <div className="bg-navy text-white px-8 py-12 md:py-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto md:mx-0">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Get The Best Network Solutions To Secure Your Network
          </h2>
          <div className="flex items-center gap-2 my-6">
            <span className="h-0.5 w-16 bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            <span className="h-0.5 w-16 bg-white"></span>
          </div>
          <p className="text-gray-300">
            We offer security solutions that deliver the technologies
            required to stop advanced cyber-attacks on endpoints.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 px-8 py-12 md:py-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto md:mx-0 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Request a free consultation
          </h2>
          <form
            className="space-y-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-navy"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-navy"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-navy"
              />
            </div>
            <textarea
              placeholder="Write something.."
              rows={4}
              className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-navy resize-y"
            ></textarea>
            <button
              type="submit"
              className="bg-navy text-white font-semibold tracking-wide px-8 py-2.5 rounded hover:bg-navy-light transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}