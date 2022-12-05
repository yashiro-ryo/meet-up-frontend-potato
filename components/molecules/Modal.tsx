import { Modal, Button, ModalBody } from "react-bootstrap";

type ModalProps = {
  isModalVisible: boolean;
  setModalVisible: (isModalVisible: boolean) => void;
  isNotUseHeader?: boolean;
  headerText?: string;
  bodyText: string;
  closeText?: string;
  isNotUseSubmit?: boolean;
  submitText?: string;
  modalCloseCb?: () => void;
  modalSubmitCb?: () => void;
};

export default function ModalComp({
  isModalVisible,
  setModalVisible,
  isNotUseHeader = false,
  headerText = "",
  bodyText,
  closeText = "閉じる",
  isNotUseSubmit = true,
  submitText = "送信",
  modalCloseCb = () => {},
  modalSubmitCb = () => {},
}: ModalProps) {
  const handleClose = () => {
    setModalVisible(false);
    modalCloseCb();
  };
  const splitRows = (s: string) => {
    var splited = s.split("\n");
    return splited;
  };
  return (
    <Modal show={isModalVisible} onHide={handleClose}>
      {isNotUseHeader ? (
        <Modal.Title>{headerText}</Modal.Title>
      ) : (
        <Modal.Header closeButton>
          <Modal.Title>{headerText}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>
        {splitRows(bodyText).map((s: any, i: number) => {
          return <p key={i}>{s}</p>;
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {closeText}
        </Button>
        {isNotUseSubmit ? (
          ""
        ) : (
          <Button variant="primary" onClick={modalSubmitCb}>
            {submitText}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
