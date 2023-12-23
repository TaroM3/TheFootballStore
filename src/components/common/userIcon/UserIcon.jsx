import { Divider, Drawer } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TabsUser from '../tabsUser/TabsUser';
import styles from './UserIcon.module.css';
import Profile from '../profile/Profile';
import CloseButton from '../closeButton/CloseButton';
import { auth } from '../../../firebaseConfig';
import { useUser } from '../../../hooks/useUser';

const UserIcon = () => {
  const isLoggedIn = auth.currentUser;
  const { login, name } = useUser();
  const [state, setState] = useState({
    right: false,
  });

  if (isLoggedIn && name === '') {
    const uidToken = auth.currentUser.uid;
    login({ uidToken });
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const close = toggleDrawer('right', false);

  return (
    <>
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Link
              style={{ cursor: 'pointer' }}
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
                  width: { xs: '100vw', md: '70vw', lg: '35vw' },
                  backgroundColor: 'black',
                  height: '100vh',
                }}
              >
                <div className={styles.titulo}>
                  <h1>The Foothball Store</h1>{' '}
                  {/* <Box onClick={toggleDrawer(anchor, false)}> */}
                  <Box onClick={close}>
                    <CloseButton />
                  </Box>
                </div>
                <Divider color="white" style={{ margin: '20px 0px ' }} />
                {isLoggedIn !== null ? (
                  <Profile toggleDrawer={toggleDrawer} />
                ) : (
                  <TabsUser toggleDrawer={toggleDrawer} />
                )}
              </Box>
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default UserIcon;
