import { browser } from '$app/environment';
import { Buffer } from 'buffer';

const imgproxyUrl = 'https://imgproxy.boohuman.com';

export function srcFromUrl(url: string, width: number | undefined = undefined) {
	const urlSafeBase64 = (string: string) => {
		let str: string;
		if (browser) {
			str = window.btoa(string);
		} else {
			str = Buffer.from(string).toString('base64');
		}
		return str.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
	};

	const resizing_type = 'fit';
	const extension = url.split('.')[url.split('.').length - 1];
	const encoded_url = urlSafeBase64(url);
	const path = `/insecure/${
		width !== undefined ? `rs:${resizing_type}:${width}/` : ``
	}${encoded_url}.${extension}`;
	return imgproxyUrl + path;
}

export function srcsetFromUrl(url: string, sizes: number[] = [512, 768, 1024, 1536, 2048]) {
	let srcset = '';
	sizes.forEach((size) => {
		srcset += `${srcFromUrl(url, size)} ${size}w, `;
	});
	return srcset;
}
