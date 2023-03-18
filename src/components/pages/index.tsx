import Card from '../item-card';
import Navbar from '../navbar';

const itemData = [
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
  {
    title: 'MSI GF63 Thin 9SC-062IN Laptop',
    price: '70,000',
    location: 'Parsa Bazar, Patna',
    date: 'June 20',
    image: 'https://4.imimg.com/data4/IL/XI/MY-27399509/old-hp-laptop-250x250.jpg',
  },
];

const Home = () => {

  return (
    <main>
      <Navbar />
      <div className="flex flex-wrap justify-center">
        {itemData.map((item, index) => (
          <Card key={index} title={item.title} price={item.price} location={item.location} date={item.date} image={item.image} />
        ))}
      </div>
    </main>
  );
};

export default Home;
