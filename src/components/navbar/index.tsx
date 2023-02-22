import Logo from '../logo';
import Button from '../reusable/buttons';

const NavbarList = ['Home', 'Market Place', 'Notice Board', 'Academics'];
const Navbar = () => {
  return (
    <nav className="px-5 flex justify-between items-center">
      <Logo />
      <ul className="flex list-none">
        {NavbarList.map((item, index) => (
          <li key={index} className="mx-5 cursor-pointer text-base font-medium font-poppins tracking-wider hover:text-purple-600mx-3">
            {item}
          </li>
        ))}
      </ul>
      <div className="nav-buttons">
        <Button text="Login" onClick={() => console.log('Login')} />
        <Button text="Sign Up" onClick={() => console.log('Sign Up')} />
      </div>
    </nav>
  );
};

export default Navbar;
