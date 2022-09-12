import logo from './logo.svg';
import './App.css';
import AdminForm from './Admin/AdminForm';
import AdminTable from './Admin/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AdminForm/>
        <AdminTable/>
      </header>
    </div>
  );
}

export default App;
