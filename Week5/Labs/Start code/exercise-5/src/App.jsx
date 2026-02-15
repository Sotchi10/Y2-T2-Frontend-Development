import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";
import { myItems } from "./data.js";

function App() {
  return (
    <>
        <Header />
        
        <div className="cards-view">
          <div className="cards-grid">
            {myItems.map((i) => (
              <Card item={i} />
            ))}
          </div>
        </div>
    </>
  );
}

export default App;
