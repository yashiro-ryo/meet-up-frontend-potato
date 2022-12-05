import { useState } from "react";
import { Card, Form, Container, Button } from "react-bootstrap";
import Link from "next/link";
import styled from "styled-components";
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
  margin: 10px 0;
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
  const doSignup = (e: any) => {
    // validate
    // pop up modal
    /*
    // signup
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    */
    e.preventDefault();
  };
  return (
    <Container>
      <StyledCard>
        <StyledForm>
          <Label>アカウント新規作成</Label>
          <StyledForm.Group>
            <StyledForm.Label>メールアドレス</StyledForm.Label>
            <StyledForm.Control
              type="email"
              placeholder="メールアドレス"
              value={email}
              onChange={handleEmailInputChange}
            />
          </StyledForm.Group>

          <StyledForm.Group>
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
              ログインは<Link href="/signin">こちら</Link>
            </span>
          </StyledSpan>
          <Button variant="primary" type="submit" onClick={doSignup}>
            新規作成
          </Button>
        </StyledForm>
      </StyledCard>
    </Container>
  );
}
