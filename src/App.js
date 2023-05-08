import './App.css';


const Bio = () => {
  return (
    <>
      <h2>Hi, I'm Sashank!</h2>
      <p>A <b>learner</b>, <b>coder</b>, and <b>problem solver</b>.</p>
      <p style={{color: 'red'}}>This website is under construction. Stay tuned!</p>
    </>
  );
};


function App() {
  return (
    <div className="App">
      <Bio />
    </div>
  );
}



export default App;
