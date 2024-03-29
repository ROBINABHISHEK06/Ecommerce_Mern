import styled from "styled-components";
import { popularProducts } from "../data";
import Productitm from "./Productitm";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Product = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getproducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `https://ecommerce-mern-vmnv.vercel.app/api/products?category=${cat}`
            : "https://ecommerce-mern-vmnv.vercel.app/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getproducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => (
            <Productitm item={item} key={item.id} />
          ))
        : products
            .slice(0, 8)
            .map((item) => <Productitm item={item} key={item.id} />)}
    </Container>
  );
};

export default Product;
