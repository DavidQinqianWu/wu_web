import { MainPage } from './pages/home';
import './app.css';
import { Day1 } from './pages/day1';

function App() {
    return (
        <div className="App">
            <MainPage></MainPage>
            <div className="canvas">
                <Day1></Day1>
                {/* day2 */}
            </div>
        </div>
    );
}

export default App;
