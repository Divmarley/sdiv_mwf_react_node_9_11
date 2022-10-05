
import '../css/card.css';
 
export default function Card(props) {
    return ( 
        <div className={`operation ${props.bg_color}`}>
        <h2>Transfer money</h2>
        <form className="form form--transfer">
          {props.input} 
          {props.button} 
          {props.label}
        </form>
      </div>
        
       
    );
}
 