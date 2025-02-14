import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-50">
      <h2 className="text-4xl font-bold text-red-600 mb-4">Not Found</h2>
      <p className="text-xl text-red-500 mb-8">Could not find requested resource</p>
      <Link href="/">
        <button className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition duration-300">
          Return Home
        </button>
      </Link>
    </div>
  )
}

