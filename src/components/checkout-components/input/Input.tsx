import React from "react";
import './input.css'

interface IInputProps {
   id: string,
   label: string,
   className: string,
   type: string,
   value: string,
   changeValue: (arg: string) => void;
}

const Input = ({id, label, className, type, value, changeValue}: IInputProps) => {

   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
      const { target } = e;
      const { value } = target as HTMLInputElement;
      changeValue(value);
   }

   return (
      <div className="input-wrapper">
         <label htmlFor={id} className={className}>{label}</label>
            <input 
            onChange={onChange}
            value={value}
            id={id} 
            type={type}
            className={'input'} />
      </div>
   )
}

export default Input