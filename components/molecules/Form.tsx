import { Badge, Form } from "react-bootstrap";

type Props = {
  formLabel: string;
  placeholder?: string;
  inputType?: "text" | "textarea" | "password" | "email";
  rows?: number;
  isLabelTag?: boolean;
  tagType?: "danger" | "secondary" | "primary" | "none";
  tagText?: string;
  value?: any;
  onChange?: (e: any) => void;
};

export default function FormComp({
  formLabel = "",
  placeholder = "",
  inputType = "text",
  rows = 1,
  isLabelTag = false,
  tagType = "none",
  tagText = "",
  value = "",
  onChange = (e: any) => {},
}: Props) {
  return (
    <Form.Group>
      <Form.Label>
        {formLabel}
        {isLabelTag ? <Badge bg={tagType}>{tagText}</Badge> : ""}
      </Form.Label>
      {inputType === "textarea" ? (
        <Form.Control
          as="textarea"
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <Form.Control
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </Form.Group>
  );
}
