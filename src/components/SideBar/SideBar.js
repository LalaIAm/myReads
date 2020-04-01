import React, { useState, useRef } from "react";
import { Menu, Ref, Segment, Sidebar, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const SideBar = ({ children }) => {
  const segmentRef = useRef();
  const [visible, setVisible] = useState(false);

  const openMenu = event => {
    setVisible(true);
  };

  return (
    <Sidebar.Pushable as={Segment.Group} raised>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        target={segmentRef}
        visible={visible}
        width='wide'
      >
        <div className='sidebar-menu'>
          <h2>MyReads</h2>
          <ul className='sidebar-list'>
            <li className='sidebar-item'>
              <Link to='/'>
                <p className='menu-link'>My Shelves</p>
              </Link>
            </li>
            <li className='sidebar-item'>
              <Link to='/search'>
                <p className='menu-link'>Search Books</p>
              </Link>
            </li>
          </ul>
        </div>
      </Sidebar>

      <Ref innerRef={segmentRef}>
        <Segment>
          <div className='header'>
            <Button onClick={openMenu}>Menu</Button>
            <h1>MyReads</h1>
          </div>
          {children}
        </Segment>
      </Ref>
    </Sidebar.Pushable>
  );
};

export default SideBar;
