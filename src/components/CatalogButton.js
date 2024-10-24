import { Link } from "react-router-dom";
import Catalog from './pages/Catalog';


const CatalogButton = () => {
  return (
    <div className="products-button">
      <Link to="/catalog" element={<Catalog />}>
        <button className="button button_browse button-browse_paddings button_color-white button_border button_text-pink button_text-size-1 ">
          Browse All Product
        </button>
      </Link>
    </div>
  );
};
export default CatalogButton;
