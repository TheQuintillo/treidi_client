import SearchResult from "./SearchResult";

function SearchResultList({ results, input }: any) {
  if (!results) {
    return null;
  }

  return (
    <div
      className={`absolute top-[4.3rem] w-[30rem] p-2 rounded bg-gradient-to-b from-emerald-500 to-emerald-700 text-white ${
        results.length === 0 && "hidden"
      }`}
    >
      {results.map((result: any, id: number) => {
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
}

export default SearchResultList;
