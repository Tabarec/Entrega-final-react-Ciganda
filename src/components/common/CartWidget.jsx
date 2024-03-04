import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} showZero color="primary">
        <IoCartOutline size="30px" color="beige" />
      </Badge>
    </Link>
  );
};

export default CartWidget;