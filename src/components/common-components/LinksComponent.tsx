import Cart from "../../containers/cart/Cart";
import Choose from "../../containers/choose/Choose"
import LoadingHOC from "../../containers/loadingHOC/LoadingHoc";

export const LinksComponentCart = LoadingHOC('data')(Cart);

export const LinksComponentChoose = LoadingHOC('data')(Choose);

