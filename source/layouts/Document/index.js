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
      <script src="/main.js" />
    </body>
  </html>
)
