import "./Sutotal.css";
import CurrencyFormat from "react-currency-format";
import { useContext } from "react";
import AddedProductContext from "../../AddedProductContext";
const Subtotal = () => {
  // eslint-disable-next-line no-unused-vars
  const [addedProductState, _] = useContext(AddedProductContext);
  return (
    <div className="subtoatal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({addedProductState.addProductCount + " items"}):{" "}
              <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={addedProductState.addedProduct.reduce(
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
