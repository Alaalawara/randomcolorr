/** @jsxRuntime classic */
/** @jsx jsx */
import { Global } from "@emotion/react";
import { ThemeProvider, jsx } from "theme-ui";
import Head from "next/head";
import { useRouter } from "next/router";
import theme from "../theme";


export default ({ children, colorPair = [] }) => {

  const router  = useRouter()


  return (
  <ThemeProvider theme={theme}>
    <div>
      <Head>
        <title>Randomcolorr - Generate color combinations</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="description"
          content="Get random, accessible color combinations"
        />
        <meta property="og:title" content="Randoma11y" />
        <meta
          property="og:description"
          content="Get random, accessible color combinations"
        />
        <meta property="og:url" content="https://randoma11y.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Randoma11y" />

        <meta property="og:image" content="https://components-ai.s3.amazonaws.com/og/randoma11y.jpg"/>
        <meta property="twitter:image" content="https://components-ai.s3.amazonaws.com/og/randoma11y.jpg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
    
      </Head>
      <Global
        styles={{
          html: {
            fontFamily: "system-ui, sans-serif",
            margin: 0,
            color: colorPair[0],
            backgroundColor: colorPair[1],
          },
          body: {
            color: 'inherit',
            backgroundColor: 'inherit',
          },
          "*": {
            boxSizing: "border-box",
            transition: 'color .2s ease, background-color .25s ease',
          },
        }}
      />
      
      <div
        sx={{
          pb: [4, 5, 5],
        }}
      >
        {children}
   
      </div>
      
      <footer
        sx={{
          borderTop: "solid",
          color: "currentColor",
          borderTopColor: 'currentCOlor',
          textAlign: "center",
          py: 4,
          px: 4,
        }}
      >
        <div
          sx={{
            fontSize: [0, 0, 1],
            display: 'flex', 
            alignItems: 'center',
            gap: '1em',
          }}
        >
          <a
            sx={{ color: colorPair[0], fontWeight: "bold", textDecoration: 'none',fontSize:"15px" }}
            href="https://swarajdev.vercel.app/"
            title="Dev Den"
          >
           Swaraj.dev
          </a>
          <a
            sx={{ color: colorPair[0], fontWeight: "bold", textDecoration: 'none', fontSize:"15px"}}
            href="https://github.com/Alaalawara/Randomcolorr"
            title="Design Den"
          >
            About
          </a>
          <a
            sx={{ ml: 'auto', color: colorPair[0], fontWeight: "bold", textDecoration: 'none', fontSize:"15px"}}
            href="https://github.com/Alaalawara"
            title="GitHub"
          >
            GitHub
          </a>
          <a
            sx={{ color: colorPair[0], fontWeight: "bold", textDecoration: 'none', fontSize:"15px"}}
            href="https://x.com/loops_infinity"
            title="X"
          >
            X
          </a>
        </div>
      </footer>
    </div>
  </ThemeProvider>
)};
