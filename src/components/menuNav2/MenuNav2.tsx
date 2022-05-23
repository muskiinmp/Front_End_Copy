import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';



import './MenuNav2.css'

export default function BasicMenu2() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box >

      <Button
        id="basic-button"
        aria-owns={anchorEl ? 'basic-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}

        style={{ fontFamily: "Jacques Francois", fontSize: '15px', textTransform: 'none', color: 'white' }}
        className='bnt-nav'

      >
        Categoria
      </Button>
      <Menu

        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}

      >
        <Link className='text-decoration-none' to='/categorias'>
          <MenuItem
            style={{
              color: 'white',
              fontFamily: 'serif',
              fontSize: '18px',
            }}
            onClick={handleClose}>Categorias</MenuItem>
        </Link>

        <Link className='text-decoration-none' to='/criarCategoria'>
          <MenuItem
            style={{
              color: 'white',
              fontFamily: 'serif',
              fontSize: '18px',
            }}
            onClick={handleClose}>Cadastrar categoria</MenuItem>
        </Link>

      </Menu>
    </Box>
  );
}
