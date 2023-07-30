/* eslint-disable react/prop-types */
function Modal(props) {
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === "Escape") {
  //       props.showModal(false);
  //       if (props.setActionButtonToggle) {
  //         props.setActionButtonToggle(false);
  //       }
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <div
      className="fixed inset-0 z-[50] flex items-center overflow-y-scroll justify-center w-screen h-screen"
      onClick={() => {
        props.showModal(false);
        if (props.setActionButtonToggle) {
          props.setActionButtonToggle(false);
        }
      }}
    >
      <div
        className={`absolute w-screen h-screen bg-black ${
          props.isAlertModal ? "opacity-100" : "opacity-70"
        }`}
      ></div>
      <div
        className="absolute flex flex-col overflow-y-scroll justify-center sm:w-fit shadow-lg outline-none focus:outline-none w-[calc(100%-32px)] h-screen"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Modal;