import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Cart from './components/Cart/Cart';
import RestaurantHistory from './components/RestaurantHistory/RestaurantHistory';
import Booking from './components/Booking/Booking';
import Dishes from './components/Dishes/Dishes';
import Comment from './components/Comments/Comment';
import MealPopular from './components/MealPopular/MealPopular';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <Cart />
        <RestaurantHistory />
        <Booking />
        <Dishes />
        <Comment />
        <MealPopular />
        <Footer />
    </div>
  );
}

export default App;
