import logo from './logo.svg';
import './App.css';

function App() {
  const allproduct =[
    {
      "name": "Potato",
      "id": 1,
      "price": 30,
      "available": 1,
      "vendor": "Himachal Pvt Ltd",
      "category": "Vegetables",
      "image": "/images/potatoes.jpg"
    },
    {
      "name": "Banana",
      "id": 2,
      "price": 50,
      "available": 1,
      "category": "Fruits",
      "vendor": "Organic farms",
      "image": "/images/Banana.jpg" 
  
    },
    {
      "name": "Drumsticks",
      "id": 3,
      "price": 20,
      "available": 0,
      "category": "Vegetables",
      "vendor": "Mallikarjuna farms",
      "image": "/images/Drumsticks.jpg"
    },
    {
      "name": "Orange",
      "id": 4,
      "price": 25,
      "available": 1,
      "vendor": "Nagpur farms",
      "category": "Fruits",
      "image": "/images/Orange.jpg"
    }
  ];
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
