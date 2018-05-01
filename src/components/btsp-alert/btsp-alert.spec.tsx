import { TestWindow } from '@stencil/core/testing';
import { BtspAlert } from './btsp-alert';

describe('btsp-alert', () => {
  it('should build', () => {
    expect(new BtspAlert()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [BtspAlert],
        html: '<btsp-alert></btsp-alert>'
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
