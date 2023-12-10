const foods = [
  {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8_000,
  },
  {
    id: 'FOOD_02',
    name: '짬뽕',
    price: 5_000,
  },
];

export default foods;

export const foodList = {
  restaurants: [
    {
      id: '1',
      category: '중식',
      name: '메가반점',
      menu: [
        {
          id: '1',
          name: '짜장면',
          price: 8000,
          image: 'http://localhost:3000/images/food1.png',
        },
        {
          id: '2',
          name: '짬뽕',
          price: 8000,
          image: 'http://localhost:3000/images/food2.png',
        },
        {
          id: '3',
          name: '탕수육',
          price: 14000,
          image: 'http://localhost:3000/images/food3.png',
        },
      ],
    },
    {
      id: '2',
      category: '한식',
      name: '메리김밥',
      menu: [
        {
          id: '4',
          name: '김밥',
          price: 3500,
          image: 'http://localhost:3000/images/food4.png',
        },
        {
          id: '5',
          name: '제육김밥',
          price: 5500,
          image: 'http://localhost:3000/images/food5.png',
        },
        {
          id: '6',
          name: '컵라면',
          price: 2000,
          image: 'http://localhost:3000/images/food6.png',
        },
      ],
    },
    {
      id: '3',
      category: '한식',
      name: '데브부엌',
      menu: [
        {
          id: '7',
          name: '제육덮밥',
          price: 10000,
          image: 'http://localhost:3000/images/food7.png',
        },
        {
          id: '8',
          name: '갈비탕',
          price: 11000,
          image: 'http://localhost:3000/images/food8.png',
        },
        {
          id: '9',
          name: '돈까스',
          price: 1000,
          image: 'http://localhost:3000/images/food9.png',
        },
      ],
    },
    {
      id: '4',
      category: '일식',
      name: '로드스시',
      menu: [
        {
          id: '10',
          name: '기본초밥',
          price: 14000,
          image: 'http://localhost:3000/images/food10.png',
        },
        {
          id: '11',
          name: '디저트',
          price: 10000,
          image: 'http://localhost:3000/images/food11.png',
        },
        {
          id: '12',
          name: '연어',
          price: 21000,
          image: 'http://localhost:3000/images/food12.png',
        },
      ],
    },
    {
      id: '5',
      category: '일식',
      name: '혹등고래카레',
      menu: [
        {
          id: '13',
          name: '기본카레',
          price: 9000,
          image: 'http://localhost:3000/images/food13.png',
        },
        {
          id: '14',
          name: '밥추가',
          price: 13000,
          image: 'http://localhost:3000/images/food14.png',
        },
        {
          id: '15',
          name: '카레우동',
          price: 14000,
          image: 'http://localhost:3000/images/food15.png',
        },
      ],
    },
    {
      id: '6',
      category: '한식',
      name: '메가김치찌개',
      menu: [
        {
          id: '16',
          name: '김치찌개 1인',
          price: 8000,
          image: 'http://localhost:3000/images/food16.png',
        },
        {
          id: '17',
          name: '비빔밥',
          price: 8000,
          image: 'http://localhost:3000/images/food17.png',
        },
        {
          id: '18',
          name: '김치',
          price: 6000,
          image: 'http://localhost:3000/images/food18.png',
        },
      ],
    },
  ],
};
