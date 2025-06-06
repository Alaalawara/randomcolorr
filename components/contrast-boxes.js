/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import namer from 'color-namer'
import { ArrowRight } from 'react-feather'


const Scale = () => {
  return (
  <section sx={{ mt: 3, width: '100%', display: 'flex', alignItems: 'stretch', gap: '1px', height: '32px', borderRadius: '6px', overflow: 'hidden' }}>
     <div sx={{ opacity: '100%', bg: 'currentColor', height: '100%', width: '100%' }}> </div>
  </section>
  )
}


const Symbols = ({ }) => {
  return (
    <div sx={{ display: 'grid', gap: '2em', mt: 3, gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))'}}>
    <div sx={{  aspectRatio: '1 / 1', bg: 'currentColor', borderRadius: '9999px'}}></div>
    <div sx={{ aspectRatio: '1 / 1', bg: 'currentColor' }}></div>
    <div sx={{  aspectRatio: '1 / 1', bg: 'transparent', borderRadius: '9999px', border: '3px solid currentColor',}}></div>
<div
  sx={{
    aspectRatio: '1 / 1',
    width: '120px',
    backgroundColor: 'transparent',
    border: '3px solid currentColor',
  }}
></div>
    </div>
  )
}

const Border = () => {
  return (
    <hr sx={{ backgroundColor: 'currentColor', padding: 0, height: '4px', border: 0, display: 'block', color: 'inherit' }} />
  )
}

const BorderLinearGradient = () => {
  return (
    <hr sx={{ backgroundColor: 'currentColor', padding: 0, height: '4px', border: 0, display: 'block', color: 'inherit' }} />
  )
}

const BorderStripe = () => {
  return (
    <hr sx={{ 
      backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent  8px, currentColor 8px, currentColor 10px)', 
      padding: 0, 
      aspectRatio: '6 / 1',
      border: 0, 
      display: 'block', 
      color: 'inherit' 
    }} />
  )
}


const Text = () => {
  return (
    <p sx={{ maxWidth: '80ch', lineHeight: '1.5'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    </p>
  )
}

const ContrastBox1 = ({ color, backgroundColor }) => (
  <div
    sx={{
      color,
      backgroundColor,
      p: [3, 4, '80px'],
      boxShadow: '0 0 0 1px currentColor',
      borderRadius: '12px',

    }}
  >
      <h3
        sx={{
          m: 0,
          fontSize: [4, 6, 7],
          fontWeight: 900
        }}
      >
        {color}
      </h3>
    <Border />
    <BorderStripe />
<pre sx={{ mt: 3, borderRadius: '0px', py: 3, px: 3, boxShadow: '0 0 0 1px currentColor' }}>
      <code sx={{ fontSize: 1, }}>
      {`.theme-alt {`}<br />
        &nbsp;&nbsp;color: {color};<br />
        &nbsp;&nbsp;background-color: {backgroundColor};<br />
      {`}`}
      </code>
    </pre>
    <Text />
    <Symbols />
    <Scale />
    {/* <Gradient color={color} background={backgroundColor} /> */}
  </div>
)

const ContrastBox = ({ color, backgroundColor }) => (
  <div
    sx={{
      color,
      backgroundColor,
      p: [3, 4, '80px'],
      boxShadow: '0 0 0 1px currentColor',
      borderRadius: '12px',
    }}
  >
    <h3
      sx={{
        m: 0,
        fontSize: [4, 6, 7],
        fontWeight: 800
      }}
    >
      {color}
    </h3>
    <Border />
    <BorderStripe />
    <pre sx={{ mt: 3, borderRadius: '0px', py: 3, px: 3, boxShadow: '0 0 0 1px currentColor' }}>
      <code sx={{ fontSize: 1, }}>
      {`.theme {`}<br />
        &nbsp;&nbsp;color: {color};<br />
        &nbsp;&nbsp;background-color: {backgroundColor};<br />
      {`}`}
      </code>
    </pre>
    <Text />
    <Symbols />
    <Scale />
  </div>
)

const ContrastBoxes = ({ colorPair }) => (
  <div
    sx={{
      px: 4,
      display: 'grid',
      width: '100%',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 3,
      mx: 'auto',
      maxWidth: '96rem',
    }}
  >
    <ContrastBox
      color={colorPair[0]}
      backgroundColor={colorPair[1]}
    />
    <ContrastBox1
      color={colorPair[1]}
      backgroundColor={colorPair[0]}
    />
  </div>
)

export default ContrastBoxes
