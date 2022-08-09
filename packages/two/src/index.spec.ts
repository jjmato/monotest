import { Main } from './index';

describe('two index', () => {
  it('should export two', () => {
    new Main().start();
    expect(Main).toBeDefined();
  })
});