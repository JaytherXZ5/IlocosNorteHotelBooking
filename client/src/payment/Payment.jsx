
import {PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js"
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
const Payment = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const price = searchParams.get('price');

  const exchangeRate = 0.020; // Hardcoded exchange rate for demonstration

  const convertedAmount = price * exchangeRate;

  return (
    <div>
        <h1>Have Great Day and Safe Travels!</h1>
        <img src="" alt="" />
        <p>
          <span className='book-price'>Total Booking price: ${convertedAmount}</span>
        </p>
        <PayPalScriptProvider options={{
          "client-id":
             "AckX_A6ot2lIW-0ZiWHkGknx43MZQBQGbnxm6rXLnrZGVOxOKLl6kLmiA173RFIZ81mFwlbk9lTTAvnr"
            }}
          >
          <PayPalButtons />
          createOrder={(data,actions)=>{
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: `${convertedAmount}`
                }
              }]
            })
          }}
        </PayPalScriptProvider>
        <Link to={"/"}> 
          <button type="submit">Pay ${convertedAmount}</button>
        </Link>
    </div>
  )
}

export default Payment