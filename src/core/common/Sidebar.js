import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Sidebar({setShowRequest360}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
                  {/* <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem> */}
          <Wrapper>

    <h2>Stand out and let us <span> create your </span>digital twin !</h2>
         

      <List>
      <ListItem>
            <NavLink
              onClick={()=>setShowRequest360(true)}
              className={({ isActive, isPending }) =>
                isPending ? "pending link" : true ? "primary-btn link" : "link"
              }
            >
              Book a 3D Tour
            </NavLink>
          </ListItem>
              <Divider/>
          <ListItem >
            <NavLink
             to="/"
              className={({ isActive, isPending }) =>
                isPending ? " link pending" : isActive ? " link active" : "link"
              }
            >
              Home
            </NavLink>
          </ListItem>

          <ListItem>
            <NavLink
             to="Link2"
              className={({ isActive, isPending }) =>
                isPending ? "pending link" : isActive ? "active link" : "link"
              }
            >
              Blog
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
             to="Link3"
              className={({ isActive, isPending }) =>
                isPending ? "pending link" : isActive ? "active link" : "link"
              }
            >
              Gallery
            </NavLink>
          </ListItem>

      </List>
      </Wrapper>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{'display':'block','marginLeft':'auto' , 'color':'white','height':'40px'}} onClick={toggleDrawer(anchor, true)}>{<MenuIcon/>}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const Wrapper =styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    flex-direction: column;
    h2{
        font-size: calc(1.5vw + 12px);
        color: black;
        text-align: center;
        span{
        color: #A14AF9;

        }
    }
    .primary-btn{
      margin-top: 0;
      margin-bottom: 20px !important;
      margin: auto;
    }



`