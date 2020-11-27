
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  
  const nayoks = ['Mahammad', 'Salman', 'Shakib', 'Bappi','Shova',]
  const Products =[
        {name: "Photoshop", Price: "$99.60"},
        {name: "Illastrator", Price: "$60.99"},
        {name: "PDF Read", Price: "$6.70"},
        {name: "Premier El", Price :"$243.56"}
     ]

  const friends =[
        {name: 'Arman Khan', age: '12'},
        {name: 'Salman Khan', age: '23'},
        {name: 'Kalam Khan', age: '24'},
        {name: 'Alom Khan', age: '25' }
     ]

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            friends.map(friend => <li>{friend.name}</li>)
          }
          { 
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            Products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          Products.map(product => <Product product={product}></Product>)
          
        }
        {
          friends.map(fri => <Container friend={fri}></Container>)
        }
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onMouseMove={ () => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUser]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map ( user => <li>{user.email}</li>)
        }
      </ul>
    </div>
   
  )
}
function Product(props){
  const productStyle={
    border: "1px solid crimson",
    margin: "10px",
    padding: "10px",
    width: "200px",
    height: "200px",
    flex: "left",
    color: "white",
    backgroundColor:"gray",
    borderRadius:"5px"
  }
  const {name, Price} = props.product;
  console.log(name, Price);

  
 
  return(
    <div style={productStyle}>
      
      <h3>{props.product.name}</h3>
      <h2>{props.product.Price}</h2>
      <button>Buy Now</button>
    </div>
  );
}

function Container(props){
  const contentStyle={
    border: "1px solid crimson",
    margin: "10px",
    padding: "10px",
    width: "200px",
    height: "200px",
    flex: "left",
    color: "white",
    backgroundColor:"gray",
    borderRadius:"5px"
  }
  const {name, age} = props.friend;
  console.log(name, age);

  
 
  return(
    <div style={contentStyle}>
      
      <h3>{props.friend.name}</h3>
      <h2>Age: {props.friend.age}</h2>
      <button>Attraction</button>
    </div>
  );
}




export default App;

