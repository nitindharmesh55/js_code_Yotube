import styles from "./ContactForm.module.css";
import contactimg from "../../images/undraw_workspace_s6wf.png";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";


import { useState } from 'react'
import Button from "../buttons/Button";

export const ContactForm = () => {
  let [name, setName] = useState("Nitin")
  let [email, setEmail] = useState("Nitin@google.com")
  let [text, setText] = useState("Love is nothing more")

  const onSub = (event) =>{
    event.preventDefault();
     setName(event.target[0].value)
     setEmail( event.target[1].value);
     setText( event.target[2].value);
    console.log(event.target[0].value);
    
  }
  return (
    <section className={`${styles.container}`}>
     
     {/* Cotact form */}

     <div className={`${styles.contact_form}`}>
        <div className={`${styles.topButton}`}>
             <Button
             
             
             
             text={"Via Chat Support"} icon={<MdMessage fontSize={"24px"} />} />
             <Button  text={"Via Call"} icon={<IoMdCall fontSize={"24px"} />} />

        </div>
           <Button  isOutline={true}  text={"Via Email Call"} icon={<MdEmail fontSize={"24px"} />} />
         
         <form  onSubmit={onSub} >
            <div className={`${styles.from_controller}`}>
                  <label htmlFor="name">Name</label>
           <input type="text" name="name" id="name" />
            </div>


             <div className={`${styles.from_controller}`}>
                  <label htmlFor="Email">Email</label>
           <input type="email" name="Email" id="Email" />
            </div>


              <div className={`${styles.from_controller}`}>
                  <label htmlFor="Text">Text</label>
           <textarea name="text" id="Text"  rows={"8"}/>
            </div>


            <div style={{
              display:"flex", justifyContent:"end",
            }}>
               <Button  isOutline={false}  text={"Submit"} />
 
            </div>
                   

            

         <div>
          {name + "   " + email + "   " + text};
         </div>
         </form>
         
          


     </div>


     {/* Images divc */}

     <div className={`${styles.contactImg}`}>
        <img src={contactimg} alt="Contact" />
     </div>
    </section>
  )
}
