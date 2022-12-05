import { useState } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import { Team } from "../../type/team";

// styled component
const StyledCard = styled(Card)`
  margin: 15px 0;
`;
const StyledTeamProfile = styled.div`
  display: flex;
  flex-direction: column;
`;
const TeamProfileText = styled.span`
  margin: 5px 0;
`;
const TeamProfileButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
`;
const TeamProfileButton = styled.button`
  width: 100px;
  margin-right: 3px;
`;
const Label = styled.span`
  font-size: 12px;
`;

export default function TeamProfile(props: any) {
  const [team, setTeam] = useState(props.team);
  return (
    <StyledCard>
      <StyledCard.Img variant="top" src="/vercel.svg" />
      <StyledCard.Body>
        <StyledTeamProfile>
          <Label>チーム名</Label>
          <TeamProfileText>{team.teamName}</TeamProfileText>
          <Label>チームの説明</Label>
          <TeamProfileText>{team.teamDescribe}</TeamProfileText>
          <Label>チームURL</Label>
          <TeamProfileText>{team.teamUrl}</TeamProfileText>
          <TeamProfileButtonGroup>
            <TeamProfileButton className="btn btn-primary btn-team">
              詳細
            </TeamProfileButton>
            <TeamProfileButton className="btn btn-primary btn-team">
              連絡する
            </TeamProfileButton>
          </TeamProfileButtonGroup>
        </StyledTeamProfile>
      </StyledCard.Body>
    </StyledCard>
  );
}
