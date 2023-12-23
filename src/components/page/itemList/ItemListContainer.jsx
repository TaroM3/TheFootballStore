// import { useState, useEffect } from 'react';
// import { db } from '../../../firebaseConfig';
// import ItemList from './ItemList';
import styles from './ItemList.module.css';
import { Link, useParams } from 'react-router-dom';
// import { getDocs, collection, query, where } from 'firebase/firestore';
import useFirestore from '../../../hooks/useFirebase';
// import { useEffect, useState } from 'react';
import Whatsapp from '../../common/whatsappIcon/Whatsapp';
import { Breadcrumbs, Skeleton, Typography } from '@mui/material';
import ProductCard from '../../common/productCard/ProductCard';
import { useState } from 'react';

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const { subCategoryName } = useParams();

  const [data] = useFirestore({
    databaseName: 'products',
    category: categoryName,
    subCategory: subCategoryName,
    order: 'sold',
  });

  const [initialIndex, setInitialIndex] = useState(0);

  let lastItem = 12;

  const handleClickNext = () => {
    setInitialIndex(initialIndex + 12);
  };

  const handleClickPrev = () => {
    setInitialIndex(initialIndex - 12);
  };

  console.log(data.length);
  let arr = [1, 2, 3, 4];
  return (
    <div className={styles.itemList}>
      <Whatsapp />
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M6.125 13.125H23.625C23.8571 13.125 24.0796 13.2172 24.2437 13.3813C24.4078 13.5454 24.5 13.7679 24.5 14C24.5 14.2321 24.4078 14.4546 24.2437 14.6187C24.0796 14.7828 23.8571 14.875 23.625 14.875H6.125C5.89294 14.875 5.67038 14.7828 5.50628 14.6187C5.34219 14.4546 5.25 14.2321 5.25 14C5.25 13.7679 5.34219 13.5454 5.50628 13.3813C5.67038 13.2172 5.89294 13.125 6.125 13.125Z"
              fill="white"
            />
            <path
              d="M6.48686 14.0001L13.7441 21.2556C13.9084 21.4199 14.0007 21.6428 14.0007 21.8751C14.0007 22.1075 13.9084 22.3303 13.7441 22.4946C13.5798 22.6589 13.357 22.7512 13.1246 22.7512C12.8923 22.7512 12.6694 22.6589 12.5051 22.4946L4.63011 14.6196C4.54863 14.5383 4.48398 14.4418 4.43986 14.3355C4.39575 14.2292 4.37305 14.1152 4.37305 14.0001C4.37305 13.885 4.39575 13.7711 4.43986 13.6648C4.48398 13.5585 4.54863 13.4619 4.63011 13.3806L12.5051 5.50563C12.6694 5.34133 12.8923 5.24902 13.1246 5.24902C13.357 5.24902 13.5798 5.34133 13.7441 5.50563C13.9084 5.66993 14.0007 5.89277 14.0007 6.12513C14.0007 6.35749 13.9084 6.58033 13.7441 6.74463L6.48686 14.0001Z"
              fill="white"
            />
          </svg>
        </Link>
        <Link
          style={{ fontFamily: 'frontpageneue' }}
          underline="hover"
          color="var(--main)"
          to="/"
        >
          Inicio
        </Link>
        <Link
          style={{ fontFamily: 'frontpageneue' }}
          underline="hover"
          color="var(--main)"
          to="/products"
        >
          Productos
        </Link>
        <Typography
          style={{ fontFamily: 'frontpageneue', textTransform: 'capitalize' }}
          color="var(--main)"
        >
          {categoryName}
        </Typography>
      </Breadcrumbs>
      <div>
        <h1>
          {categoryName} {subCategoryName}
        </h1>
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {data.length > 0
          ? data
              .filter((x, index) => {
                return initialIndex <= index && index < initialIndex + lastItem;
              })
              .map((elemento) => {
                return <ProductCard key={elemento.id} elemento={elemento} />;
              })
          : arr.map((e) => {
              return (
                <div key={e}>
                  <Skeleton variant="rectangular" width={300} height={300} />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: '1.3rem' }}
                    width={100}
                  />
                </div>
              );
            })}
      </div>
      <div className={styles.btnContainer}>
        <button
          className={styles.btn}
          disabled={initialIndex < 12}
          onClick={handleClickPrev}
        >
          Anterior
        </button>
        <button
          className={styles.btn}
          disabled={
            data.filter((_, index) => {
              return initialIndex <= index && index < initialIndex + lastItem;
            }).length < 12
          }
          onClick={handleClickNext}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default ItemListContainer;
