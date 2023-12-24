import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { Image } from "react-bootstrap";
import DashboardProduct from "../../common/DashboardProduct/DashboardProduct";

// category: "retros",
// subCategory: "selecciones",
// imgUrl: [
//   "https://res.cloudinary.com/daq80uhh9/image/upload/v1697734437/thefootballstore/Argentina%20Retro%20Jersey%20Away%20World%20Cup%202006.webp",
// ],
// size: ["XXL", "XL", "L", "M", "S"],
// sold: 0,
// title: "Argentina Retro Jersey Away World Cup 2006",
const Dashboard = ({ products }) => {
  const [expanded, setExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (panel) => (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChangePage = (count) => {
    setCurrentPage(() => {
      currentPage + count;
    });
  };

  return (
    <div
      style={{
        padding: "3rem 0rem",
        with: "100%",
        display: "grid",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {products.map((product) => {
        return (
          <Accordion
            expanded={expanded === product.id}
            onChange={handleChange(product.id)}
            key={product.id}
          >
            <AccordionSummary
              //   expandIcon={<ExpandMoreIcon />}
              aria-controls={`${product.id}-content`}
              id={`${product.id}-header`}
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                <Image src={product.imgUrl} width={50}></Image>
              </Typography>
              <Typography sx={{ color: "text.primary" }}>
                {product.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DashboardProduct product={product} />
            </AccordionDetails>
          </Accordion>
        );
      })}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Button onClick={() => handleChangePage(-1)}>Anterior</Button>
        <p>{currentPage}</p>
        <Button onClick={() => handleChangePage(1)}>Siguiente</Button>
      </Box>
    </div>
  );
};

export default Dashboard;
