import { TestWindow } from '@stencil/core/testing';
import { BtspButton } from './btsp-button';

describe('btsp-button', () => {
  it('should build', () => {
    expect(new BtspButton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [BtspButton],
        html: '<btsp-button></btsp-button>'
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
