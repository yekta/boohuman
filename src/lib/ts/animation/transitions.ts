import { crossfade } from 'svelte/transition';
import { quadOut } from 'svelte/easing';

const [send, receive] = crossfade({
	duration: (d) => Math.max(Math.sqrt(d * 200), 300),
	fallback(node, params) {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;
		return {
			duration: 300,
			easing: quadOut,
			css: (t) => `
        transform: ${transform} scale(${t});
        opacity: ${t}
      `
		};
	}
});

export { send, receive };
