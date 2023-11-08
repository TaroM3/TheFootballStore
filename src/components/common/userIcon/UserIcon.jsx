import { Divider, Drawer } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import TabsUser from "../tabsUser/TabsUser";
import styles from "./UserIcon.module.css";
import CloseButton from "../closeButton/CloseButton";

const UserIcon = () => {
  const [state, setState] = useState({
    right: false,
  });

  // const types = ["Cash", "Credit Card", "Bitcoin"];
  // const [active, setActive] = useState(types[0]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <div>
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Link
              style={{ cursor: "pointer" }}
              onClick={toggleDrawer(anchor, true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="#6DF0F7"
                />
                <path
                  d="M22 22C22 18.13 17.7421 15 12.5 15C7.25786 15 3 18.13 3 22"
                  stroke="#6DF0F7"
                />
                <path d="M3 22H22" stroke="#6DF0F7" />
              </svg>
            </Link>

            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              <Box
                sx={{
                  width: 700,
                  backgroundColor: "black",
                  height: "90.8%",
                }}
              >
                <Box
                  sx={{
                    width: "70px",
                    height: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={toggleDrawer(anchor, false)}
                >
                  <CloseButton />
                </Box>

                <TabsUser />
              </Box>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default UserIcon;
