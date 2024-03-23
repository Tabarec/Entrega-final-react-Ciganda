import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {
const { getTotalItems } = useContext(CartContext);
let total= getTotalItems();

  return (
    <Link to="/cart">
      <Badge badgeContent={total} showZero color="primary">
        <IoCartOutline size="30px" color="beige" />
      </Badge>
    </Link>
  );
};

export default CartWidget;