import Card from './Card';

type Result = {
  id: number;
  backdrop_path?: string | null;
  poster_path?: string | null;
  overview: string;
  title?: string;
  name?: string;
  release_date?: string | null;
  first_air_date?: string | null;
  vote_count: number;
};

type ResultsProps = {
  results: Result[];
};

export default function Results({ results }: ResultsProps) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((result: Result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
