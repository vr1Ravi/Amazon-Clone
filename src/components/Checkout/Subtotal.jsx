import "./Sutotal.css";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
const Subtotal = () => {
  const addedProducts = useSelector((state) => state.addedProduct.value);
  return (
    <div className="subtoatal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({addedProducts.length + " items"}):{" "}
              <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={addedProducts.reduce(
          (acculator, item) => acculator + parseFloat(item.price),
          0
        )}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
