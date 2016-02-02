import React from 'react'

export default ({ content }) => (
  <html>
    <head>
      <title>Static site starter</title>
      <link rel="stylesheet" href="/main.css" />
    </head>
    <body>
      <main
        id="mount"
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.2/es5-shim.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.2/es5-sham.min.js" />
      <script src="/main.js" />
    </body>
  </html>
)
