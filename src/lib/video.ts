export interface MakigasVideo {
	title: string;
	description: string;
	duration: string;
	_links: {
		'makigas:twitch': {
			href: string;
		};
		'makigas:youtube': {
			href: string;
		};
		icon: {
			href: string;
		};
	};
}

export interface MakigasVideosResponse {
	videos: MakigasVideo[];
}

export interface VideoData {
	title: string;
	description: string;
	duration: string;
	twitchUrl: string;
	youtubeUrl: string;
	thumbnail: string;
}

export function convert(video: MakigasVideo): VideoData {
	return {
		title: video.title,
		description: video.description,
		duration: video.duration,
		twitchUrl: video._links['makigas:twitch'].href,
		thumbnail: video._links['icon'].href,
		youtubeUrl: video._links['makigas:youtube'].href
	};
}

export async function fetchVideos(): Promise<VideoData[]> {
	const response = await fetch('https://www.makigas.es/early/videos.json', {
		headers: {
			Accept: 'application/json',
			'User-Agent': 'makigas-early/1.0'
		}
	});
	const body: MakigasVideosResponse = await response.json();
	return body.videos.map(convert);
}
