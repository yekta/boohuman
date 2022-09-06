const baseUrl = 'https://imgproxy.boohuman.com';

export function srcFromUrl(url: string) {
	return `${baseUrl}/insecure/plain/${url}`;
}

export function srcsetFromUrl(url: string, sizes: number[] = [512, 768, 1024, 1536, 2048]) {
	let srcset = '';
	sizes.forEach((size) => {
		srcset += `${baseUrl}/insecure/rs:fit:${size}:0/plain/${url} ${size}w, `;
	});
	return srcset;
}
