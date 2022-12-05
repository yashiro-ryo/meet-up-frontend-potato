export class Team {
  teamId: number;
  teamName: string;
  teamDescribe: string;
  teamUrl: string;
  teamAddress: string;
  teamCreatedAt: string;
  constructor(
    id: number,
    name: string,
    describe: string,
    url: string,
    address: string,
    createdAt: string
  ) {
    this.teamId = id;
    this.teamName = name;
    this.teamDescribe = describe;
    this.teamUrl = url;
    this.teamAddress = address;
    this.teamCreatedAt = createdAt;
  }
}
