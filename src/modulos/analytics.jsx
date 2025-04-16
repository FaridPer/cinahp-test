import Script from "next/script"

const GoogleAnalytics = () => {

    return (
      <>
       <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-0G4L7ST13M"
        />
        <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0G4L7ST13M');
        `}
        </Script>
      </>  
    );
};
export default GoogleAnalytics;