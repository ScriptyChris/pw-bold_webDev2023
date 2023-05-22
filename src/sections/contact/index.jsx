import './index.css';

// Module path aliases could be used to avoid creating long relative paths with repetitive "../" fragments.
import contactModel from '../../models/Contact.model';
import Heading from '../../components/heading';
import FormInput from '../../components/formInput';
import Button from '../../components/button';

const Contact = () => {
  return (
    // Most of this page's elements should be more semantic tags, instead of `<div>`s.
    // The `.cta` class from CTA component could be shared here, but should be first made more "global".
    <section className="contact">
      <div className="contact__description">
        <Heading level={2}>{contactModel.heading}</Heading>
        <p>{contactModel.text}</p>
      </div>
      
      {/* TODO: handle form submission and make inputs controllable */}
      <form className='contact__form'>
        <FormInput placeholder={contactModel.form.fields.firstName} />
        <FormInput placeholder={contactModel.form.fields.lastName} />
        <FormInput 
          placeholder={contactModel.form.fields.phoneNumber} 
          extendedClassName="contact-form-field--full-width"
        />
        <FormInput 
          placeholder={contactModel.form.fields.serviceOfInterest} 
          extendedClassName="contact-form-field--full-width"
        />
        <Button>{contactModel.form.submitBtn}</Button>
      </form>
    </section>
  );
};

export default Contact;
