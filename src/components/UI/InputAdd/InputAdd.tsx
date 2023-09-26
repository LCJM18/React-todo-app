import React from 'react';

interface InputAddProps {
  handleClick(value: string): void;
}
const InputAdd: React.FC<InputAddProps> = ({ handleClick }) => {
  const [value, setValue] = React.useState<string>('');

  return (
    <div className="w-full flex">
      <input
        type="text"
        onChange={(event) => setValue(event.currentTarget.value)}
        required
        className="w-full border-2 rounded-sm bg-primary-black text-white border-secondary-task h-[50px] outline-none px-2 "
      />
      <button
        className=" h-[50px] flex items-center justify-center text-white px-[20px] bg-secondary-task"
        type="button"
        onClick={() => {
          handleClick(value);
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default InputAdd;
