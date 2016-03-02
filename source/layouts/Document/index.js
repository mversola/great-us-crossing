import React from 'react'
import styles from './styles.css'

export default ({ title, content }) => (
  <html>
    <head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.2/es5-shim.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.2/es5-sham.min.js" />
      <link rel="stylesheet" href="/vendor.css" />
      <link rel="stylesheet" href="/main.css" />
    </head>
    <body>
      <main
        id="mount"
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
      <script src="/main.js" />
    </body>
  </html>
)
