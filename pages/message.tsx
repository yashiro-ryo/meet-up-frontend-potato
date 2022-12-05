import { useState } from "react";
import { Button } from "react-bootstrap";
import ModalComp from "../components/molecules/Modal";

export default function Message() {
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setModalVisible(true)}>モーダル</Button>
      <ModalComp
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        bodyText={"modal text"}
        isNotUseSubmit={false}
        submitText={"送信する訳が無いやろう"}
        modalCloseCb={() => {
          console.log("閉じた");
        }}
        modalSubmitCb={() => {
          console.log("submit");
          setModalVisible(false);
        }}
      />
    </>
  );
}
