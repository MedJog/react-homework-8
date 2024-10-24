

import Brand from "../Brand";
import CatalogButton from '../CatalogButton';
import Categories from "../Categories";
import Feature from "../Feature";
import ProductList from "../ProductList";
import ProductsInfo from '../ProductsInfo';


const HomePage = () => {
  return (
  <div>
    <Brand />
    <Categories />
    <ProductsInfo />
    <ProductList />
    <CatalogButton />
    <Feature />
  </div>
  );
};
export default HomePage;
