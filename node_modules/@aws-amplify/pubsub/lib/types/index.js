"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @enum {string} */
var ConnectionState;
(function (ConnectionState) {
    /*
     * The connection is alive and healthy
     */
    ConnectionState["Connected"] = "Connected";
    /*
     * The connection is alive, but the connection is offline
     */
    ConnectionState["ConnectedPendingNetwork"] = "ConnectedPendingNetwork";
    /*
     * The connection has been disconnected while in use
     */
    ConnectionState["ConnectionDisrupted"] = "ConnectionDisrupted";
    /*
     * The connection has been disconnected and the network is offline
     */
    ConnectionState["ConnectionDisruptedPendingNetwork"] = "ConnectionDisruptedPendingNetwork";
    /*
     * The connection is in the process of connecting
     */
    ConnectionState["Connecting"] = "Connecting";
    /*
     * The connection is not in use and is being disconnected
     */
    ConnectionState["ConnectedPendingDisconnect"] = "ConnectedPendingDisconnect";
    /*
     * The connection is not in use and has been disconnected
     */
    ConnectionState["Disconnected"] = "Disconnected";
    /*
     * The connection is alive, but a keep alive message has been missed
     */
    ConnectionState["ConnectedPendingKeepAlive"] = "ConnectedPendingKeepAlive";
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));
//# sourceMappingURL=index.js.map