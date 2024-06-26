import classNames from 'classnames';
import { useThemeContext } from 'core/context/ThemeContext';
import propTypes from 'prop-types';

const Dialog = ({ header, body, footer }: any) => {
  const { theme } = useThemeContext();
  const { mode } = theme;
  return (
    <>
      {/* dimmed bg */}
      {mode === 'light' && (
        <div className="fixed z-30 inset-0 bg-gray-50 bg-opacity-40 transition-opacity md:block" />
      )}
      {/* blurred bg */}
      {mode === 'dark' && (
        <div className="fixed inset-0 z-40 backdrop-blur-sm" />
      )}
      <div
        className={classNames(
          'xs:h-full sm:h-fit max-w-4xl max-h-fit rounded-2xl z-40 fixed lg:top-[15%] lg:left-[15%] md:top-[20%] xs:top-[1%] xs:left-[5%] xs:right-[5%]  mx-auto border shadow-2xl px-5 py-5 backdrop-blur-3xl',
          {
            'bg-dark-bgSecondary text-dark-textPrimary border-dark-border':
              mode === 'dark',
            'bg-light-bgSecondary text-dark-textSecondary border-light-border':
              mode === 'light',
          },
        )}
      >
        <div className="flex flex-col w-full h-full max-h-fit overflow-scroll">
          {/* Modal header */}
          <div className="modal-header">{header}</div>
          {/* Modal body */}
          <div className="modal-body overflow-scroll">{body}</div>
          {/* Modal footer */}
          <div className="modal-footer">{footer}</div>
        </div>
      </div>
    </>
  );
};

// Define prop types
Dialog.propTypes = {
  header: propTypes.node.isRequired,
  body: propTypes.node.isRequired,
  footer: propTypes.node,
};

export default Dialog;
