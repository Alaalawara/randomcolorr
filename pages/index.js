/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx } from 'theme-ui'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import contrast from 'get-contrast'
import {ArrowRightCircle, Eye, EyeOff, Anchor } from 'react-feather'

import Layout from '../components/layout'
import Button from '../components/button'
import ContrastBoxes from '../components/contrast-boxes'

import { getColorPair } from '../lib'

const Page = ({ pinnedColor }) => {

  const durableObjectName = 'Randomcolorr'; // Replace with the actual name of your Durable Object

  const handleIncrement = async () => {
    try {
      await fetch(`https://ts-gen-count.adam-f8f.workers.dev/increment?name=${durableObjectName}`, {
        method: 'POST',
      });
      fetchCount(); // Update count after increment
    } catch (error) {
      console.error('Error incrementing count:', error);
    }
  };


  const [colorPair, setColorPair] = useState([])
  const newColorPair = () => {
    setColorPair(getColorPair(pinnedColor))
    handleIncrement()

  }

  const skip = () => {
    newColorPair()
  }
  const skiplink = (color) => {
    setColorPair(getColorPair(color))
  }
  const handleKeyUp = (e) => {
    const { key } = e

    if (key === 'ArrowRight') {
      skip()
    } else {
      return
    }
  }

  useEffect(() => {
    newColorPair()
  }, [])

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [colorPair])

  if (!colorPair.length) {
    return (
      <Layout>
        <div sx={{ minHeight: '66vh', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4, }}>
          <h2>Generating color pair...</h2>
        </div>
      </Layout>
    )
  }


  const [colorA, colorB] = colorPair

  const contrastRatio = contrast.ratio(colorA, colorB).toFixed(2)
  const contrastScore = contrast.score(colorA, colorB)

  const ColorLink = ({ color, ...props }) => {
    return (
      <Link href={{
        pathname: '/',
        query: { color: color },
      }} scroll={false}
      >
        <a
          onClick={() => skiplink(color)}
          title={'Find matches for ' + color}
          sx={{
            display: 'block',
            textDecoration: 'none',
            backgroundColor: color,
            borderRadius: '9999px',
            fontSize: 0,
            height: ['12px', '12px', '12px'],
            aspectRatio: '1/1',
            cursor: 'pointer',
            //boxShadow: '0 0 0 2px '+colorB+', 0 0 0 3px '+colorB,
            transition: 'all .2s ease',
            ':hover': { filter: 'brightness(120%)' }
            //':active': {boxShadow: '0 0 0 2px '+colorB+', 0 0 0 3px '+color},

          }} {...props} />
      </Link>
    )
  }
  return (
    <Layout colorPair={colorPair}>
      <header
        sx={{
          position: 'sticky',
          top: 0,
          borderBottomWidth: '3px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'currentColor',
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: '1fr 1fr 1fr',
          backgroundColor: colorPair[1],
          color: colorPair[0],
        }}
      >
        <h1
          sx={{
            display: 'flex',
            m: 0,
            alignItems: 'center',
            fontSize: [2, 2, 2],
            gap: 3,
            pl: 4,
            py: 3,
          }}
        >
          <span
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              height: '30px',
              width: '30px'
            }}
          >
            <EyeOff size={25} strokeWidth={3}/>
            <Eye size={25} strokeWidth={3} sx={{rotate:"90deg"}}/>

          </span>
          <span sx={{ fontSize: '15px' }}>Randomcolorr</span>
        </h1>
        <Link href={{
          pathname: '/apca',
          query: { color: colorPair[0] },
        }} scroll={false}
        >
          <a
            title='Switch algorithm'
            sx={{
              mx: 'auto',
              my: 0,
              textDecoration: 'none',
              color: 'currentColor',
              textAlign: 'center',
              fontWeight: 500,
              fontSize: [0, 1, 3],
              fontFamily: 'monospace, monospace',
              display: 'flex',
              alignItems: 'center',
              lineHeight: 1,
              gap: '12px',
              transition: 'all .2s ease',
              cursor: 'pointer',
              ':hover': {
                filter: 'saturate(150%), contrast(125%)'
              }

            }}
          >
          </a>
        </Link>
        <div
          sx={{
            ml: 'auto',
            height: '100%',
            display: 'flex',
            alignItems: 'stretch',
          }}
        >
          <Button
            color={colorA}
            backgroundColor={colorB}
            borderColor={colorB}
            onClick={skip}
            title='Press the right arrow key to generate a new color combo'
            sx={{fontWeight:"bold"}}
          >
            Generate
            <ArrowRightCircle size={20} />
          </Button>
        </div>
      </header>
      <section sx={{
        mx: 'auto',
        bg: 'transparent',
        maxWidth: '64rem',
      }}>
        <div sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: ['wrap', 'nowrap'],
          gap: '8px',
          filter: 'saturate(100%)',
          transition: 'filter .25s ease',
          ':hover': {
            filter: 'saturate(100%)'
          },
          ':hover': {
            filter: 'saturate(100%)'
          },
          px: 4,
          height: '64px',
          mx: 'auto',
          overflow: 'hidden',
          justifyContent: 'center',
        }}>
          <div sx={{
            '> a': {
              // boxShadow: '0 0 2px 4px rgba(0,0,0,.125)'
            }
          }}><ColorLink color='#ffffff' /></div>
          <ColorLink color='#000000' />
          <ColorLink color='#0000ff' />
          <ColorLink color='#1e90ff' />
          <ColorLink color='#87ceeb' />
          <ColorLink color='#4b0082' />
          <ColorLink color='#8a2be2' />
          <ColorLink color='#ff00ff' />
          <ColorLink color='#ee82ee' />
          <ColorLink color='#ff69b4' />
          <ColorLink color='#ff0000' />
          <ColorLink color='#ff4500' />
          <ColorLink color='#ffa500' />
          <ColorLink color='#ffd700' />
          <ColorLink color='#ffff00' />
          <ColorLink color='#00ff7f' />
          <ColorLink color='#008080' />
          <ColorLink color='#00ffff' />
          <ColorLink color='' children='Clear' />
        </div>
      </section>

      <ContrastBoxes colorPair={colorPair} />
      <div sx={{ textAlign: 'center', pt: 5, }}>
        <a
          sx={{
            display: 'inline-flex',
            mx: 'auto',
            color: colorPair[0], fontWeight: "bold", textDecoration: 'none',
            gap: '8px',
            transition: 'all .25s ease',
            ':hover': {
              filter: 'hue-rotate(140deg)',
              opacity: .8,

            }

          }}
          href="https://github.com/Alaalawara/Randomcolorr"
        >
          <Anchor size={20} strokeWidth={2} /> ease family
        </a>
      </div>

    </Layout>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      pinnedColor: context.query.color ? decodeURI(context.query.color) : null,
    },
  }
}

export default Page
