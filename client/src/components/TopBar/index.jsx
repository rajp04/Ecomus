import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaSquarePinterest } from "react-icons/fa6";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { FaAngleDown } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

function TopBar() {

  const [currentMessageIndex, setCurrentMessageIndex] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEl1(null);
  };

  const messages = [
    "Summer sale discount off 70%",
    "Time to refresh your wardrobe.",
    <div className="flex items-center" key='1'>
      Spring Fashion Sale
      <span className="text-[red] flex items-center border-b border-[red] ms-2">
        Shop now <FiArrowUpRight />
      </span>
    </div>,
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="bg-white border-b">
      <div className="flex items-center py-2 xlg:justify-between justify-center w-[95%] m-auto">
        <div className="xlg:flex hidden items-center space-x-3">
          <div className="bg-[#ebebeb] hover:bg-[#0d6efd] hover:text-white transition-all duration-150 rounded-full p-2">
            <FaFacebookF className="text-sm " />
          </div>
          <div className="bg-[#ebebeb] hover:bg-[#000000] hover:text-white transition-all duration-150 rounded-full p-2">
            <FaXTwitter className="text-sm " />
          </div>
          <div className="bg-[#ebebeb] hover:bg-[orange] hover:text-white transition-all duration-150 rounded-full p-2">
            <FaInstagram className="text-sm " />
          </div>
          <div className="bg-[#ebebeb] hover:bg-[#000000] hover:text-white transition-all duration-150 rounded-full p-2">
            <FaTiktok className="text-sm " />
          </div>
          <div className="bg-[#ebebeb] hover:bg-[red] hover:text-white transition-all duration-150 rounded-full p-2">
            <FaSquarePinterest className="text-sm " />
          </div>
        </div>
        <div>
          <h1 className="font-medium md:text-xl text-base">{messages[currentMessageIndex]}</h1>
        </div>
        <div className="xlg:flex hidden items-center">
          <div>
            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick1}
              className="topbar-color"
            >
              India
              <FaAngleDown className="topbar-angle" />
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl1}
              open={open1}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>India</MenuItem>
              <MenuItem onClick={handleClose}>United States</MenuItem>
              <MenuItem onClick={handleClose}>Germany</MenuItem>
              <MenuItem onClick={handleClose}>France</MenuItem>
            </Menu>
          </div>
          <div>
            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className="topbar-color"
            >
              English
              <FaAngleDown className="topbar-angle" />
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>English</MenuItem>
              <MenuItem onClick={handleClose}>Hindi</MenuItem>
              <MenuItem onClick={handleClose}>Gujrati</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar