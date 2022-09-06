import Imgproxy from 'imgproxy';

export const imgproxy = new Imgproxy({
	baseUrl: 'https://imgproxy.boohuman.com',
	encode: false
});

export function srcFromUrl(url: string) {
	return imgproxy.builder().generateUrl(url);
}

export function srcsetFromUrl(url: string, sizes: number[]) {
	let srcset = '';
	sizes.forEach((size) => {
		srcset += `${imgproxy.builder().resize('fit', size).generateUrl(url)} ${size}w, `;
	});
	return srcset;
}
