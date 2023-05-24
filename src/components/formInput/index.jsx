import './index.css'

const FormInput = ({
  type, name, value, onChange, placeholder, required, 
  disabled, widthKind, extendedClassName = '',
}) => {

  // Make "width" class empty by default, so consumer component can use its styling without the need to do overwriting.
  let inputWidthClass = '';
  if (widthKind === 'full') {
    inputWidthClass = 'formInput--full';
  } else if (widthKind === 'half') {
    inputWidthClass = 'formInput--half';
  } else {
    // Some error might be thrown for non recognized `widthKind` - TypeScript could be used to narrow down expected values in compile time.
  }

  return (
    <input
      className={`formInput ${inputWidthClass} ${extendedClassName}`}
      id={name}
      // Using spread operator lets utilize shorter props shape:
      // https://react.dev/learn/passing-props-to-a-component#forwarding-props-with-the-jsx-spread-syntax
      {...{
        type, name, value, onChange, placeholder, required, disabled
      }}
    />
  );
};

export default FormInput;
