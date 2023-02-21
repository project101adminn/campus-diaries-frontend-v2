// import './logo.css';
import logoIcon from '../../assets/images/logo.svg';

function logo() {
  return (
    <div className="flex items-center justify-center cursor-pointer" onClick={() => { console.log("Home")}}>
      <img className="object-contain w-15" src={logoIcon} alt="logo" />
      <p className="font-poppins font-bold text-4xl text-purple-700">
        Saman <span className="text-black">Becho</span>
      </p>
    </div>
  );
}

export default logo;
