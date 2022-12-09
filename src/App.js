import './App.css';
import NavBar from './Components/Nav';
import Hero from "./Components/Hero"
import Card from "./Components/Card"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <div className="cards-container">
        <Card img = 'Images/image1.png'
              description = "Life lessons with Katie Zaferes"
              price ="136"
              review = "6"
              rating = "5"/>
        <Card img = 'Images/image2.png'
              description = "Learn wedding photography"
              price ="126"
              review = "30"
              rating = "5"/>
       <Card img = 'Images/image3.png'
            description = "Group Mountain Biking"
            price ="30"
            review = "2"
            rating = "4.8"/>
      </div>
    </div>
  );
}

export default App;
