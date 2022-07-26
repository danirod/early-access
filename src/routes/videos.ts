import { fetchVideos } from '$lib/video';

export async function GET() {
	const videos = await fetchVideos();
	return {
		status: 200,
		headers: {
			'access-control-allow-origin': '*'
		},
		body: { videos }
	};
}
