import { TestWindow } from '@stencil/core/testing';
import { BtspBreadcrumbContainer } from './btsp-breadcrumb-container';

describe('btsp-breadcrumb-container', () => {
  it('should build', () => {
    expect(new BtspBreadcrumbContainer()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [BtspBreadcrumbContainer],
        html: '<btsp-breadcrumb-container></btsp-breadcrumb-container>'
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
