/**
 * This files provides types that describe general shape of
 * authenticator machine and its intepreter.
 */
import { Interpreter } from 'xstate';
import { AuthContext } from './context';
import { AuthEvent } from './event';
import { HubCapsule } from '@aws-amplify/core';
/**
 * Intefrace for `authMachine` machine interpreter
 *
 * TODO: tighten up anys here
 */
export declare type AuthInterpreter = Interpreter<AuthContext, any, AuthEvent, any, any>;
/**
 * Function type for `send` in `authMachine`
 */
export declare type AuthMachineSend = AuthInterpreter['send'];
export declare type HubHandler = (data: HubCapsule, service: AuthInterpreter) => void;
