import { makeAutoObservable } from 'mobx';


class MainLoader {
  isLoading = true;
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  toggleLoader(payload) {
    this.isLoading = payload;
  }

}

export default MainLoader;
