import ProductCard from "./ProductCard";
import products from "../data/products.json";
import { useState } from "react";

const ProductSortList = () => {
  const [selectedSize, setSelectedSize] = useState("Size");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  // Фильтруем товары по выбранному размеру
  const filteredProducts =
    selectedSize === "Size"
      ? products // Отображаем все товары
      : products.filter((product) => product.size === selectedSize); // Фильтруем по размеру
  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog-top">
          <div className="catalog-filter">
            <div className="catalog-filter-caption">
              <h3 className="catalog-filter-heading">FILTER</h3>
              <i className="catalog-filter-icon fa-solid fa-filter"></i>
            </div>
            <div className="catalog-drop-down-menu">
              <details className="menu-item">
                <summary className="menu-item-title">CATEGORY</summary>
                <ul className="menu-list">
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Accessories
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Bags
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Denim
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Hoodies & Sweatshirts
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Jackets & Coats
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Polos
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Shirts
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Shoes
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Sweaters & Knits
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      T-Shirts
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Tanks
                    </a>
                  </li>
                </ul>
              </details>
              <details className="menu-item">
                <summary className="menu-item-title">BRAND</summary>
                <ul className="menu-list">
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Accessories
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Bags
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Denim
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Hoodies & Sweatshirts
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Jackets & Coats
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Polos
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Shirts
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Shoes
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Sweaters & Knits
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      T-Shirts
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Tanks
                    </a>
                  </li>
                </ul>
              </details>
              <details className="menu-item">
                <summary className="menu-item-title">DESIGNER</summary>
                <ul className="menu-list">
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Accessories
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Bags
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Denim
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Hoodies & Sweatshirts
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Jackets & Coats
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Polos
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Shirts
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Shoes
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Sweaters & Knits
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      T-Shirts
                    </a>
                  </li>
                  <li className="menu-li">
                    <a className="menu-link" href="#">
                      Tanks
                    </a>
                  </li>
                </ul>
              </details>
            </div>
          </div>
          <div className="catalog-sort">
            <form className="catalog-form">
              <select name="trend" id="trend-select">
                <option value="trend">TRENDING NOW</option>
                <option value="trend">TRENDING NOW</option>
                <option value="trend">TRENDING NOW</option>
                <option value="trend">TRENDING NOW</option>
                <option value="trend">TRENDING NOW</option>
              </select>
              <select name="size" id="size-select" onChange={handleSizeChange} value={selectedSize}>
                <option value="Size">SIZE</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
              <select name="price" id="price-select">
                <option value="Size">PRICE</option>
                <option value="XS">10$</option>
                <option value="S">25$</option>
                <option value="M">50$</option>
                <option value="L">100$</option>
              </select>
            </form>
          </div>
        </div>
        <div className="catalog-products">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        </div>
        <div className="catalog-pagination">
          <div className="container">
            <div className="pagination-block">
              <ul className="pagination-list">
                <li className="pagination-li">
                  <a className="pagination-link" href="#">
                    <i className="pagination-arrow fa-solid fa-angle-left"></i>
                  </a>
                </li>
                <li className="pagination-li">
                  <a className="pagination-link" href="#">
                    1
                  </a>
                </li>
                <li className="pagination-li">
                  <a className="pagination-link" href="#">
                    2
                  </a>
                </li>
                <li className="pagination-li">
                  <a className="pagination-link" href="#">
                    3
                  </a>
                </li>
                <li className="pagination-li">
                  <a className="pagination-link" href="#">
                    4
                  </a>
                </li>
                <li className="pagination-li">
                  <a className="pagination-link" href="#">
                    5
                  </a>
                </li>
                <li className="pagination-li">
                  <a className="pagination-link" href="#">
                    6
                  </a>
                </li>
                <li className="pagination-li">
                  <a className="pagination-link" href="#">
                    ...
                  </a>
                </li>
                <li className="pagination-li">
                  <a className="pagination-link" href="#">
                    20
                  </a>
                </li>
                <li className="pagination-li">
                  <a className="pagination-link" href="#">
                    <i className="pagination-arrow fa-solid fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSortList;
