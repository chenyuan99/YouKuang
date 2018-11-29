export class UserInfo {
  userName: string;

  userIconURL: string;

  constructor(userName: string, userIconURL: string) {
    this.userName = userName;
    this.userIconURL = userIconURL;
  }
}

export const USER_INFO: UserInfo = new UserInfo('家里有矿', 'assets/img/logo.jpg');
