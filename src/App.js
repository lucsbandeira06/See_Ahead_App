import NavBar from './navigation/navbar';
import Footer from './components/footer';

function App() {
  return (

    <div className="App">
      <header>
      <NavBar></NavBar>
      </header>
      <div className="container w-4/5 mx-auto bg-white-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome to SeeAhead!
      </p>
      <p className="text-gray-500 text-lg">
        Book your accommodation for the best prices in the market!
      </p>
      </div>

      <div className="Footer">  
        <Footer></Footer>
      </div>

    </div>
  );
}
export default App;
