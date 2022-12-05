import { Alert } from "react-bootstrap";

export default function AlertComp(props: {
  msg: string;
  type: "warning" | "error" | "info";
}) {
  return (
    <>
      {props.type === "error" ? (
        <Alert variant="danger">{props.msg}</Alert>
      ) : (
        ""
      )}
      {props.type === "warning" ? (
        <Alert variant="warning">{props.msg}</Alert>
      ) : (
        ""
      )}
      {props.type === "info" ? (
        <Alert variant="secondary">{props.msg}</Alert>
      ) : (
        ""
      )}
    </>
  );
}
