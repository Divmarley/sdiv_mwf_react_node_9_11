import "../styles/app.css";
import { Component } from "react";

function App() { 
  const fruits = ['mango','kiwi','banana','banana'];
  const accounts =[
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }, 
  ]
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>LOGIN</button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div> 
      <ul>
        {accounts.map((accountValue,accountIndex,accountArray)=><li key={accountValue["userId"]}>{accountValue['title']}----{accountValue["userId"]}</li>)}
      </ul>
    </div>
  );
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="login-page">
//       <div className="form">
//         <form className="login-form">
//           <input type="text" placeholder="username" />
//           <input type="password" placeholder="password" />
//           <button>LOGIN</button>
//           <p className="message">
//             Not registered? <a href="#">Create an account</a>
//           </p>
//         </form>
//       </div>
//     </div>
//     )
//   }
// }

// export default App;



// export default function Qwerty(){
//   return(<></>)
// }


// export default class Layout extends Component{
//   render(){
//     return (<></>)
//   }
// }
// // export default Layout;


// npm i -D react-router-dom

// npm i -D react-router-dom@latest