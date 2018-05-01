import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'btsp-badge',
  styleUrl: 'btsp-badge.scss'
})
export class BtspBadge {
  @Prop() badgeType: string;
  @Prop() linkReference: string;
  @Prop() text: string;
  @Prop() color: string;

  render() {
    const linkClasses = "badge badge-" + this.color;
    const pillClasses = "badge badge-pill badge-" + this.color;
    const badgeClasses = "badge badge-" + this.color;


    if (this.badgeType == "link"){
      return (
        <div class="btsp-badge-wrapper">
          <a href={this.linkReference} class={linkClasses}>{this.text}</a>
        </div>
      );
    }

    if (this.badgeType == "pill") {
      return (<div class="btsp-badge-wrapper">
                <span class={pillClasses}>{this.text}</span>
              </div>);
    }
    if (this.badgeType == "badge"){
      return (<div class="btsp-badge-wrapper">
                <span class={badgeClasses}>{this.text}</span>
              </div>);
    }
  }
}
