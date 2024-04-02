// Packages
import classNames from 'classnames';

// Hooks & Services
import { useThemeContext } from 'core/context/ThemeContext';

const Popover = ({ content }) => {
  const {
    theme: { mode },
  } = useThemeContext();
  return (
    <div
      id="dropdown"
      className={classNames('absolute -top-20 right-20 z-20 w-44 rounded divide-y divide-gray-100 shadow',{'bg-zinc-900 text-white/90': mode === 'dark','bg-white text-zinc-900':mode === 'light'})}
    >
      {content}
    </div>
  );
};

export default Popover;
