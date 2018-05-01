import { TestWindow } from '@stencil/core/testing';
import { BtspBadge } from './btsp-badge';

describe('btsp-badge', () => {
  it('should build', () => {
    expect(new BtspBadge()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [BtspBadge],
        html: '<btsp-badge></btsp-badge>'
      });
    });

    it('should work with both the first and the last name', async () => {
      element.first = 'Peter';
      element.last = 'Parker';
      await window.flush();
      expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    });
  });
});
