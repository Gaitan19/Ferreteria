import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    customClass,
    labelCustomClass,
    inputCustomClass,
    placeholder,
    text,
    type,
    required,
    onChange,
    children,
    divClass,
  } = props;

  return (
    <div className={customClass}>
      <label className={labelCustomClass}>{text}</label>
      <div className={divClass}>
        <input
          className={inputCustomClass}
          type={type}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
        {children}
      </div>
    </div>
  );
};

Input.propTypes = {
  customClass: PropTypes.string.isRequired,
  labelCustomClass: PropTypes.string,
  inputCustomClass: PropTypes.string,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  required: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'checkbox']),
  onChange: PropTypes.func,
  divClass: PropTypes.string,
  children: PropTypes.node,
};

Input.defaultProps = {
  labelCustomClass: 'Format-text',
  inputCustomClass: 'Input',
  placeholder: '',
  text: '',
  type: 'text',
  required: 'required',
  onChange: () => {},
  divClass: '',
  children: <></>,
};

export default Input;