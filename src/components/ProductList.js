// import React from 'react'

// const ProductList = ({cart,setCart}) => {
//   const addItem=(price)=>
//   {
//     setCart([...cart,price]) //this is called spread operator it will give total adding cart items+price
//   }
//   return (
//     <div>
//         <button onClick={()=>addItem(100)}>Add ₹100</button>
//         <button onClick={()=>addItem(200)}>Add ₹200</button>
//     </div>
//   )
// }

// export default ProductList
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <Stack direction="row" spacing={3} sx={{ m: 3 }}>
      <Card sx={{ width: 200 }}>
        <CardContent>
          <Typography variant="h6">Product A</Typography>
          <Typography>₹100</Typography>
          <Button
            variant="contained"
            sx={{ mt: 1 }}
            onClick={() => addToCart(100)}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>

      <Card sx={{ width: 200 }}>
        <CardContent>
          <Typography variant="h6">Product B</Typography>
          <Typography>₹200</Typography>
          <Button
            variant="contained"
            sx={{ mt: 1 }}
            onClick={() => addToCart(200)}
          >
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default ProductList;

