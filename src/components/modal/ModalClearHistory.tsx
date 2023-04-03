import { AwesomeButton } from 'react-awesome-button';
import Modal from 'react-overlays/cjs/Modal';

import { clearAbysses, modalSelector, setModalClearHistory, useAppDispatch, useAppSelector } from '../../redux';

import Backdrop from './Backdrop';

const ModalClearHistory = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { modalClearHistory } = useAppSelector(modalSelector);

  const handleClose = (): void => {
    dispatch(setModalClearHistory(false));
  };

  const clearHistory = (): void => {
    dispatch(clearAbysses());
    dispatch(setModalClearHistory(false));
  };

  return (
    <Modal
      className={`modal fixed left-1/2 top-1/2 z-50 flex
      max-h-[500px] max-w-[500px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-md bg-white p-7 shadow-md outline-none`}
      show={modalClearHistory}
      onHide={handleClose}
      renderBackdrop={Backdrop}
    >
      <>
        <div className="modal__header w-full">
          <div className="modal__title">
            <h3 className="text-2xl font-bold text-black">Confirmation dialog:</h3>
          </div>
        </div>
        <div className="modal__desc mt-5 flex max-h-[250px] w-full overflow-auto">
          <span className="break-all text-2xl text-black">Are you sure want to clear history?</span>
        </div>
        <div className="modal__footer mt-5 flex w-full justify-center gap-3">
          <AwesomeButton type="danger" onPress={clearHistory} className="uppercase">
            Yes
          </AwesomeButton>
          <AwesomeButton type="primary" onPress={handleClose} className="uppercase">
            No
          </AwesomeButton>
        </div>
      </>
    </Modal>
  );
};

export default ModalClearHistory;
