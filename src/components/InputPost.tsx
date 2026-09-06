
import { ChangeEvent } from "react";
import "./inputStyle.css";

type OwnProps  = {
    name?: string;
    className?: string;
    type?: string;
    value?: string;
    required?: boolean;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputPost = ({name, className = "input", type, value, placeholder, onChange, required = false} : OwnProps ) => {
  return (
    <input 
    name={name}
    className={className}
    type={type} 
    value={value} 
    placeholder={placeholder} 
    onChange={onChange}
    required ={ required}
    />
  )
}
