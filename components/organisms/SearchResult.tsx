import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import teamApi from "../../lib/teamApi";
import { Container } from "react-bootstrap";
import AlertComp from "..//molecules/Alert";
import TeamProfile from "./TeamProfile";
import SearchResultBanner from "../molecules/SearchResultBanner";

export default function SearchResult() {
  // useState
  const [isErrorVisible, setErrorVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [teams, setTeams] = useState([]);
  const router = useRouter();
  const queryParam = router.query;
  useEffect(() => {
    if (router.isReady) {
      console.log(queryParam.q);
      if (typeof queryParam.q !== "string") {
        return;
      }
      // チーム検索
      teamApi
        .findTeams(queryParam.q)
        .then((res: any) => {
          // error初期化
          setErrorVisible(false);
          setErrorMsg("");
          if (res.data === null) {
            setErrorVisible(true);
            setErrorMsg("検索結果がありませんでした。");
            setTeams([])
          } else {
            console.log(res.data);
            setTeams(res.data);
          }
        })
        .catch((err) => {
          setErrorVisible(true);
          setErrorMsg(String(err));
        });
    }
  }, [queryParam, router]);
  return (
    <Container>
      {isErrorVisible ? <AlertComp type={"error"} msg={errorMsg} /> : ""}
      <SearchResultBanner
        query={String(queryParam.q)}
        resultNum={teams.length}
      />
      {teams.map((team: any) => {
        return <TeamProfile team={team} key={team.teamId} />;
      })}
    </Container>
  );
}
