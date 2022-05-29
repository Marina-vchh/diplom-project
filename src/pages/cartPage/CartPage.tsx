import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { HocComponentCart } from "../../components/common-components/HocComponent"
import { Link } from "react-router-dom";
import Button from "../../components/common-components/button/Button";
import OrderBlock from "../../containers/order-block/OrderBlock";
import Footer from "../../containers/footer/Footer";
import "./cartPage.css";
interface ICartPage {
   data: IResult[];
};
interface IResult {
   userId: number;
   id: number;
   title: string;
   body: string;
};

const CartPage = () => {
   const { id } = useParams();
   const [data, setData] = useState<ICartPage | null>(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => updateState(data));

        const updateState = (data: ICartPage[keyof ICartPage]) => {
                setData({ data })
        }
    }, [id]);

   return (
      <div className="cart-page">
         <HocComponentCart data={data} />
         <OrderBlock text="Cart Totals" />
         <Link to={"/checkout"}>
            <Button disabled={false}
                    text="Proceed to checkout" 
                    className="button filled-background cart-block-button" />
         </Link>
         <Footer />
      </div>
   );
} ;

export default CartPage;