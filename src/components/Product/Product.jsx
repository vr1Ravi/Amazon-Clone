import "./Product.css";

// eslint-disable-next-line react/prop-types
const Product = ({ title, price, image, rating }) => {
  return (
    <div className="product">
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
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
