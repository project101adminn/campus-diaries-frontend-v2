import logoIcon from '../../assets/images/logo.svg';

const Logo = () => {
  return (
    <div
      className=" flex justify-center items-center w-72 "
      onClick={() => {
        console.log('Home');
      }}
    >
      <img className="w-12" src={logoIcon} alt="logo" />
      <p className="font-poppins font-bold text-3xl text-purple-700 flex items-center ">
        Saman <span className="text-black">Becho</span>
      </p>
    </div>
  );
};

export default Logo;
