import { useState } from "react";
import SearchResultList from "./SearchResultList";

interface Products {
  id: number;
  nombre: string;
  description: string;
  calidad: Calidad;
  direccion: string;
  categoryId: number;
  subCategoryId: number;
}

enum Calidad {
  malo,
  bueno,
  excelente,
  nuevo,
}

function SearchBar({ setResults }: any) {
  const [input, setInput] = useState("");

  const fetchData = (value: any) => {
    if (value === "") {
      setResults(null);
    } else {
      fetch("http://localhost:4000/products", { credentials: "include" })
        .then((response) => response.json())
        .then((data) => {
          const results = data.filter((item: Products) => {
            return (
              item &&
              item.nombre &&
              item.nombre.toLowerCase().includes(value.toLowerCase())
            );
          });
          setResults(results);
        });
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <input
        className="w-[30rem] border-2 p-1"
        type="text"
        name="buscador"
        placeholder="Buscar producto"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <SearchResultList input={input} />
    </div>
  );
}

export default SearchBar;
