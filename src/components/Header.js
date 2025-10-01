import { useEffect, useState, useRef } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSideBar] = useState(false);
  const sidebarRef = useRef(null);
  const iconRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1006) {
        setMobile(true);
      } else {
        setMobile(false);
        setSideBar(false); // close sidebar when switching to desktop
      }
    };

    handleResize(); // check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setSideBar(false);
      }
    };
    if (sidebar) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebar]);
   // Prevent background scroll when sidebar is open
  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebar]);

  return (
    <header className="header">
      <div className="logo">FTU Florida Tech University</div>

      {/* Hamburger icon for mobile */}
      {mobile && (
        <div className="menu-icon" ref={iconRef}>
          {sidebar ? (
            <IoMdClose size={30} onClick={() => setSideBar(false)} />
          ) : (
            <GiHamburgerMenu size={30} onClick={() => setSideBar(true)} />
          )}
        </div>
      )}

      {/* Navigation menu for larger screens */}
      {!mobile && (
        <nav className="nav-menu">
          <ul>
            <li>FTU Website</li>
            <li>Payment</li>
          </ul>
        </nav>
      )}

      {/* Sidebar for mobile */}
      <div className={`sidebar ${sidebar ? 'open' : ''}`} ref={sidebarRef}>
        <ul>
          <li><a href="#FTU">FTU Website</a></li>
          <li><a href="#Payment">Payment</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
