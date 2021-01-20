export class NcSideBar extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `
      <div>side bar</div>
    `
  }
}

// export const SideBar = /*#__PURE__*/ (() => {
//   if (!customElements.get('nc-side-bar')) {
//     customElements.define('nc-side-bar', NcSideBar)
//   }
// })()

// if (!customElements.get('nc-side-bar')) {
//   customElements.define('nc-side-bar', NcSideBar)
// }
