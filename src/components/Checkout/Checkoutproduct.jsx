import "./Checkoutproduct.css";
import { useContext } from "react";
import AddedProductContext from "../../AddedProductContext";

// eslint-disable-next-line react/prop-types
const Checkoutproduct = ({ id, image, title, price, rating }) => {
  const [addedProductState, setAddedProduct] = useContext(AddedProductContext);

  const handleClick = (id) => {
    console.log(id);
    const filterdProduct = addedProductState.addedProduct.filter(
      (product, idx) => idx !== id
    );

    setAddedProduct({
      ...addedProductState,
      addedProduct: filterdProduct,
      addProductCount: filterdProduct.length,
    });
    console.log(addedProductState.addedProduct);
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
