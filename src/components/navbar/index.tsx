import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import Logo from '../logo';
import Button from '../reusable/buttons';
import './navbar.css';

const NavbarList = ['Home', 'Marketplace', 'About', 'Contact'];

const Navbar = () => {
  const navRef: any = useRef();

  const handleNav = () => {
    navRef.current.classList.toggle('responsive__nav');
  };

  return (
    <header className="flex justify-between items-center w-full p-2 ">
      <nav className="flex justify-between items-center w-full pl-16 pr-16">
        <Logo />
        <div className="flex justify-center items-center w-full toggle-menu" ref={navRef}>
          <FaTimes className="absolute p-2 bg-transparent border-none outline-none invisible opacity-0 text-5xl hover:text-purple-600 nav-btn" onClick={handleNav} />
          <div className="flex items-center float-center links">
            {NavbarList.map((item, index) => (
              <a key={index} className="m-0 p-4 cursor-pointer font-medium font-poppins tracking-wide hover:text-purple-600" href="/">
                {item}
              </a>
            ))}
          </div>

          <div className="float-left lg:hidden nav-mobile">
            <Button text="Login" onClick={() => console.log('Login')} />
            <Button text="Sign Up" onClick={() => console.log('Sign-Up')} />
          </div>
        </div>
        <div className=" float-left flex nav-buttons ">
          <Button text="Login" onClick={() => console.log('Login')} />
          <Button text="Sign Up" onClick={() => console.log('Sign-Up')} />
        </div>
      </nav>
      <FaBars className="absolute p-2 bg-transparent border-none outline-none invisible opacity-0 text-5xl hover:text-purple-600 nav-btn" onClick={handleNav} />
    </header>
  );
};

export default Navbar;
