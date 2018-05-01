import { TestWindow } from '@stencil/core/testing';
import { BtspBreadcrumbItem } from './btsp-breadcrumb-item';

describe('btsp-breadcrumb-item', () => {
  it('should build', () => {
    expect(new BtspBreadcrumbItem()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    let window;

    beforeEach(async () => {
      window = new TestWindow();
      element = await window.load({
        components: [BtspBreadcrumbItem],
        html: '<btsp-breadcrumb-item></btsp-breadcrumb-item>'
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
