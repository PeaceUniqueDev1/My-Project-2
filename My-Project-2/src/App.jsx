
import Counter from "./component/counter";
import "./App.css";

function App() {
    return (
        <div>
            <h1>Welcome to My React App</h1>

            <p>
                This is my counter application.
                Use the buttons below to change the count.
            </p>

            <Counter />
        </div>
    );
}

export default App;
