import { Suspense } from "react";
import SearchResults from "./SearchResults";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="text-center p-6">Loading search...</div>}>
      <SearchResults />
    </Suspense>
  );
}

