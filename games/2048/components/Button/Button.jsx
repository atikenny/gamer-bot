import classnames from 'classnames';

import './styles';

const Button = ({ children, className, isActive, ...rest }) => (
  <button
    className={classnames('button', className, {
      active: isActive
    })}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
