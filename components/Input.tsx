import { InputHTMLAttributes, TextareaHTMLAttributes, useState } from 'react';

type InputProps = {
  label: string;
  errorMessage: string;
  required?: boolean;
};

const Input = ({
  label,
  errorMessage,
  required,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
  const [error, setError] = useState<boolean>(false);
  return (
    <div className="vive-input">
      <label htmlFor={label} className="text-link-2">
        {required ? <span>*</span> : ''}
        {label}
      </label>
      <input
        type="text"
        name={label}
        className="text-link-2"
        {...rest}
        required
      />
      {error ? <p className="text-link-2">{errorMessage}</p> : null}
    </div>
  );
};

type TextareaProps = {
  label: string;
  errorMessage?: string;
  required?: boolean;
};

export const Textarea = ({
  label,
  errorMessage,
  required,
  ...rest
}: TextareaProps & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  const [error, setError] = useState<boolean>(false);
  return (
    <div className="vive-input">
      <label htmlFor={label} className="text-link-2">
        {required ? <span>*</span> : ''}
        {label}
      </label>
      <textarea name={label} className="text-link-2" rows={3} {...rest} />
      {error ? <p className="text-link-2">{errorMessage}</p> : null}
    </div>
  );
};

export default Input;
