export interface MakigasVideo {
	title: string;
	description: string;
	duration: string;
	playlist: {
		_links: {
			'makigas:card': [
				{
					href: string;
					sizes: string;
				}
			];
		};
	};
	_links: {
		'makigas:twitch': {
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
	thumbnail: string;
}

export function convert(video: MakigasVideo): VideoData {
	const cards = video.playlist._links['makigas:card'].map((c) => ({
		...c,
		max: c.sizes.split('x').map(parseInt)[0]
	}));
	cards.sort((a, b) => {
		if (a.max > b.max) {
			return -1;
		} else if (a.max < b.max) {
			return 1;
		}
		return 0;
	});
	return {
		title: video.title,
		description: video.description,
		duration: video.duration,
		twitchUrl: video._links['makigas:twitch'].href,
		thumbnail: cards[0].href
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
