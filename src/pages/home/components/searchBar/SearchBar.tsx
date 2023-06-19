import { useState } from "react";

function SearchBar() {
  const [input, setInput] = useState("");

  const fetchData = (value: any) => {};
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
