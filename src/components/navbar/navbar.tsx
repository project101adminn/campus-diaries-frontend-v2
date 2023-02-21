import Logo from '../logo/logo';
import Button from '../reusable/buttons';
function navbar() {
  return (
    <nav className="px-5 flex justify-between items-center">
      <Logo />
      <ul className='flex list-none'>
        <li className='mx-5 cursor-pointer text-base font-medium font-poppins tracking-wider hover:text-purple-600'>Home</li>
        <li className='mx-5 cursor-pointer text-base font-medium font-poppins tracking-wider hover:text-purple-600'>Market Place</li>
        <li className='mx-5 cursor-pointer text-base font-medium font-poppins tracking-wider hover:text-purple-600'>Notice Board</li>
        <li className='mx-5 cursor-pointer text-base font-medium font-poppins tracking-wider hover:text-purple-600'>Academics</li>
      </ul>
      <div className="nav-buttons">
        <Button text="Login" onClick={() => console.log('Login')} />
        <Button text="Sign Up" onClick={() => console.log('Sign Up')} />
      </div>
    </nav>
  );
}

export default navbar;
