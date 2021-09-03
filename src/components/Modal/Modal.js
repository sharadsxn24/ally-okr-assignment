import { createPortal } from "react-dom";
import './styles.css';

const Modal = ({ setOpen, title, children }) => {
  const close = () => {
    setOpen(false);
  }
  return createPortal(
    <>
      <div className="modal-shadow" onClick={close} />
      <div className="modal-wrapper">
        <div className="modal-box">
          <div className="modal-title">{title}</div>
          <div className="modal-content">
            {children}
          </div>
          <div className="modal-footer">
            <button onClick={close}>Close</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('app-modal'),
  );
}

export default Modal;
