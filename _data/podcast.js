const Parser = require('rss-parser');
const parser = new Parser();

const rss_feed = 'https://anchor.fm/s/66a16254/podcast/rss';

module.exports = async function() {

	function slugify(str) {
		return String(str)
			.normalize('NFKD') // split accented characters into their base characters and diacritical marks
			.replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
			.trim() // trim leading or trailing whitespace
			.toLowerCase() // convert to lowercase
			.replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
			.replace(/\s+/g, '-') // replace spaces with hyphens
			.replace(/-+/g, '-'); // remove consecutive hyphens
	}

	let feed = await parser.parseURL(rss_feed);

	let data = feed.items.map((epi) => {
		epi.slug = slugify(epi.title);
		return epi;
	});

	let pod = feed;

	return [data, pod];
};