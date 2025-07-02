import './App.css'
import HomePage from './pages/Home/Home.jsx'
import { InventoryProvider } from './context/InventoryContext.jsx';

function App() {
  return (
    <InventoryProvider>
      <HomePage />
    </InventoryProvider>
  );
}

export default App;
