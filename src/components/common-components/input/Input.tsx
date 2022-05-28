import React from "react";
import './input.css'

interface IInputProps {
   id: string,
   label: string,
   className: string,
   type: string,
   value: string,
   pattern: string
   changeValue: (arg: string) => void;
   onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({id, label, className, type, value, pattern, changeValue, onBlur}: IInputProps) => {
   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
      const { target } = e;
      const { value } = target as HTMLInputElement;
      if(value ) {
         changeValue(value);
      }
   }

   return (
      <div className="input-wrapper">
         <label htmlFor={id} className={className}>{label}</label>
            <input 
            onBlur={onBlur}
            value={value}
            id={id} 
            type={type}
            pattern={pattern}
            onChange={onChange}
            className={'input'} />
      </div>
   )
};

export default Input;