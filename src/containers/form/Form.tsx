import React, { useState } from "react";
import Input from "../../components/common-components/input/Input";
import Title from "../../components/common-components/title/Title";
import SubmitButton from "../../components/common-components/button/SubmitButton";
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

   const isValidToSubmit = firstName.length && lastName.length && tel.length && mail.length && country.length && city.length && street.length && apartment.length && suite.length && postcode.length && numberCard.length &&cardHolder.length && expiryDate.length && cvcCode.length;

   function clearFields () {
      setFirstName("");
      setLastName("");
      setTel("");
      setMail("");
      setCountry("");
      setCity("");
      setStreet("");
      setApartment("");
      setSuite("");
      setPostcode("");
      setNumberCard("");
      setCardHolder("");
      setExpiryDate("");
      setCvcCode("");
   }

   function submit (e:React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      console.log(firstName,
      lastName,
      tel,
      mail,
      country,
      city,
      street,
      apartment,
      suite,
      postcode,
      numberCard,
      cardHolder,
      expiryDate,
      cvcCode)
      clearFields()
   }

   return (
         <form className="form">
            <div className=" wrapper personal-wrapper">
               <Title text="Personal information" className="title-thin" />
                  <Input value={firstName} 
                        changeValue={setFirstName} 
                        id={'name'} 
                        label = {'First Name'} 
                        className={'label'}
                        classNameInput={"input"}
                        type={'text'}/>
                  <Input value={lastName} 
                         changeValue={setLastName}
                         id={'name'} 
                         label = {'Last Name'}
                         classNameInput={"input"}
                         className={'label'} 
                         type={'text'}/>
                  <Input value={tel} 
                         changeValue={setTel} 
                         id={'tel'} 
                         label={'Phone'} 
                         className={'label'}
                         classNameInput={"input"} 
                         type={'tel'}/>
                  <Input value={mail} 
                         changeValue={setMail} 
                         id={'mail'} 
                         label = {'Email'} 
                         className={'label'}
                         classNameInput={"input"} 
                         type={'email'}/>
            </div>
             <div className="wrapper address-wrapper">
               <Title text="Address" className="title-thin" />
                  <Input 
                  value={country} 
                  changeValue={setCountry} 
                  id={"country"} 
                  label={"Country"} 
                  className={"label"}
                  classNameInput={"input"}
                  type={"text"}/>
                  <Input value={city} 
                         changeValue={setCity} 
                         id={"city"} 
                         label = {"City"} 
                         className={"label"}
                         classNameInput={"input"} 
                         type={"text"}/>
                  <Input value={street} 
                         changeValue={setStreet} 
                         id={"street"} 
                         label={"Street"} 
                         className={"label"}
                         classNameInput={"input"} 
                         type={"tel"}/>
                  <div className="input-group">
                     <Input value={apartment} 
                         changeValue={setApartment} 
                         id={"apartment"} 
                         label={"Apartment"} 
                         className={"label"}
                         classNameInput={"input input-small"}
                         type={"email"}/>
                     <Input value={suite} 
                           changeValue={setSuite} 
                           id={"suite"} 
                           label={"Suite"}
                           className={"label label-small"}
                           classNameInput={"input input-small"} 
                           type={"email"}/>
                  </div>
                  <Input value={postcode} 
                        changeValue={setPostcode} 
                        id={"postcode"} 
                        label={"Postcode"} 
                        className={"label"}
                        classNameInput={"input input-small"} 
                        type={"email"}/>
             </div>
            <div className="wrapper payment-wrapper">
               <Title text="Payment details" className="title-thin" />
                  <Input value={numberCard} 
                         changeValue={setNumberCard} 
                         id={"numberCard"} 
                         label = {"NumberCard"} 
                         className={"label"}
                         classNameInput={"input"} 
                         type={"tel"}/>
                  <Input value={cardHolder} 
                         changeValue={setCardHolder} 
                         id={"cardHolder"} 
                         label = {"CardHolder"} 
                         className={"label"}
                         classNameInput={"input"}
                         type={"tel"}/>
                  <div className="input-group">
                     <Input value={expiryDate} 
                           changeValue={setExpiryDate} 
                           id={"expiryDate"} 
                           label={"ExpiryDate"} 
                           className={"label"}
                           classNameInput={"input input-small"}
                           type={"tel"}/>
                     <Input value={cvcCode} 
                           changeValue={setCvcCode} 
                           id={"cvcCode"} 
                           label={"CvcCode"} 
                           className={"label label-small"}
                           classNameInput={"input input-small"}
                           type={"password"}/>
                  </div>
            </div>
            <SubmitButton text="Complete" 
                    disabled={!isValidToSubmit} 
                    onClick={submit} />      
         </form>
   )
}

export default Form;