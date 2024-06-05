'use client'
import styled from "styled-components"
import React from "react"
import { IStyledFC } from "@/app/types/IStyledFC"
import Button from "../Button";
import InterestContext from "@/app/context/InterestContextProvider";
import { servicesArray } from "@/app/Array/ServicesArray"
import Alert, { AlertTitle } from "../Alert"
import { AnimatePresence, motion } from "framer-motion"

const ContactFormFC: React.FC<IStyledFC> = ({className}) => {
    const interestContext = React.useContext(InterestContext);
    const [isSending, setIsSending] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [formValues, setFormValue] = React.useState({
        name: '',
        email: '',
        message: ''
    })
    return (
        <form className={className} onSubmit={async (e) => {
            e.preventDefault();
            if(Object.values(formValues).includes("")) {
                alert("incomplete")
            } else {
                setIsSending(true);
                try {
                    const response = await fetch('/api/send-query', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            ...formValues,
                            service: interestContext?.value
                        })
                    })

                    if(!response.ok) throw response
                    
                    setError(false);
                    setFormValue({'email': "", name: "", message: ''});
                } catch(err) {
                    setError(true);
                } finally {
                    setShowAlert(true);
                    setIsSending(false);
                }
            }
        }}> 
            <AnimatePresence>
            {
                showAlert && 
                <motion.div className="alert-container"
                initial={{
                    opacity: 0,
                    transform: 'translateY(-30px)'
                }}
                animate={{
                    opacity: showAlert? 1 : 0,
                    transform: showAlert? 'translateY(0px)' : 'translateY(-30px)',
                    transition: {duration: 2, type: 'spring'}
                }}
                exit={{
                    opacity: 0,
                    transform: 'translateY(-30px)',
                }}>
                    <Alert severity={error? "error" : "success"} onClose={() => setShowAlert(false)}>
                        <AlertTitle>{error? "Error Occurs!" : "Success"}</AlertTitle>
                        {
                            error? "Failed to send the message. Please ensure your input is valid." : "Your message has been sent. An automated response will be sent to your email shortly. Please check your spam folder if you do not see it in your inbox."
                        }
                    </Alert>
                </motion.div>
            }
            </AnimatePresence>
            <input disabled={isSending} name="name" type="text" placeholder="Your Name" value={formValues.name} onChange={(e) => setFormValue({...formValues, name: e.target.value})}/>
            <input disabled={isSending} name="email" type="email" placeholder="Your Email" value={formValues.email} onChange={(e) => setFormValue({...formValues, email: e.target.value})}/>
            <select disabled={isSending} name="service" value={interestContext?.value} onChange={(e) => interestContext?.setValue(e.currentTarget.value)}>
                <option value="">Select a Service</option>
                {
                    servicesArray.map((service, i) => (
                        <option key={i} value={service.title}>{service.title}</option>
                    ))
                }
            </select>
            <textarea disabled={isSending} name="message" placeholder="Message" value={formValues.message} onChange={(e) => setFormValue({...formValues, message: e.target.value})}/>
            <Button isLoading={isSending} type="submit" color="#966434">Send Message</Button>
        </form>
    )
}

const ContactForm = styled(ContactFormFC)`
    position: relative;
    display: flex;
    flex: 1;
    max-width: 400px;
    flex-wrap: wrap;
    justify-content: center;
    /* align-items: center; */
    gap: 40px;
    z-index: 10;

    > input, > textarea, > select {    
        box-sizing: border-box;
        font-family: inherit;
        font-size: 14px;
        vertical-align: baseline;
        font-weight: 400;
        line-height: 1.29;
        letter-spacing: .16px;
        border-radius: 0;
        outline: 2px solid transparent;
        outline-offset: -2px;
        width: 100%;
        height: 40px;
        border: none;
        border-bottom: 1px solid #8d8d8d;
        font-family: BalooBhaina2;
        background-color: transparent;
        padding: 0 16px;
        color: #161616;
        transition: background-color 70ms cubic-bezier(.2,0,.38,.9),outline 70ms cubic-bezier(.2,0,.38,.9);  
        :focus{
            outline: 2px solid #0f62fe;
            outline-offset: -2px;
        }
                
    }

    > input:disabled, > textarea:disabled, > select:disabled {
        opacity: 0.5;
    }

    > ${Button} {
        margin: auto;
    }

    > .alert-cotainer {
        display: flex;
        flex: 0 1 100%;
        height: fit-content;
    }
`;

export default ContactForm;