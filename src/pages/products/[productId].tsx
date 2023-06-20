"use client";

import LayoutHome from "@/layouts/LayoutHome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  nombre: string;
  description: string;
  calidad: string;
  direccion: string;
  categoryId: number;
  subCategoryId: number;
}

interface Categoria {
  id: number;
  nombre: string;
}

function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const [categoria, setCategoria] = useState<Categoria | null>(null);

  const router = useRouter();
  const productId = parseInt(router.query.productId as string);

  const fetchDataProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/products/${productId}`
      );
      const data = await response.json();
      setProduct(data.product);
      setCategoria(data.categoria);
      console.log(data.product);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchDataProduct();
  }, [productId]);

  return product && categoria ? (
    <LayoutHome>
      <div className="p-12 bg-slate-100">
        <div className="p-10 rounded-md mx-auto justify-center items-center w-[50%] h-[60rem] bg-white">
          <div className="">
            <h1 className="text-2xl">Resultados de la búsqueda</h1>
            <p className="text-slate-500 ml-1">
              Su producto de la categoría {categoria.nombre}
            </p>
          </div>
          <div className="mx-auto flex flex-col justify-center h-[40rem] w-[40rem]">
            <h1 className="text-2xl mb-6 font-bold text-emerald-600">
              Producto
            </h1>
            <h1 className="text-xl">Ref: {product.id}</h1>
            <h1 className="text-xl">Nombre: {product.nombre}</h1>
            <h1 className="text-xl">Descripcion: {product.description}</h1>
            <h1 className="text-xl">Calidad: {product.calidad}</h1>
            <h1 className="text-xl">Categoría: {categoria.nombre}</h1>
          </div>
        </div>
      </div>
    </LayoutHome>
  ) : (
    <h1>No existe el producto que buscas</h1>
  );
}

export default ProductDetail;
