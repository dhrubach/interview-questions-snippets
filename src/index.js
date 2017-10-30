import minimist from 'minimist';
import { questionSets } from './fileName.js';

const args = minimist(process.argv.slice(2));

if(args && args._.length) {
	const questionNumber = args._[0];
	const fileName = questionSets.get(questionNumber);

	if(fileName) {
		require(fileName);
	}
}
