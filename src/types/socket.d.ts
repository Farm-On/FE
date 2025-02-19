declare module '@stomp/stompjs' {
  import { Client, StompSubscription } from '@stomp/stompjs';
  export { Client, StompSubscription };
}

declare module 'sockjs-client' {
  import SockJS from 'sockjs-client';
  export default SockJS;
}

declare global {
  interface Window {
    global: typeof globalThis;
    process: {
      env: {
        DEBUG: undefined;
      };
    };
  }
}

export {};
