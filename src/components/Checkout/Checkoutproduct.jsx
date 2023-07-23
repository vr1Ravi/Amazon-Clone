import "./Checkoutproduct.css";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../addedProductSlice";
// eslint-disable-next-line react/prop-types
const Checkoutproduct = ({ id, image, title, price, rating }) => {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch(removeProduct(id));
  };
  return (
    <div className="checkoutproduct">
      <img
        className="checkoutProduct-image "
        src={image}
        alt="Checkoutproduct"
      />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, id) => (
              <p key={id}>⭐</p>
            ))}
        </div>
        <button onClick={() => handleClick(id)}>Remove Item</button>
      </div>
    </div>
  );
};

export default Checkoutproduct;
