import React, { useEffect, useState, useRef } from "react";
import "./Cards.css";
import { Card, Carousel } from "antd";
import { products } from "../../services/data";

interface Product {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  images: string[];
}

const Cards: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const itemsPerPage = 8;
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const loadNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      console.log("ScrollTop:", scrollTop);
      console.log("ScrollHeight:", scrollHeight);
      console.log("ClientHeight:", clientHeight);
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        loadNextPage();
      }
      
    }
  };
  

  useEffect(() => {
    setCurrentPage(1);
    const initialVisibleProducts = products.slice(0, itemsPerPage);
    setVisibleProducts(initialVisibleProducts);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll);
      return () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (currentPage > 1) {
      const start = (currentPage - 1) * itemsPerPage;
      const end = Math.min(start + itemsPerPage, totalItems);
      setVisibleProducts((prevProducts) => [...prevProducts, ...products.slice(start, end)]);
    }
  }, [currentPage]);

  return (
    <div className="main-card">
    <div className="card-container" ref={scrollContainerRef}>
      {visibleProducts.map((product: Product) => (
        <div className="card" key={product.productId}>
          <Card size="small" style={{ width: 180, height: 150 }}>
            <Carousel autoplay>
              {product.images.map((image: string, index: number) => (
                <div key={index}>
                  <img src={image} height={100} width={150} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </Carousel>
            <p>Price: ${product.price}</p>
          </Card>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Cards;
