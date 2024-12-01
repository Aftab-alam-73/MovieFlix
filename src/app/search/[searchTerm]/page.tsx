import Results from "@/components/Results";

export default async function SearchPage({
  params,
}: {
  params: Promise<{ searchTerm: string }>;
}) {
  // Await the params object
  const { searchTerm } = await params;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  );
}
