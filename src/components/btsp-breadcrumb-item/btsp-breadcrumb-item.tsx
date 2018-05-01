import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'btsp-breadcrumb-item',
  styleUrl: 'btsp-breadcrumb-item.scss',
  shadow:false
})
export class BtspBreadcrumbItem {
  @Prop() linkReference: string;
  @Prop() text: string;
  @Prop() active: boolean = false;

  render() {
    const breadcrumbClass = this.active ? "breadcrumb-item active" : "breadcrumb-item";

    if(this.active){
      return (<li class={breadcrumbClass}>{this.text}</li>);
    }

    return (
      <li class={breadcrumbClass}>
        <a href={this.linkReference}>{this.text}</a>
      </li>
    );
  }
}
