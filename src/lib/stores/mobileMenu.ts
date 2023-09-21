import { writable } from 'svelte/store';

const menuOpen = writable(false);

export const mobileMenu = {
	subscribe: menuOpen.subscribe,
	open() {
		menuOpen.set(true);
	},

	close() {
		menuOpen.set(false);
	}
};
