import { registerPlugin } from '@capacitor/core';
const KeepAwake = registerPlugin('KeepAwake', {
    web: () => import('./web').then(m => new m.KeepAwakeWeb()),
});
export * from './definitions';
export { KeepAwake };
//# sourceMappingURL=index.js.map