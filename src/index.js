import minimist from 'minimist';
import { questionSets } from './question-sets';

const args = minimist(process.argv.slice(2));

if (args && args._.length) {
	const questionNumber = args._[0];

	if (questionNumber) {
		const fileName = questionSets.get(questionNumber);

		if (fileName) {
			require(fileName);
		} else {
			console.log('Please enter a valid question number...');
		}
	} else {
		console.log('Please enter a question number...');
	}
}
