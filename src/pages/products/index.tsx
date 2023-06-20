import { useEffect, useState } from "react";

function Index() {
  const fetchData = async () => {
    fetch(`http://localhost:4000/products/${id}`);
  };

  useEffect(() => {}, []);

  return <div>I</div>;
}

export default Index;
