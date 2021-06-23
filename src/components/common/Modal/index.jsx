import "./style.scss";

const Modal = ({ active, setActive, className }) => {
  const closeModal = () => {
    setActive(false);
  };
  return (
    <>
      <div className={`${active ? "modal active" : "modal"} ` + className}>
        <div className="modal-close" onClick={closeModal}>
          &#x2715; {/* close icon */}
        </div>
      </div>
      <div className={`modal-popup ${active && "active"}`} onClick={closeModal}></div>
    </>
  );
};

export default Modal;
