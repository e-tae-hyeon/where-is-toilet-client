import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0fac577152414996dc9e2d92bd283bb3"
        ></script>
        <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0fac577152414996dc9e2d92bd283bb3&libraries=services"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
