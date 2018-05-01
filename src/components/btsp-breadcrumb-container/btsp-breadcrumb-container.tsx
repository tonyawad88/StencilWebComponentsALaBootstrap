import { Component } from '@stencil/core';

@Component({
  tag: 'btsp-breadcrumb-container',
  styleUrl: 'btsp-breadcrumb-container.scss'
})
export class BtspBreadcrumbContainer {

  render() {
    return (
      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <slot />
          </ol>
      </nav>
    );
  }
}
