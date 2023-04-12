import AuthUser from './singleton/AuthUser';
import MainLoader from './singleton/MainLoader';
class RootStore {
  constructor() {
    this.authUser = new AuthUser(this);
    this.mainLoader = new MainLoader(this);
  }
}

export default new RootStore();
