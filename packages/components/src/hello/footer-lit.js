import { LitElement, html, css } from 'lit-element'
import Style from './hello.css'

export class SimpleGreeting extends LitElement {
  static get properties() {
    return { name: { type: String } }
  }

  static get styles() {
    return css([Style])
  }

  constructor() {
    super()
    this.name = 'Worlds'
  }

  render() {
    return html`
    <span class="hello2">Hello,${this.name}!!</span>`
  }
}

// customElements.define('simple-greeting', SimpleGreeting)
