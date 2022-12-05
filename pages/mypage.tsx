import { Container, Card, Button } from "react-bootstrap";
import { signOut } from "@firebase/auth";
import { auth } from "../lib/filebase";
import AlertComp from "../components/molecules/Alert";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MyPage() {
  const [isSignoutError, setSignoutError] = useState(false);
  const [isSignoutSucess, setSignoutSucess] = useState(false);
  const router = useRouter();
  const doSignout = () => {
    signOut(auth)
      .then(() => {
        console.log("サインアウトしました");
        setSignoutError(false);
        setSignoutSucess(true);
        // サインアウト完了時、3秒後にindexに戻る
        setTimeout(() => {
          router.push("/");
        }, 3000);
      })
      .catch((error) => {
        console.log("サインアウトに失敗しました");
        setSignoutError(true);
        setSignoutSucess(false);
      });
  };
  return (
    <Container>
      {isSignoutError ? (
        <AlertComp type="error" msg="ログアウトに失敗しました。" />
      ) : (
        ""
      )}
      {isSignoutSucess ? (
        <AlertComp
          type="info"
          msg="ログアウトに成功しました。3秒後にメインページに遷移します。"
        />
      ) : (
        ""
      )}
      <Card>
        <Button onClick={() => doSignout()}>ログアウト</Button>
      </Card>
    </Container>
  );
}
