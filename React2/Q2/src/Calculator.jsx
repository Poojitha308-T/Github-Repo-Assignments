import { useState } from "react"

function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("add");
    const [results, setResults] = useState([]);
    const performAction = () => {
        if (num1 === "" || num2 === "") return;

        const a = Number(num1);
        const b = Number(num2);
        let result;

        switch (operation) {
            case "add":
                result = a + b;
                break;
            case "subtract":
                result = a - b;
                break;
            case "multiply":
                result = a * b;
                break;
            default:
                return;
        }
        setResults((prev) => [...prev, result]);

    };

    return (
        <div>
            <h2>Calculator</h2>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
            </select>
            <button onClick={performAction}>Perform Action</button>
            <div>
                <h4>Results:</h4>
                <ul>
                    {results.map((res,index) =>(
                        <li key={index}>{res}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Calculator