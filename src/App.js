import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name="NoaKhali" special="vibag"></District>
      <District name="Bbaria" special="Fighter"></District>
      <District name="Thakurgaon" special="NakGolainna"></District>
    </div>
  );
}

function LoadPost(){
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return(
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}

function Post(props){
  return(
    <div style={{backgroundColor: 'lightgreen', margin: '20px', border: '4px solid salmon'}}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

const districtStyle = {
  backgroundColor: 'aquamarine',
  margin: '20px',
  borderRadius: '20px',
  padding: '20px'
}
function District(props){
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower (newPower);
  }
  return(
    <div style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost the power</button>
    </div>
  )
}

export default App;
