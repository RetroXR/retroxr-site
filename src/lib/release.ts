// The game's latest GitHub release, read once per build: the header renders on
// every page, and a module is evaluated once, so the API sees one request a
// build instead of one per page. The deploy workflow rebuilds on a schedule to
// pick up new releases, and passes its token so the shared runners' anonymous
// rate limit cannot bite. If GitHub cannot be reached this resolves to null and
// the header leaves the tag out rather than failing the build.

const LATEST = 'https://api.github.com/repos/RetroXR/RetroXR/releases/latest';

export interface Release {
	tag: string;
	url: string;
}

async function fetchLatest(): Promise<Release | null> {
	try {
		const token = process.env.GITHUB_TOKEN;
		const res = await fetch(LATEST, {
			headers: {
				Accept: 'application/vnd.github+json',
				...(token ? { Authorization: `Bearer ${token}` } : {}),
			},
			signal: AbortSignal.timeout(10_000),
		});
		if (!res.ok) return null;
		const json = await res.json();
		return typeof json.tag_name === 'string' ? { tag: json.tag_name, url: json.html_url } : null;
	} catch {
		return null;
	}
}

export const latestRelease: Promise<Release | null> = fetchLatest();
