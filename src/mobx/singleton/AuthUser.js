import { makeAutoObservable } from 'mobx';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from 'api/firebase/firebase';
import { replaceError } from '../../helpers';
class AuthUser {
  email = '';
  name = '';
  _isAuth = null;
  roles = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
    onAuthStateChanged(auth, this._updateUserAuth.bind(this));
  }

  async _updateUserAuth(user) {
    this.email = user?.email || '';
    this._isAuth = user ?? false;
    this.rootStore.mainLoader.isLoading = false;
  }

  get isAuth() {
    return this._isAuth;
  }

  * signOut() {
    yield signOut(auth);
  }

  * createUserWithEmailAndPassword({ email, password } ) {
    try {
      yield createUserWithEmailAndPassword(auth, email, password)
      return { success: true };
    } catch (error) {
      return {
        success: false,
        errorCode: replaceError(error.code),
      };
    }
  }

  * logIn(email, password) {
    try {
      yield signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        errorCode: replaceError(error.code),
      };
    }
  }
}


export default AuthUser;
