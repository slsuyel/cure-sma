import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../assets/Images/logocuresma.png';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [MobileMenu, setMobileMenu] = useState(false);

  const showDrawer = () => {
    setMobileMenu(true);
  };

  const onClose = () => {
    setMobileMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsFixed(offset > 0);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuItems = [
    {
      id: 1,
      label: 'Home',
      link: '/',
    },
    {
      id: 2,
      label: 'About',
      link: '/error',
    },
    {
      id: 3,
      label: 'Care & Support',
      link: '/error',
    },
    {
      id: 4,
      label: 'Advocacy',
      link: '/error',
    },
    {
      id: 5,
      label: 'Blog',
      link: '/error',
    },
    {
      id: 6,
      label: 'Contact',
      link: '/error',
    },
  ];

  return (
    <>
      <Navbar
        style={{ backgroundColor: 'white' }}
        expand="lg"
        fixed={isFixed ? 'top' : undefined}
        className={`py-2 px-2  font-maven ${isFixed ? 'container' : ''} ${
          isMobile ? 'd-none' : 'd-block'
        }`}
      >
        <div className="align-items-center d-flex w-100 px-2 ">
          <Navbar.Brand href="/" className="p-0 ">
            <img src={logo} alt="" width={150} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav "
            className="justify-content-between fs-5  fw-semibold gap-3 ms-4 "
          >
            {menuItems.map(item => (
              <NavLink key={item.id} to={item.link} className="nav-link ">
                {item.label}
              </NavLink>
            ))}
            <a
              style={{ background: '#FFD600' }}
              href="patient-register"
              target="_blank"
              className="btn  px-3 font-weight-bold fs-4 patient-register"
            >
              {' '}
              Patient Register{' '}
            </a>

            <Link
              to="/donate-now"
              className="header-donate-btn rounded-3 text-decoration-none text-white fs-4"
            >
              {' '}
              <i className="fas fa-heart"></i>DONATE
            </Link>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {isMobile && (
        <>
          <div className="align-items-center d-flex justify-content-between p-2 ">
            <Navbar.Brand href="/" className="p-1 ">
              <img
                src="https://curesmabangladesh.org/img/logocuresma.png"
                alt=""
                width={60}
              />
            </Navbar.Brand>
            <Button type="primary" className="rounded-0 " onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </div>

          <Drawer
            style={{ backgroundColor: '#be93b6', width: '60%' }}
            placement="left"
            onClose={onClose}
            open={MobileMenu}
          >
            {menuItems.map(item => (
              <NavLink key={item.id} to={item.link} className="nav-link ">
                {item.label}
              </NavLink>
            ))}
          </Drawer>
        </>
      )}
    </>
  );
};

export default Header;
