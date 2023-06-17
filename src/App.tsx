import Footer from './Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Routes from './components/Routes/Routes';

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
