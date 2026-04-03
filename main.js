import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown';
import Notes from 'reveal.js/plugin/notes';

let deck = new Reveal({
	hash: true,
	plugins: [Markdown, Notes],
});
deck.initialize();