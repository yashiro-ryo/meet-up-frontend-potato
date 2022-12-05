import axios from "../config/axiosConfig";

// 一回のみ実行
function getTeamsLatest() {
  return axios.get("/newteams");
}

function findTeams(query: string) {
  return axios.get(`/find?q=${query}`);
}

function createTeam(
  name: string,
  describe: string,
  url: string,
  fileName: string
) {
  var params = new URLSearchParams();
  params.append("teamName", name);
  params.append("teamDescribe", describe);
  params.append("teamImage", fileName);
  params.append("teamUrl", url);
  return axios.post("/team", params);
}

export default {
  getTeamsLatest,
  findTeams,
  createTeam,
} as const;
