import { writable } from 'svelte/store';

const MOBILE_BREAK_POINT = 768;
let windowWidth: number;

const isMobile = writable(false, (set) => {
	windowWidth = window.innerWidth;
	set(isMobileViewPort());
	function handle() {
		windowWidth = window.innerWidth;
		set(isMobileViewPort());
	}

	window.addEventListener('resize', handle);

	return () => {
		window.removeEventListener('resize', handle);
	};
});
const menuOpen = writable(false, (set) => {
	return isMobile.subscribe(($isMobileViewPort) => {
		if (!$isMobileViewPort) {
			set(false);
		}
	});
});

function isMobileViewPort(): boolean {
	return windowWidth !== undefined && windowWidth < MOBILE_BREAK_POINT;
}

function setMenuState(open: boolean): void {
	if (isMobileViewPort()) {
		menuOpen.set(open);
	}
}

export const isMobileMenuViewport = {
	subscribe: isMobile.subscribe
};
export const mobileMenu = {
	subscribe: menuOpen.subscribe,
	open() {
		setMenuState(true);
	},

	close() {
		setMenuState(false);
	}
};
