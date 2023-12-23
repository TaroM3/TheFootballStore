import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import useFirestore from '../../../hooks/useFirebase';
// import { useContext } from 'react';
// import CartContext from '../../../context/CartContext';
import { Box, Skeleton } from '@mui/material';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../../../hooks/useCart';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item] = useFirestore({ databaseName: 'products', id });
  const { addToCart } = useCart();
  // const { addToCart } = useContext(CartContext);
  const talles = () => {
    Swal.fire({
      imageUrl:
        'https://res.cloudinary.com/daq80uhh9/image/upload/v1698767089/thefootballstore/Copia_de_Brochure_CMYK_1_omr8yw.jpg',
      imageWidth: 'auto',
      imageHeight: 'auto',
      heightAuto: false,
      imageAlt: 'Custom image',
      showConfirmButton: false,
      background: 'none',
      showCloseButton: true,
      closeButtonHtml: 'X',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
  };
  const agregarAlCarrito = (size, selectOption, quantity) => {
    if (size === '') {
      toast.error('Debe elegir el talle de la camiseta', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      let data = {
        id: id,
        ...item,
        quantity: quantity <= 0 ? 1 : quantity,
        size: size,
        selectOption: selectOption,
      };

      addToCart(data);
    }
  };
  return (
    <>
      {' '}
      {item?.title !== undefined ? (
        <ItemDetail
          item={item}
          agregarAlCarrito={agregarAlCarrito}
          talles={talles}
        />
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '2rem 0rem',
            // gap: "2rem",
            justifyContent: 'space-around',
          }}
        >
          <Skeleton variant="rectangular" width={500} height={500} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              width: '21.875rem',
            }}
          >
            <Skeleton variant="text" sx={{ fontSize: '32px' }} width={350} />
            <Skeleton variant="text" sx={{ fontSize: '1.3rem' }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: '1.3rem' }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: '1.3rem' }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: '1.3rem' }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: '1.3rem' }} width={100} />
            <Skeleton variant="text" sx={{ fontSize: '1.3rem' }} width={100} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default ItemDetailContainer;
