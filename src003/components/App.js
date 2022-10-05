
import Navbar from "./Navbar";
import '../css/app.css';
import Balance from "./Balance";
import Movement from "./Movement";
import Card from "./Card";
import Input from "./Input";
import Label from "./Label";
import Button from "./Button";
function App(){
    return (
        <>
            <Navbar/>

            <main className="app">
                <Balance/>
                <Movement/>
                <Card bg_color="operation--transfer" input={<> <Input mytype="text"/> <Input  mytype="number"/> </>}
                button={<Button/>}
                label={<><Label  labeltitle="Transfer to"/><Label  labeltitle="Amount"/></>}
                /> 
                <Card bg_color="operation--transfer" input={<>  <Input  mytype="number"/> </>}
                button={<Button/>}
                label={<><Label  labeltitle="Amount"/></>}
                /> 

                {/* <Card  bg_color="operation--close"/> */}
                {/* <Card title="Transfer money" color="operation--transfer " input={<><Input text="age"/><Input text="dsfs"/></>}/> 
                <Card title="Request loan"  color="operation--loan" input={<><Input text="age"/> </>}/> 
                <Card title="Close account"  color="operation--close"/>  */}

            </main>
        </>
    )
}

export default App;