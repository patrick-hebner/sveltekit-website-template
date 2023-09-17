import { writable } from 'svelte/store';
import type { CollapseContext, AccordionOptions, ActiveItemContext } from './types';
import { getContext, setContext } from 'svelte';

const activeItem: ActiveItemContext = writable(null);

export function setAccordionOptions({ collapse }: AccordionOptions) {
	setContext<CollapseContext>('collapse', collapse);
	setContext<ActiveItemContext>('activeItem', activeItem);
}

export function getAccordionOptions() {
	const collapse = getContext<CollapseContext>('collapse');
	const activeItem = getContext<ActiveItemContext>('activeItem');
	return { collapse, activeItem };
}
