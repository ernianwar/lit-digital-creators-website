const GA_ID = "G-D50H0F8F8N"

export default function GoogleAnalytics() {
  return (
    <>
      <script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        async
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
        }}
      />
    </>
  )
}