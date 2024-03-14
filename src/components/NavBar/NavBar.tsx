import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import './NavBar.css';
import { PiSignOut } from "react-icons/pi";
import { motion } from "framer-motion";
import { SidebarData } from '../../services/data';

interface SidebarDataItem {
  icon: React.ElementType;
  heading: string;
}

const Sidebar: React.FC = () => {

  const [selected, setSelected] = useState<number>(0);
  const [expanded, setExpanded] = useState<boolean>(true);

  const sidebarVariants: { [key: string]: { left: string } } = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  };

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <>
        <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={handleToggleExpand}>
          <FaBars />
        </div>
        <motion.div className='sidebar'
          variants={sidebarVariants}
          animate={window.innerWidth <= 768 ? `${expanded}` : ''}
        >
          {/* logo */}
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>
              Sh<span>o</span>ps
            </span>
          </div>

          <div className="menu">
            {SidebarData.map((item: SidebarDataItem, index: number) => {
              return (
                <div
                  className={selected === index ? "menuItem active" : "menuItem"}
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  <item.icon />
                  <span>{item.heading}</span>
                </div>
              );
            })}
            {/* signoutIcon */}
            <div className="menuItem">
              <PiSignOut />
            </div>
          </div>
        </motion.div>
      </>
    </>
  );
};

export default Sidebar;
