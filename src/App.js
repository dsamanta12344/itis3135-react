import './App.css';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div className="app">

      {/* HEADER COMPONENT */}
      <Header />

      {/* MAIN */}
      <main>
        <h2>ITIS 3135 Home</h2>
        <p>This is all the content for my ITIS 3135 class</p>
      </main>

      {/* FOOTER COMPONENT */}
      <Footer />

      {/* External script example (optional, usually not needed in React) */}
      <script src="scripts/HTMLInclude.min.js"></script>

    </div>
  );
}

export default App;
