import logo from './logo.svg';
import './App.css';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useEffect, useState } from 'react';

function App() {
  const [likeColor, setLikeColor] = useState('');
  // const handleLike = () => {
  //   ;
  // }
  const [user, setUser] = useState([]);
const [singleUser, setSingleUser] = useState({});
const [randomUser, setRandomUser] = useState({});
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))

      // single user
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.json())
    .then(data => setSingleUser(data));

    // random user
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setRandomUser(data.results[0]));
  
  },[])
  return (
    <div>
      <ThumbUpAltIcon onClick={() => setLikeColor( likeColor ? '' : 'primary')} color={likeColor}></ThumbUpAltIcon>
      <h1>Name: {singleUser.name}</h1>
      <h2>Random Gender: {randomUser.gender}</h2>
      <h2>Random Name: {randomUser.name?.first}</h2>
      {
        user.map(user => <li>{user.name}</li>)
      }
    </div>
  );
}

export default App;
