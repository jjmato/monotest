import { v4 as uuid } from 'uuid';

export class One {
	start(): void {
		console.log('hello from one' + uuid());
	}
}