export const getBrandFilter = (products) => {
  let brands = [];
  for (let key in products) {
    if (!brands.includes(products[key].brand)) {
      brands.push(products[key].brand);
    }
  }
  return brands;
};

export const getCategoryFilter = (products) => {
  let category = [];
  for (let key in products) {
    if (!category.includes(products[key].category)) {
      category.push(products[key].category);
    }
  }
  return category;
};
