import Link from "next/link";

function SearchResult({ result }: any) {
  return (
    <div>
      <Link href={`http://localhost:3000/products/${result.id}`}>
        {result.nombre}
      </Link>
    </div>
  );
}

export default SearchResult;
