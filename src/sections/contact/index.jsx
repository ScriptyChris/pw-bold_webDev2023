import './index.css';
import { useState } from 'react';

// Module path aliases could be used to avoid creating long relative paths with repetitive "../" fragments.
import contactModel from '../../models/Contact.model';
import Heading from '../../components/heading';
import FormInput from '../../components/formInput';
import Button from '../../components/button';

const Contact = () => {
  const [ formState, setFormState ] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    serviceOfInterest: '',
  });

  const handleInputChange = ({ target: { name, value }}) => {
    setFormState(prev => ({
      ...prev,
      [name]: value,
    }))
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // do something with form data, e.g. send to HTTP API
  }

  return (
    // Most of this page's elements should be more semantic tags, instead of `<div>`s.
    // The `.cta` class from CTA component could be shared here, but should be first made more "global".
    <section className="contact">
      <div className="contact__description">
        <Heading level={2}>{contactModel.heading}</Heading>
        <p>{contactModel.text}</p>
      </div>
      
      {/* TODO: handle form submission and make inputs controllable */}
      <form className='contact__form' onSubmit={handleFormSubmit}>
        <FormInput 
          placeholder={contactModel.form.fields.firstName} 
          extendedClassName='contact-form-field--expandible-column'
          name="firstName"
          value={formState.firstName}
          onChange={handleInputChange}
        />
        <FormInput 
          placeholder={contactModel.form.fields.lastName} 
          extendedClassName='contact-form-field--expandible-column'
          name="lastName"
          value={formState.lastName}
          onChange={handleInputChange}
        />
        <FormInput 
          placeholder={contactModel.form.fields.phoneNumber} 
          extendedClassName="contact-form-field--full-width"
          type="tel"
          name="phoneNumber"
          value={formState.phoneNumber}
          onChange={handleInputChange}
        />
        <FormInput 
          placeholder={contactModel.form.fields.serviceOfInterest} 
          extendedClassName="contact-form-field--full-width"
          name="serviceOfInterest"
          value={formState.serviceOfInterest}
          onChange={handleInputChange}
        />
        <Button kind="big">{contactModel.form.submitBtn}</Button>
      </form>
    </section>
  );
};

export default Contact;
