// Hooks & Services
import { useThemeContext } from 'core/context/ThemeContext';
import { useTabContext } from 'core/context/TabContext';

const Tabs = ({ items }) => {
  const { state:{selectedTabIndex}, selectTab } = useTabContext();
    const {
    theme: { mode },
  } = useThemeContext();
  const handleTabClick = (id) => {
    selectTab(id);
  };
  return (
    <div className="w-fit my-2 shadow rounded-md">
      <div className="rounded-md bg-white/5 p-2">
        <nav className="flex flex-wrap gap-2  font-semibold">
          {items.map((item, i) => {
            return (
              <a
                key={i}
                onClick={() => handleTabClick(item.id)}
                className={`whitespace-nowrap inline-flex rounded-md py-2 px-4 items-center text-sm ${
                  item.id === selectedTabIndex
                    ? ' bg-white/10 shadow'
                    : ''
                } transition-all duration-200 hover:cursor-pointer ease-in-out hover:text-gray-700 hover:shadow`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
