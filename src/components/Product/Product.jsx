import "./Product.css";
import AddedProductContext from "../../AddedProductContext";
import { useContext } from "react";
// eslint-disable-next-line react/prop-types
const Product = ({ id, title, price, image, rating }) => {
  let [addedProductState, setAddedProduct] = useContext(AddedProductContext);
  const handleClick = () => {
    let addedProduct = addedProductState.addedProduct;
    addedProduct.push({ title, price, image, rating });
    setAddedProduct({
      ...addedProductState,
      addProductCount: ++addedProductState.addProductCount,
      addedProduct: addedProduct,
    });
    console.log(addedProductState.addedProduct);
  };
  return (
    <div id={id} className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, id) => (
              <p key={id}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="ProductImage" />
      <button onClick={() => handleClick()}>Add to Basket</button>
    </div>
  );
};

export default Product;
