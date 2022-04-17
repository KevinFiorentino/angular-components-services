import { TestNamePipe } from './test-name.pipe';

describe('TestNamePipe', () => {
  it('create an instance', () => {
    const pipe = new TestNamePipe();
    expect(pipe).toBeTruthy();
  });
});
