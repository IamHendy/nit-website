"use client";

export default function CommentForm() {
  return (
    <div className="mt-14 pt-10 border-t border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Leave a Comment
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Your email address will not be published. Required fields are marked *
      </p>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy"
          />
        </div>
        <textarea
          placeholder="Comment"
          rows={6}
          className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy resize-y"
        ></textarea>
        <button
          type="submit"
          className="bg-[#b4a189] text-white font-semibold tracking-wide px-8 py-3 hover:bg-[#a08e77] transition-colors"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}