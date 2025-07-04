import { VoidCallback } from "../types/Callback";

class SessionService {
  sessionCallback?: VoidCallback | null;
  observe(callback: VoidCallback) {
    this.sessionCallback = callback;
  }
  unAuthenticated() {
    this.sessionCallback?.();
  }
  clear() {
    this.sessionCallback = null;
  }
}

const storage = new SessionService();
export default storage;
