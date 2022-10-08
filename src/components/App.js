import "../Style/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}> 
            <Route index element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

// const storeRoom = [
//     {'id': 1,'productTitle' :'iphon2','img':'https://bootdey.com/img/Content/avatar/avatar3.png','price':1000 },
//     {'id': 2,'productTitle' :'laptop','img':'https://bootdey.com/img/Content/avatar/avatar5.png','price':200},
//     {'id': 3,'productTitle' :'car','img':'https://bootdey.com/img/Content/avatar/avatar6.png','price':30},
//     {'id': 4,'productTitle' :'books','img':'https://bootdey.com/img/Content/avatar/avatar5.png','price':100},
//     {'id': 5,'productTitle' :'books','img':'https://bootdey.com/img/Content/avatar/avatar3.png','price':100},
// ];
// <div className="container">
//     <div className="row">
//         {storeRoom.map((item)=> <div key={item.id}>
//             <div className="product-card" >
//             <div className='productImg'>
//             <img alt="Product" height='150' width='100%'  src={item.img}/>
//             </div>
//             <div className='productTitle'>
//                 <h2>{item.productTitle}</h2>
//             </div>
//             <div className='productprice'>
//             <h3>{item.price}$</h3>
//             </div>
//         </div>
//         </div>
//         )}

//     </div>

// </div>
