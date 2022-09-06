import Imgproxy from 'imgproxy';

export const imgproxy = new Imgproxy({
	baseUrl: 'https://imgproxy.boohuman.com',
	encode: false
});

export function srcFromUrl(url: string) {
	return imgproxy.builder().generateUrl(url);
}

export function srcsetFromUrl(url: string, sizes: number[] = [512, 768, 1024, 1536, 2048]) {
	let srcset = '';
	sizes.forEach((size) => {
		srcset += `${imgproxy.builder().resize('fit', size).generateUrl(url)} ${size}w, `;
	});
	return srcset;
}
