import { WebPlugin } from '@capacitor/core';
import type { IsKeptAwakeResult, IsSupportedResult, KeepAwakePlugin } from './definitions';
export declare class KeepAwakeWeb extends WebPlugin implements KeepAwakePlugin {
    private wakeLock;
    private readonly _isSupported;
    keepAwake(): Promise<void>;
    allowSleep(): Promise<void>;
    isSupported(): Promise<IsSupportedResult>;
    isKeptAwake(): Promise<IsKeptAwakeResult>;
    private throwUnsupportedError;
}
