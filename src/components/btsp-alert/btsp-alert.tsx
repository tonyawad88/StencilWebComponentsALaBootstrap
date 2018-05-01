import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'btsp-alert',
  styleUrl: 'btsp-alert.scss'
})
export class BtspAlert {
  @Prop() text: string;
  @Prop() color: string;

  default : boolean = true;

  render() {
    if(this.color && this.color.length > 0) this.default = false;
    var color = "alert " + (this.default ? "alert-light" : "alert-" + this.color);
    return (
      <section>
        <div class={color} role="alert">
          {this.text}
          <slot />
        </div>
      </section>
    );
  }
}
