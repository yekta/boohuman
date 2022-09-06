<div
	class="w-1/3 md:w-40 max-w-full aspect-square flex flex-col relative origin-bottom move-animation overflow-hidden"
>
	<div class="w-full h-full p-gradient-135 absolute" />
	<div class="w-full flex mt-[40.625%] h-[28.125%] justify-center relative">
		<div class="w-[12.5%] h-full bg-c-bg mr-[12.5%] origin-bottom blink-animation" />
		<div class="w-[12.5%] h-full bg-c-bg origin-bottom blink-animation" />
	</div>
	<div class="w-[150%] -ml-[25%] bg-c-bg h-[6.25%] mt-[12.5%] relative mouth-animation" />
</div>

<style>
	.blink-animation {
		animation-name: blink;
		animation-duration: 1.5s;
		animation-delay: -1s;
		animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
		animation-iteration-count: infinite;
	}
	@keyframes blink {
		0% {
			transform: scaleY(1);
		}
		84% {
			transform: scaleY(1);
		}
		92% {
			transform: scaleY(0);
		}
		100% {
			transform: scaleY(1);
		}
	}
	.mouth-animation {
		animation-name: mouth;
		animation-duration: 0.2s;
		animation-delay: -0.1s;
		animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
		animation-iteration-count: infinite;
	}
	@keyframes mouth {
		0% {
			transform: scaleY(1);
		}
		50% {
			transform: scaleY(0.5);
		}
		100% {
			transform: scaleY(1);
		}
	}
	.move-animation {
		animation-name: move;
		animation-duration: 0.2s;
		animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
		animation-iteration-count: infinite;
	}
	@keyframes move {
		0% {
			transform: rotate(-3deg);
		}
		50% {
			transform: rotate(3deg);
		}
		100% {
			transform: rotate(-3deg);
		}
	}
</style>
