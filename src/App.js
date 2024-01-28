import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Product from "./component/Product";

function App() {
  return (
     <>
      <Header />
      <Banner />
      <main id="main">
        <Product />
      </main>
      <Footer />
     </>
  );
}

export default App;
