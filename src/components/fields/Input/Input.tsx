import React from 'react';

export interface InputProps extends ReactTagProps<'input'> {
  /**
   * start icon
   */
  startIcon?: React.ReactNode;
  /**
   * classes for input container
   */
  containerClassnames?: string;
}

export const INPUT_TEST_IDS = {
  CONTAINER: 'input-container',
  START_ICON: 'input-startIcon',
};

/**
 * Input component
 */
export const Input: React.FC<InputProps> = ({ startIcon, containerClassnames, ...props }) => (
  <div className={`flex items-center overflow-hidden   rounded-full ${containerClassnames}`}>
    {startIcon && (
      <button
        data-testid={INPUT_TEST_IDS.START_ICON}
        className='rounded-full p-[6px] hover:bg-gray-200'
      >
        {startIcon}
      </button>
    )}
    <input {...props} className='m-0 h-full w-full bg-transparent p-2 outline-none ' />
  </div>
);
