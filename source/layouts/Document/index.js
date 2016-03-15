import React from 'react'
import styles from './styles.css'

export default ({ title, content }) => (
  <html>
    <head>
      <title>{ title }</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Join the country's most passionate and dedicated cyclists in an epic challenge to (virtually) ride across the country, collectively covering thousands of miles in teams of up to five members to raise funds and awareness for charity." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.2/es5-shim.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.2/es5-sham.min.js" />
      <script src='https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.js'></script>
      <link href='https://api.mapbox.com/mapbox.js/v2.3.0/mapbox.css' rel='stylesheet' />
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

      <script type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            var axel = Math.random() + "";
            var a = axel * 10000000000000;
            document.write('<iframe src="https://4565601.fls.doubleclick.net/activityi;src=4565601;type=landi0;cat=edh_g0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
          `
        }}
      />
      <noscript>
        <iframe src="https://4565601.fls.doubleclick.net/activityi;src=4565601;type=landi0;cat=edh_g0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=1?" width="1" height="1" frameBorder="0" style={{ display: 'none' }}></iframe>
      </noscript>
      <script type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n; n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','//connect.facebook.net/en_US/fbevents.js');  fbq('init', '177494755940749'); fbq('track', "PageView");
          `
        }}
      />
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=177494755940749&ev=PageView&noscript=1" />
      </noscript>
    </body>
  </html>
)
