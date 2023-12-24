import { Box } from "@mui/material";
import { useRef } from "react";
import styles from "./DashboardProduct.module.css";

const DashboardProduct = ({ product }) => {
  const titleRef = useRef();
  const categoryRef = useRef();
  const subCategoryRef = useRef();
  const soldRef = useRef();

  //   const [productState, setProductState] = useState({
  //     title: product.title,
  //     category: product.category,
  //     subCategory: product.subCategory,
  //     imgUrl: [...product.imgUrl],
  //   });

  //   const handleChange = () => {};

  const updateProduct = () => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "text.secondary",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form id={`mod${product.id}`} className={styles.formDashboard}>
        {/* <div> */}
        <label>Título </label>
        <input
          type="text"
          name="title"
          defaultValue={product.title}
          //   onChange={handleChange}
          ref={titleRef}
        />
        {/* </div> */}
        {/* <div> */}
        <label>Categoría </label>
        <input
          type="text"
          name="category"
          defaultValue={product.category}
          //   onChange={handleChange}
          ref={categoryRef}
        />
        {/* </div> */}
        {/* <div> */}
        <label>Subcategoría </label>
        <input
          type="text"
          name="subCategory"
          defaultValue={product.subCategory}
          //   onChange={handleChange}
          ref={subCategoryRef}
        />
        {/* </div> */}
        {/* <div> */}
        <label>Vendidas </label>
        <input
          type="number"
          name="sold"
          defaultValue={product.sold}
          ref={soldRef}
          //   onChange={handleChange}
        />
        {/* </div> */}
        {/* <div> */}
        <label
          htmlFor={`fileUpload${product.id}`}
          className={styles.imgSelection}
        >
          Agregar foto{" "}
        </label>
        <input id={`fileUpload${product.id}`} type="file" name="imgUrl" />
        {/* </div> */}
        <button
          type="submit"
          onClick={updateProduct}
          className={styles.btnModify}
        >
          Modificar
        </button>
      </form>
    </Box>
  );
};

export default DashboardProduct;
