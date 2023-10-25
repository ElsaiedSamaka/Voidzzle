import PropTypes from "prop-types";

const Dailog = ({ header, body, footer }) => {
  return (
    <>
      {/* Main modal */}
      {/* dimmed bg */}
      {/* <div class="fixed z-30 inset-0 hidden bg-gray-50 bg-opacity-0 transition-opacity md:block"></div> */}
      {/* blurred bg */}
      <div className="fixed inset-0 z-40 backdrop-blur-sm" />
      <div className="bg-white xs:h-full sm:h-fit max-w-4xl max-h-fit rounded-2xl z-40 fixed lg:top-[15%] lg:left-[15%] md:top-[20%] xs:top-[1%] xs:left-[5%] xs:right-[5%]  mx-auto border shadow-2xl px-5 py-5 backdrop-blur-3xl">
        <div className="flex flex-col w-full h-full max-h-fit overflow-scroll">
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
