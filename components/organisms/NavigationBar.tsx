import { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { useRouter } from "next/router";

// styled components
const StyledNavbar = styled(Navbar)`
  max-height: 60px;
`;
const SearchButton = styled(Button)`
  width: 80px;
`;

export default function NavigationBar() {
  // useState
  const [query, setQuery] = useState("");
  const router = useRouter();

  // methods
  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };
  const handleSubmit = (e: any) => {
    searchTeams(query);
    e.preventDefault();
  };
  const searchTeams = (query: string) => {
    // チーム検索画面へ遷移
    router.push("/find?q=" + query);
  };
  // render
  return (
    <StyledNavbar bg="light">
      <Container fluid>
        <StyledNavbar.Brand href="/">Meet Up</StyledNavbar.Brand>
        <StyledNavbar.Toggle aria-controls="navbarScroll" />
        <StyledNavbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {/*<Nav.Link href="/timeline">タイムライン</Nav.Link>*/}
            <Nav.Link href="/create">チームを作る</Nav.Link>
            {/*<Nav.Link href="/message">メッセージ</Nav.Link>*/}
            <Nav.Link href="/mypage">マイページ</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              placeholder="チーム検索"
              className="me-2"
              value={query}
              onChange={handleInputChange}
            />
            <SearchButton variant="outline-success" type="submit">
              検索
            </SearchButton>
          </Form>
        </StyledNavbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}
