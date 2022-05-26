import React, { useState } from "react";
import Input from "../../components/checkout-components/input/Input";
import Title from "../../components/common-components/title/Title";
import Button from "../../components/common-components/button/Button";
import './form.css'

const Form = () => {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [tel, setTel] = useState("");
   const [mail, setMail] = useState("");
   const [country, setCountry] = useState("");
   const [city, setCity] = useState("");
   const [street, setStreet] = useState("");
   const [apartment, setApartment] = useState("");
   const [suite, setSuite] = useState("");
   const [postcode, setPostcode] = useState("");
   const [shipping, setShipping] = useState("");
   const [numberCard, setNumberCard] = useState("");
   const [cardHolder, setCardHolder] = useState("");
   const [expiryDate, setExpiryDate] = useState("");
   const [cvcCode, setCvcCode] = useState("");
   const [inputDirty, setInputDirty] = useState(false);
   const [inputError, setInputError] = useState("Поле не может быть пустым");
   const [isChecked, setIsChecked] = useState(false);

   const isValidToSubmit = firstName.length;

   const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      switch (e.target.name) {
         case "firstName":
            setInputDirty(true)
         break;
      }

   }

   function clearFields () {
      setFirstName('');
      // setLastName('');
      // setTel('');
      // setMail('');
      // setIsChecked(isChecked);
   }

   function submit (e:React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      console.log(firstName);
      clearFields();
   }

   return (
      <div className="body">
         <form className="form">
            <div className=" wrapper personal-wrapper">
               <Title text="Personal information" className="title-thin" />
                  {(inputDirty && inputError) && <div>{inputError}</div>}
                  <Input value={firstName} changeValue={setFirstName} onBlur={blurHandler} id={'name'} label = {'First Name'} pattern={""} className={'label'} type={'text'}/>
                  {/* <Input value={lastName} changeValue={setLastName} id={'name'} label = {'Last Name'} className={'label'} type={'text'}/> */}
                  {/* <Input value={tel} changeValue = {setTel} id={'tel'} label = {'Phone'} pattern={"[\+]375\s[\(]\d{2}[\)]\s\d{3}[\-]\d{2}[\-]\d{2}"} className={'label'} onBlur={} type={'tel'}/> */}
                  {/* <Input value={mail} changeValue={setMail} id={'mail'} label = {'Email'} className={'label'} type={'email'}/> */}
                  <Title text="Shipping" className="title-thin" />
            </div>
            {/* <div>
               <Input value={shipping} changeValue={setShipping} id={'next-day'} label = {'Next day delivery'} className={'label'} type={'radio'}/>
               <Input value={shipping} changeValue={setShipping} id={'in-store'} label = {'Pick up in-store'} className={'label'} type={'radio'}/>
            </div> */}
            {/* <div className="wrapper address-wrapper">
               <Title text="Address" className="title-thin" />
                  <Input value={country} changeValue={setCountry} id={"country"} label = {"Country"} className={"label"} type={"text"}/>
                  <Input value={city} changeValue={setCity} id={"city"} label = {"City"} className={"label"} type={"text"}/>
                  <Input value={street} changeValue = {setStreet} id={"street"} label = {"Street"} className={"label"} type={"tel"}/>
                  <Input value={apartment} changeValue={setApartment} id={"apartment"} label = {"Apartment"} className={"label"} type={"email"}/>
                  <Input value={suite} changeValue={setSuite} id={"suite"} label = {"Suite"} className={"label"} type={"email"}/>
                  <Input value={postcode} changeValue={setPostcode} id={"postcode"} label = {"Postcode"} className={"label"} type={"email"}/> */}
            {/* </div>
            <div className="wrapper payment-wrapper">
               <Title text="Payment details" className="title-thin" />
                  <Input value={numberCard} changeValue={setNumberCard} id={"numberCard"} label = {"NumberCard"} className={"label"} type={"tel"}/>
                  <Input value={cardHolder} changeValue={setCardHolder} id={"cardHolder"} label = {"CardHolder"} className={"label"} type={"tel"}/>
                  <Input value={expiryDate} changeValue={setExpiryDate} id={"expiryDate"} label = {"ExpiryDate"} className={"label"} type={"tel"}/>
                  <Input value={cvcCode} changeValue={setCvcCode} id={"cvcCode"} label = {"CvcCode"} className={"label"} type={"tel"}/>
            </div> */}
            <Button text="Complete" className="button filled-background submit" disabled={!isValidToSubmit} onClick={submit} />
         </form>
      </div>
   )
}

export default Form