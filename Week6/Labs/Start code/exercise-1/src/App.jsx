import Header from "./components/Header"
import Score from "./components/Score";
import { HTML_RESULTS, PYTHON_RESULTS, JAVA_RESULTS, ENGLISH_RESULTS } from "./data";
import "./index.css";

function App() {
  return (
    <>
      <Header name="Sheesh"> </Header>

      <main className="scores-container">
        <Score courseName="HTML" courseResult={HTML_RESULTS}></Score>
        <Score courseName="PYTHON" courseResult={PYTHON_RESULTS}></Score>
        <Score courseName="JAVA" courseResult={JAVA_RESULTS}></Score>
        <Score courseName="ENGLISH" courseResult={ENGLISH_RESULTS}></Score>
      </main>
    </>
  );
}

export default App;
