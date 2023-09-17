import type { Writable } from 'svelte/store';

export type AccordionOptions = { collapse: boolean };
export type ActiveItem = string | null;
export type CollapseContext = boolean;
export type ActiveItemContext = Writable<ActiveItem>;
