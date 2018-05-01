import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'btsp-button',
  styleUrl: 'btsp-button.scss'
})
export class BtspButton {
  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
