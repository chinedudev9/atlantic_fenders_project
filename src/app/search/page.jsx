"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const routes = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Clients", path: "/clients" },
  { title: "Services", path: "/services" },
];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const results = routes.filter((route) =>
    route.title.toLowerCase().includes(query)
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Search Results for: <span className="text-purple-600">"{query}"</span>
      </h1>

      {results.length > 0 ? (
        <ul className="w-full max-w-md space-y-4">
          {results.map((result, index) => (
            <li key={index}>
              <Link
                href={result.path}
                className="block bg-purple-100 hover:bg-purple-200 text-purple-800 font-medium px-4 py-3 rounded-lg transition"
              >
                {result.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center text-lg mt-8">
          ❌ Sorry, search is unavailable at the moment.
        </p>
      )}
    </div>
  );
}
