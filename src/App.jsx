import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Sample from './Sample';
import Footer from "./layout/Footer";

function App() {
  return (
    <><div>
          <Navbar />
          <Sidebar />
      </div><Sample />
      <Footer />
    </>
  );
}

export default App;