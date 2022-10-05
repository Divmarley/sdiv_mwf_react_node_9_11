import '../css/app.css';
import Balance from './Balance';
import Navbar from './Navbar';
function App() {
    return ( 
        <>
            <Navbar/>
            <main className="app">
                <Balance/>
            </main>
        </>
     );
}

export default App;