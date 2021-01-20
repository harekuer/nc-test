export class NcHeader extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <style>
        div {
          color: red;
        }
        .header {
          font-size: 16px;
        }
      </style>
      <div class="header">ncheader</div>
    `
  }
}

// export const Header = /*#__PURE__*/ (() => {
//   if (!customElements.get('nc-header')) {
//     customElements.define('nc-header', NcHeader)
//   }
// })()

// if (!customElements.get('nc-header')) {
//   customElements.define('nc-header', NcHeader)
// }
