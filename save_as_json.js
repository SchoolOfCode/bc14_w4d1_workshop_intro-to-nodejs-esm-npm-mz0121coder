import { writeJsonFile } from 'write-json-file';
import { roadmap } from './things_to_learn.js';

await writeJsonFile('roadmap.json', roadmap);
