import { Card, Form, Container, Button } from "react-bootstrap";
import Link from "next/link";
import styled from "styled-components";
import { auth } from "../../lib/filebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// styled component
const StyledCard = styled(Card)`
  margin-top: 20px;
`;
const StyledForm = styled(Form)`
  padding: 20px;
`;
const Label = styled.span`
  font-size: 25px;
`;
const StyledSpan = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export default function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // methods
  const handleEmailInputChange = (e: any) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };
  const handlePasswordInputChange = (e: any) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
  };
  const doSignin = (e: any) => {
    // validate
    // login
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // redirect
        const query = router.query;
        if (query.redirect === undefined) {
          router.push("/");
        } else if (typeof query.redirect === "string") {
          router.push("/" + query.redirect);
        } else {
          router.push("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    e.preventDefault();
  };
  return (
    <Container>
      <StyledCard>
        <StyledForm>
          <Label>ログイン</Label>
          <StyledForm.Group className="mb-3" controlId="FormBasicEmail">
            <StyledForm.Label>メールアドレス</StyledForm.Label>
            <StyledForm.Control
              type="email"
              placeholder="メールアドレス"
              value={email}
              onChange={handleEmailInputChange}
            />
          </StyledForm.Group>

          <StyledForm.Group className="mb-3" controlId="FormBasicPassword">
            <StyledForm.Label>パスワード</StyledForm.Label>
            <StyledForm.Control
              type="password"
              placeholder="パスワード"
              value={password}
              onChange={handlePasswordInputChange}
            />
          </StyledForm.Group>
          <StyledSpan>
            <span>
              新規作成は<Link href="/signup">こちら</Link>
            </span>
          </StyledSpan>
          <Button variant="primary" type="submit" onClick={doSignin}>
            ログイン
          </Button>
        </StyledForm>
      </StyledCard>
    </Container>
  );
}
