import React from "react"
import {Formik , Field, Form, ErrorMessage} from "formik"
import * as yup from 'yup'
import './contact.css'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

function Contact() {
		return(
		<div className = 'form'>

			<h1 className = 'title'>WRITE YOUR PHONE NUMBER AND EMAIL</h1>
			
			<Formik

				initialValues = {{email: '', phone:''}}
				validationSchema = {yup.object({

					email: yup.string()
						.email('invalid email address')
						.required('Required'),

						phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
				})}

				onSubmit = {(values, {setSubmitting}) => {
					setTimeout(() => {
						alert('We contact you soon');
						setSubmitting(false);
					}, 400);
				}}
				>

					<Form>
						
							<Field name = 'email' type = 'email'
							placeholder = 'bobmarley@gmail.com'
							className = 'inp'
							/>
							<ErrorMessage className = 'err' name = 'email' component = 'div'/>
					
							<Field type="tel" name="phone" placeholder = '+380 68 629 51 45'
							className = 'inp' 
							/>
							<ErrorMessage className = 'err' name = 'phone' component = 'div'/>

						<button type = 'submit' className = 'btn2'><p>ACCEPT</p></button> 

					</Form>

				</Formik>
			</div>
		)
	
}

export default Contact;