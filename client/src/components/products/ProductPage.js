import "./ProductPage.css";
import { useEffect, useState } from "react";
import api from "../../api";
import ProductList from "./ProductList";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import PaginationControls from "./PaginationControls";

const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const productsPerPage = 10; // Products per page

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(false);
        const result = await api.getProducts(currentPage, productsPerPage);
        if (!result.ok) {
          throw new Error("API Error");
        }
        const data = await result.json();
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main className="main-layout section-padding">
      {loading && <Loader />}
      {error && <ErrorMessage message="Error fetching products" />}
      <ProductList products={products} className="main-content" />
      <PaginationControls
        onPrev={handlePrevPage}
        onNext={handleNextPage}
        currentPage={currentPage}
        totalPages={totalPages}
        isFirstPage={currentPage === 1}
        isLastPage={currentPage === totalPages}
      />
    </main>
  );
};

export default ProductPage;
