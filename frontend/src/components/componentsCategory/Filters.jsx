import { useSelector } from "react-redux";
import { useHistory } from "react-router";

import { getBrandFilter, getCategoryFilter } from "../../helpers/getFilters";

import styles from "./components.module.css";

const Filters = () => {
  const history = useHistory();

  const products = useSelector((state) => state.products.productsByDep);

  const brands = getBrandFilter(products);
  const categories = getCategoryFilter(products);

  const changeHandler = (filter) => {
    history.push(`/componente/categoria/${filter}`);
  };

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.size}>
        <label className={styles.sizeLabel} htmlFor="category">
          Categoria
        </label>
        <select
          onChange={(e) => changeHandler(e.target.value)}
          name="category"
          id="cacategoryrs"
        >
          {categories.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.brand}>
        <label className={styles.sizeLabel} htmlFor="brand">
          Marca
        </label>
        <select name="brand" id="brand">
          {brands.map((brand, i) => (
            <option key={i} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
