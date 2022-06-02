import { forwardRef  } from 'react';
import CommonUtils from '~/modules/utils/common';

const style = 'rounded border border-[#cfd6de]'
  + 'block px-4 py-1.5 text-base text-[#35353f] bg-transparent '
  + 'hover:(text-gray-900 bg-gray-200)'
  + ' ';

const Button = forwardRef((properties, ref) => {
  const { children, className, ...rest } = properties;
  return (
    <button ref={ref} {...rest} className={CommonUtils.classNames(style, className)} type="button">
      {children}
    </button>
  );
});

export default Button;
