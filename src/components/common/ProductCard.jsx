import { Link } from "react-router-dom";
import "./ProductCard.css" 
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
export const ProductCard = ({ img, title, description, price, id }) => {

  return (
    <Card className="card" sx={{ width: 500, height: 700, backgroundColor: "white"}}>
    <CardMedia
      sx={{ height: 250 }}
      image={img}
    />
    <CardContent sx={{ height: "250px" }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        textAlign={"center"}
      >
        {title}
      </Typography>
      <Typography variant="h6" color="text.secondary" textAlign={"center"}>
        {description}
      </Typography>
      <Typography variant="subtitle1" textAlign={"center"}>
        ${price}.-
      </Typography>
    </CardContent>
    <CardActions style={{ display: "flex", justifyContent: 'center' }}>
      <Link to={`/item/${id}`}>
        <Button
          variant="contained"
          size="small"
          sx={{ textTransform: "none", marginTop: "50px", fontSize: "17.5px" }}
        >
          Ver detalles
        </Button>
      </Link>
    </CardActions>
  </Card>
  );
};
