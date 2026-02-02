declare module 'pdfmake'
declare module '@yaireo/tagify/react'
declare module 'apextree'
import type { route as routeFn } from 'ziggy-js';

declare global {
    const route: typeof routeFn;
}
