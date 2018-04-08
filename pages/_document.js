import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'
import flush from 'styled-jsx/server'

export default class AppDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = [sheet.getStyleElement(), flush()]
    return {...page, styleTags}
  }

  render() {
    const {styleTags} = this.props

    return (
      <html>
        <Head>
          {styleTags}
          <link
            rel="stylesheet"
            href="https://s3.sa-east-1.amazonaws.com/emcasa/css/react-select.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800"
            rel="stylesheet"
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${
              process.env.GOOGLE_ANALYTICS_TRACKING_ID
            }`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || []
                function gtag(){
                  dataLayer.push(arguments)
                }
                gtag('js', new Date())
                gtag('config', '${process.env.GOOGLE_ANALYTICS_TRACKING_ID}')

                <!-- Facebook Pixel Code -->
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '710980862398359');
                fbq('track', 'PageView');
                <!-- End Facebook Pixel Code -->
              `
            }}
          />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <!-- Facebook Pixel Code -->
                <img height="1" width="1"
                src="https://www.facebook.com/tr?id=710980862398359&ev=PageView
                &noscript=1"/>
                <!-- End Facebook Pixel Code -->
              `
            }}
          />

          {/* Start code for Google AdWords */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                /* <![CDATA[ */
                var google_conversion_id = 830164609;
                var google_custom_params = window.google_tag_params;
                var google_remarketing_only = true;
                /* ]]> */
              `
            }}
          />

          <script
            type="text/javascript"
            src="//www.googleadservices.com/pagead/conversion.js"
          />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <div style="display:inline;">
                  <img
                    height="1"
                    width="1"
                    style="border-style:none;"
                    alt=""
                    src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/830164609/?guid=ON&amp;script=0"
                  />
                </div>
              `
            }}
          />
          {/* End code for Google AdWords */}

          {/* Start code for Hotjar */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:784178,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `
            }}
          />
          {/* End code for Hotjar */}

          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <link
            rel="shortcut icon"
            href={`/static/${process.env.REACT_APP_FAVICON}`}
            key="favicon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
