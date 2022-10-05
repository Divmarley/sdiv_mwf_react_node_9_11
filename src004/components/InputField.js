function InputField(props) {
    return ( 
        <input type={props.inputType} placeholder={props.inputPlaceholder} 
        class={props.inputClass} />
        
     );
}

export default InputField;