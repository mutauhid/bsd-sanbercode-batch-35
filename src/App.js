import logo from './logo.svg';
import './App.css';
import Gambar from '../src/assets/img/logo.png';

function Todolist(props) {
  return <label for="todolist">Belajar {props.name}</label>;
}

function App() {
  return (
    <div className="container">
      <img src={Gambar}></img>
      <p className="tittle">THINGS TO DO</p>
      <p>
        <span>During bootcamp in sanbercode</span>
      </p>
      <div className="checkbox">
        <div className="checkboxlist">
          <input type="checkbox" name="todolist" />
          <Todolist name="GIT & CLI" />
        </div>
        <div className="checkboxlist">
          <input type="checkbox" name="todolist" />
          <Todolist name="HTML & CSS" />
        </div>
        <div className="checkboxlist">
          <input type="checkbox" name="todolist" />
          <Todolist name="Javascript" />
        </div>
        <div className="checkboxlist">
          <input type="checkbox" name="todolist" />
          <Todolist name="ReactJS Dasar" />
        </div>
        <div className="checkboxlist">
          <input type="checkbox" name="todolist" />
          <Todolist name="ReactJS Advance" />
        </div>
      </div>
      <>
        <button>SEND</button>
      </>
    </div>
  );
}

export default App;
