// import React from 'react'

// const CartSummary = ({cart}) => {
//     //reduce()-add all items prices together
//     //sum-total value;
//     //price-current product price
//     //total-is final amount
//     //0-initial of total
//   const total=cart.reduce((sum,price)=>sum+price,0);
//   return (
//     <div>
//         <h3>Total Amount:₹{total}</h3>
//     </div>
//   )
// }

// export default CartSummary
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

const CartSummary = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <Typography variant="h6" sx={{ m: 3 }}>
        🛒 Cart is empty
      </Typography>
    );
  }

  const total = cartItems.reduce((sum, price) => sum + price, 0);

  return (
    <Paper sx={{ m: 3, p: 2 }}>
      <Typography variant="h6">Cart Summary</Typography>
      <Typography>Total Amount: ₹{total}</Typography>

      {cartItems.map((item, index) => (
        <Stack
          key={index}
          direction="row"
          justifyContent="space-between"
          sx={{ mt: 1 }}
        >
          <Typography>₹{item}</Typography>
          <Button
            color="error"
            variant="outlined"
            onClick={() => removeFromCart(index)}
          >
            Remove
          </Button>
        </Stack>
      ))}
    </Paper>
  );
};

export default CartSummary;
