import { useState } from 'react';
import CounterContainer from '../counter/CounterContainer';
import styles from './CartProductCard.module.css';
import { useCart } from '../../../hooks/useCart';
// import CartContext from '../../../context/CartContext';

const CartProductCard = ({ product }) => {
  const [counter, setCounter] = useState(product.quantity);

  const { addToCart, removeById } = useCart();

  const changeQuantity = (counter) => {
    let data = {
      ...product,
      quantity: counter,
    };

    addToCart(data);
  };
  return (
    <div className={styles.cartItem}>
      {' '}
      <div className={styles.cartInfo}>
        <img className={styles.img} src={product.imgUrl} alt="" />{' '}
        <div className={styles.nombre}>
          <h2>{product.title}</h2>{' '}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <p style={{ color: 'var(--main)' }}>Size {product.size}</p>

            <CounterContainer
              counter={counter}
              setCounter={setCounter}
              changeQuantity={changeQuantity}
            />
          </div>
        </div>
      </div>
      <div>
        <svg
          onClick={() => removeById(product.id)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default CartProductCard;
