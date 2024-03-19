import { useThemeContext } from 'core/context/ThemeContext';
import classNames from 'classnames';

const MessagesLayout = ({ children }) => {
  const {
    theme: { mode },
  } = useThemeContext();

  return (
    <section className="messages-layout ">
      <div className=" max-w-screen-3xl">
        <div className="grid pt-3 pb-10 grid-cols-10">
          <div
            className={classNames(
              'col-span-10 overflow-hidden rounded-2xl  h-[89vh] px-8 mx-8 sm:shadow',
              {
                'bg-dark-bgPrimary text-dark-textSecondary border-dark-border':
                  mode === 'dark',
                'bg-light-bgPrimary text-light-textSecondary border-light-border':
                  mode === 'light',
              },
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagesLayout;
