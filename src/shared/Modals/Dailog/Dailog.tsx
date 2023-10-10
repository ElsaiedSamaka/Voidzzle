import PropTypes from "prop-types";

const Dailog = ({ header, body, footer }) => {
  return (
    <>
      {/* Main modal */}
      {/* dimmed bg */}
      {/* <div class="fixed z-30 inset-0 hidden bg-gray-50 bg-opacity-0 transition-opacity md:block"></div> */}
      {/* blurred bg */}
      <div className="fixed inset-0 z-40 backdrop-blur-sm" />
      <div className="bg-white max-w-3xl rounded-2xl w-[50%] z-40 fixed xs:top-[15%] xs:left-[25%] mx-auto border shadow-2xl px-5 py-5 backdrop-blur-3xl">
        <div className="flex flex-col w-full">
          {/* Modal content */}
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

Dailog.propTypes = {
  header: PropTypes.elementType.isRequired,
  body: PropTypes.elementType.isRequired,
  footer: PropTypes.elementType,
};

export default Dailog;
