import { Buffer } from 'buffer';

const imgproxyUrl = 'https://imgproxy.boohuman.com';

export function srcFromUrl(url: string, size: number | undefined = undefined) {
	const urlSafeBase64 = (string: string | Buffer) => {
		return Buffer.from(string)
			.toString('base64')
			.replace(/=/g, '')
			.replace(/\+/g, '-')
			.replace(/\//g, '_');
	};

	const resizing_type = 'fit';
	const extension = url.split('.')[url.split('.').length - 1];
	const encoded_url = urlSafeBase64(url);
	const path = `/insecure/${
		size !== undefined ? `rs:${resizing_type}:${size}:${size}/` : ``
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
