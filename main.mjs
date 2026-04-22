import Reveal from './node_modules/reveal.js/dist/reveal.mjs';
import Markdown from './node_modules/reveal.js/dist/plugin/markdown.mjs';
import Notes from './node_modules/reveal.js/dist/plugin/notes.mjs';

let deck = new Reveal({
	hash: true,
	plugins: [Markdown, Notes],
});
deck.initialize();
