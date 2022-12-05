import styled from "styled-components";

// styled component
const StyledBanner = styled.div`
  padding: 5px;
`;

// type
type Props = {
  query: string;
  resultNum: number;
};

export default function SearchResultBanner(props: Props) {
  return (
    <StyledBanner>
      "{props.query}" の検索結果 ({props.resultNum}件)
    </StyledBanner>
  );
}
