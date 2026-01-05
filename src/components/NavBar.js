// import React from 'react'

// const NavBar = ({cartCount}) => {
//   return (
//     <div>
//         <h3>Cart Item:{cartCount}</h3>
//     </div>
//   )
// }

// export default NavBar
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Store
        </Typography>

        <Badge badgeContent={cartItems.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

