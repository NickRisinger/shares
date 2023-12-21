import { forwardRef } from 'react';

type InputTextProps = {
  label?: string;
};

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (props, ref) => {
    return (
      <label>
        {props.label && <span>{props.label}</span>}
        <input ref={ref} />
      </label>
    );
  },
);
