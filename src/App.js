import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  id: 1,
  image: 'https://source.unsplash.com/random/64x64?sig=1',
  name: '홍길동',
  birthday: '950930',
  gender: '남자',
  job: '프로그래머'
}, {
  id: 2,
  image: 'https://source.unsplash.com/random/64x64?sig=2',
  name: '심청이',
  birthday: '940612',
  gender: '여자',
  job: '디자이너'
}, {
  id: 3,
  image: 'https://source.unsplash.com/random/64x64?sig=3',
  name: '철수',
  birthday: '980715',
  gender: '남자',
  job: '대학생'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;
