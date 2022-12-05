import { Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <>
      <Spinner animation="border" variant="secondary" />
      <span>読み込み中</span>
    </>
  );
}
