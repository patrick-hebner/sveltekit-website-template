import { readable } from 'svelte/store';

export const mousePosition = readable({ x: 0, y: 0 }, (set) => {
	const handler = (e: MouseEvent) => {
		set({
			x: e.clientX,
			y: e.clientY
		});
	};
	document.addEventListener('mousemove', handler);

	return () => {
		document.removeEventListener('mousemove', handler);
	};
});
