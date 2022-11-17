import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Pipe',
      email: 'pipemohz@mail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Arduino UNO R3',
      slug: 'arduino-uno-r3',
      category: 'Microcontroller boards',
      image: '/images/item1.jpg', // 679px × 829px
      price: 7,
      countInStock: 10,
      brand: 'Arduino',
      rating: 4.5,
      numReviews: 10,
      description: 'Microcontroller board based on the ATmega328P.',
    },
    {
      // _id: '2',
      name: 'Protoboard',
      slug: 'protoboard',
      category: 'Universal boards',
      image: '/images/item2.jpg',
      price: 3,
      countInStock: 0,
      brand: 'Generic',
      rating: 4.0,
      numReviews: 10,
      description: 'A board with holes that are internally electrically connected to each other.',
    },
    {
      // _id: '3',
      name: 'Resistors kit',
      slug: 'resistors',
      category: 'electric components',
      image: '/images/item3.jpg',
      price: 12,
      countInStock: 5,
      brand: 'Generic',
      rating: 4.5,
      numReviews: 14,
      description: 'Electric Resistance kit 1 % 17 values, 0 Ohm-1 M Ohm.',
    },
    {
      // _id: '4',
      name: 'Multimeter UNI-T UT33C',
      slug: 'multimeter-unit-ut33c',
      category: 'Measurement instruments',
      image: '/images/item4.jpg',
      price: 14,
      countInStock: 5,
      brand: 'UNI-T',
      rating: 4.5,
      numReviews: 10,
      description: 'UT33C Digital Multimeter.',
    },
  ],
};
export default data;
