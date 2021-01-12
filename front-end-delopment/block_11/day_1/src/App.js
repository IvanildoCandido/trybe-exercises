import './App.css';

const taskList = ["Acordar", "Escovar os dentes", "Estudar", "Tomar café", "Descançar"]
const task = (value) => {
  return <li>{value}</li>;
};
function App() {
  return <ol>{taskList.map(taskItem => task(taskItem))}</ol>;
}

export default App;
