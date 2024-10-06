import Navbar from "./components/Navbar/Navbar";

const footerStyle = {
    padding: "20px",
    backgroundColor: "#000",
    color: "#fff"
};

function Footer() {
    return (
        <footer style={footerStyle}>
            Подвал
        </footer>
    );
}

function App() {
  return (
      <div>
          <Navbar/>
          <Footer/>
      </div>

  );
}

export default App;
