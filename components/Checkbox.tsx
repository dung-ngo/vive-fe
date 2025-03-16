import { useState } from 'react';

type Props = {
  label?: string;
  isChecked: boolean;
  setChecked: any;
};

const Checkbox = ({ label, isChecked, setChecked }: Props) => {
  return (
    <div className="vive-checkbox">
      <div
        className="checkbox-container"
        onClick={() => setChecked(!isChecked)}
      >
        <input type="checkbox" name="subcribe-vive" checked={isChecked} />
        <span className="checkmark"></span>
      </div>
      {label ? (
        <div
          className="text-link-2 checkbox-label"
          onClick={() => setChecked(!isChecked)}
        >
          {label}
        </div>
      ) : null}
    </div>
  );
};

export default Checkbox;
