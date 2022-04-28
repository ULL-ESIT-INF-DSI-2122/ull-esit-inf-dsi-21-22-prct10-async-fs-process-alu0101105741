/* eslint-disable max-len */
import {watch} from 'fs';
import {spawn} from 'child_process';

/**
 * Function that allow us to watch a file and do operation with the
 * numbers of its content when its updated
 */
watch(process.argv[2], (eventType, filename) => {
  if (eventType === 'rename') {
    console.log(`The file ${filename} has been deleted or renamed`);
  }
  if (eventType === 'change') {
    console.log(`\nThe file ${filename} was modified!`);
    spawn('node', ['dist/suma.js', filename, process.argv[3]]).stdout.pipe(process.stdout);
  }
});
