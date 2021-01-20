import { Slim } from 'slim-js'

export const footerSlim = Slim.tag(
  'my-tag',
  `
    <style>
        :host {
          display: block;
        }
        .slim {
          font-size: 16px;
          color: red;
        }
    </style>
    <span class="slim">Hello, i am a custom element</span>
  `,
  class MyTag extends Slim {
    get useShadow() {
      return true
    }
  }
)
