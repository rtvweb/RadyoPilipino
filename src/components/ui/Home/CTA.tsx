export function CTA() {
  return (
    <section className="py-16 bg-red-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Stay Connected with Radyo Pilipino</h2>
        <p className="mb-8">
          Subscribe to our newsletter to receive updates, contests, and exclusive content.
        </p>
        <form className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
            className="flex-grow px-4 py-3 rounded-l-lg text-gray-900"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-r-lg font-medium transition hover:bg-yellow-600 bg-yellow-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
