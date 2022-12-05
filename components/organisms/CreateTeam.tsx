import { Container, Card, Form, Button, Badge } from "react-bootstrap";
import styled from "styled-components";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../../lib/filebase";
import { useEffect, useState } from "react";
import Loading from "../molecules/Loading";
import { useRouter } from "next/router";
import FormComp from "../molecules/Form";
import ModalComp from "../molecules/Modal";
import teamApi from "../../lib/teamApi";

// styled component
const StyledCard = styled(Card)`
  margin-top: 20px;
  padding: 15px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

export default function CreateTeam() {
  // useState
  const [isLoadingVisible, setLoadingVisible] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamDescribe, setTeamDescribe] = useState("");
  const [teamUrl, setTeamUrl] = useState("");
  const [teamAddress, setTeamAddress] = useState("");
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);
  const router = useRouter();
  var setupPrepared = false;
  // useEffect
  useEffect(() => {
    setLoadingVisible(true);
    if (!setupPrepared) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log("ログインした");
          console.log(user);
          setLoadingVisible(false);
        } else {
          console.log("ログインしていない");
          router.push("/signin?redirect=create");
        }
      });
      setupPrepared = true;
    }
  }, []);
  // methods
  const onChangeTeamName = (e: any) => {
    const name = e.target.value;
    setTeamName(name);
  };
  const onChangeTeamDescribe = (e: any) => {
    const describe = e.target.value;
    setTeamDescribe(describe);
  };
  const onChangeTeamUrl = (e: any) => {
    const url = e.target.value;
    setTeamUrl(url);
  };
  const onChangeTeamAddress = (e: any) => {
    const address = e.target.value;
    setTeamAddress(address);
  };
  const doCreateTeam = () => {
    //setConfirmModalVisible(true);
    teamApi
      .createTeam(teamName, teamDescribe, teamUrl, "")
      .then((res: any) => {
        router.push("/");
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
  const modalText = `以下の内容でチームを作成します\nチーム名: ${teamName}\nチーム説明: ${teamDescribe}\nチームURL: ${teamUrl}\nチーム連絡先: ${teamAddress}`;
  return (
    <Container>
      <ModalComp
        isModalVisible={isConfirmModalVisible}
        setModalVisible={setConfirmModalVisible}
        bodyText={modalText}
      />
      {isLoadingVisible ? (
        <Loading />
      ) : (
        <StyledCard>
          <Form>
            <FormComp
              formLabel="チーム名"
              isLabelTag={true}
              tagType="danger"
              tagText="必須"
              inputType="text"
              placeholder="例: すだちくん"
              value={teamName}
              onChange={onChangeTeamName}
            />
            <FormComp
              formLabel="チームの説明"
              isLabelTag={true}
              tagType="danger"
              tagText="必須"
              inputType="textarea"
              rows={3}
              placeholder="例: すだちくんが主役のシューティングゲームを作っています"
              value={teamDescribe}
              onChange={onChangeTeamDescribe}
            />
            <FormComp
              formLabel="チームのリンク"
              inputType="text"
              placeholder="例: https://sudachikun.jp"
              value={teamUrl}
              onChange={onChangeTeamUrl}
            />
            <FormComp
              formLabel="チームの連絡先"
              inputType="text"
              placeholder="例: sudachikun@example.com"
              value={teamAddress}
              onChange={onChangeTeamAddress}
            />
            <StyledButton variant="primary" onClick={() => doCreateTeam()}>
              登録
            </StyledButton>
          </Form>
        </StyledCard>
      )}
    </Container>
  );
}
