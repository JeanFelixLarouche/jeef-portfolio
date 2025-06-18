import "./App.css";
import BioCard from "./components/BioCard";
import ImageTextCard from "./components/ImageCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BioCard />
      </header>
      <div className="App-body">
        <ImageTextCard title="Aim Trainer" link="https://aimTrainer.myjeef.ca" imageUrl="./target.png" color="#ffeeee" />
        <ImageTextCard title="Coming soon..." link="" imageUrl="./stopwatch.png" color="#ffffff" />
      </div>
      <footer className="App-footer">
        <p>© 2025 Jeef Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
