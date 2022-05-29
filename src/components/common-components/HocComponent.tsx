import Cart from "../../containers/cart/Cart";
import Choose from "../../containers/choose/Choose"
import LoadingHOC from "../../containers/loadingHOC/LoadingHoc";

export const HocComponentCart = LoadingHOC('data')(Cart);

export const HocComponentChoose = LoadingHOC('data')(Choose);

