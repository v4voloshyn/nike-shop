import React from 'react';

export interface InputProps extends ReactTagProps<'input'> {
  /**
   * start icon
   */
  startIcon?: React.ReactNode;
}

export const INPUT_TEST_IDS = {
  CONTAINER: 'input-container',
  START_ICON: 'input-startIcon',
};

/**
 * Input component
 */
export const Input: React.FC<InputProps> = ({ startIcon, ...props }) => (
  <div className='flex items-center overflow-hidden rounded-full border-2 border-gray-300 hover:bg-gray-200 '>
    {startIcon && <button data-testid={INPUT_TEST_IDS.START_ICON}>{startIcon}</button>}
    <input {...props} className='m-0 h-full w-full p-2 outline-none hover:bg-gray-200' />
  </div>
);
