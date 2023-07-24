import "./Product.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../addedProductSlice";
// eslint-disable-next-line react/prop-types
const Product = ({ id, title, price, image, rating }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addProduct({ id, title, price, image, rating }));
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
