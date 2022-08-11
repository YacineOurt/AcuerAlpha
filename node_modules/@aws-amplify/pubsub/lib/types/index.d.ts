export * from './Provider';
export * from './PubSub';
export interface SubscriptionObserver<T> {
    closed: boolean;
    next(value: T): void;
    error(errorValue: any): void;
    complete(): void;
}
/** @enum {string} */
export declare enum ConnectionState {
    Connected = "Connected",
    ConnectedPendingNetwork = "ConnectedPendingNetwork",
    ConnectionDisrupted = "ConnectionDisrupted",
    ConnectionDisruptedPendingNetwork = "ConnectionDisruptedPendingNetwork",
    Connecting = "Connecting",
    ConnectedPendingDisconnect = "ConnectedPendingDisconnect",
    Disconnected = "Disconnected",
    ConnectedPendingKeepAlive = "ConnectedPendingKeepAlive"
}
