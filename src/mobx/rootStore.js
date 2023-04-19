import AuthUser from './singleton/AuthUser';
import MainLoader from './singleton/MainLoader';
import NotesList from './singleton/NotesList';
class RootStore {
  constructor() {
    this.authUser = new AuthUser(this);
    this.mainLoader = new MainLoader(this);
    this.notes = new NotesList(this);
  }
}

export default new RootStore();
