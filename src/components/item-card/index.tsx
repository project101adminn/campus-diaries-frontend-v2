import { GoLocation } from 'react-icons/go';
import { FaRupeeSign } from 'react-icons/fa';

interface CardProps {
  title: string;
  price: string;
  location: string;
  date: string;
  image: string;
}

function Card({ title, price, location, date, image }: CardProps) {
  return (
    <div className="w-60 h-80 bg-white shadow-lg rounded-3xl flex flex-col items-center justify-center p-4 m-4 cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out">
      <img className="w-40 filter drop-shadow-lg rounded-lg mb-2 " src={image} alt={title} />
      <p className="mb-2 flex items-center ">
        <FaRupeeSign /> {price}
      </p>
      <p className="text-center">{title}</p>
      <div className="p-2 flex flex-row justify-between w-full mt-2 mb-2">
        <p className="md:float-left md:relative md:text-sm md:text-gray-600 md:flex md:items-center md:justify-start">
          <GoLocation />
          {location}
        </p>
        <p className="md:float-right md:relative md:text-sm md:text-gray-600">{date}</p>
      </div>
    </div>
  );
}

export default Card;
