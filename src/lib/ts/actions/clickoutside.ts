export function clickoutside(node: HTMLElement, callback: () => void) {
	let startedFromOutside = false;
	function onMouseDown(event: Event) {
		if (node !== event.target && !node.contains(event.target as Node)) {
			startedFromOutside = true;
		}
	}
	function onClick(event: Event) {
		if (node !== event.target && !node.contains(event.target as Node) && startedFromOutside) {
			callback();
			startedFromOutside = false;
		}
	}

	function onFocus(event: Event) {
		if (node !== event.target && !node.contains(event.target as Node)) {
			callback();
		}
	}

	document.addEventListener('click', onClick, true);
	document.addEventListener('mousedown', onMouseDown, true);
	document.addEventListener('focus', onFocus, true);
	return {
		destroy() {
			document.removeEventListener('click', onClick, true);
			document.removeEventListener('mousedown', onMouseDown, true);
			document.removeEventListener('focus', onFocus, true);
		}
	};
}
