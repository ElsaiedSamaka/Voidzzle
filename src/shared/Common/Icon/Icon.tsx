import classNames from 'classnames';
import { useThemeContext } from 'core/context/ThemeContext';

const Icon = ({ children }) => {
  const { theme } = useThemeContext();
  const { mode } = theme;
  return (
    <div
      className={classNames(
        'border text-center h-fit w-fit  transiton-all duration-300 p-2  rounded-full mx-0.5 hover:cursor-pointer',
        {
          'border-light-border hover:border-dark-border bg-black/5':
            mode === 'light',
          'border-dark-border hover:border-light-border bg-white/5':
            mode === 'dark',
        },
      )}
    >
      {children}
    </div>
  );
};

export default Icon;
