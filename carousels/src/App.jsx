
import './App.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";


export default function App() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div className="App">
      <h1>Recent Listings</h1>
      <Carousel responsive={responsive}>
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
      </Carousel>
    </div>
  );
}
