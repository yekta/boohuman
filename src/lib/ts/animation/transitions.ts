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

interface IExpandCollapseOptions {
	delay?: number;
	duration?: number;
	easing?: (t: number) => number;
	y?: number;
	durationMultiplier?: number;
	opacity?: number;
}

export const expandCollapse = (node: Node, options: IExpandCollapseOptions) => {
	let { delay = 0, duration, easing = quadOut, y, durationMultiplier = 1, opacity } = options;
	let height = Number(getComputedStyle(node as HTMLElement).height.split('px')[0]);
	const durationCalculated = Math.min(Math.round(height / 2 + 175), 300);
	return {
		delay,
		duration: duration ?? durationCalculated * durationMultiplier,
		easing,
		css: (t: number) => {
			return `height: ${t * height}px; transform: translateY(${
				y ?? 0 * (1 - t)
			}rem); transform-origin: top; ${
				opacity !== undefined ? `opacity: ${t * (1 - opacity) + opacity}` : ''
			}`;
		}
	};
};
