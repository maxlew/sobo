import Head from 'next/head'
import styled from 'styled-components';

const breakpoint = '1024px'

const Heading = styled.h1`
  font-size: 42px;
  margin-top: 2em;
  text-align: center;
  font-family: 'Indie Flower', cursive;
  mix-blend-mode: difference;
  text-shadow: 2px 2px #ff0000;
`;

const Intro = styled.p`
  padding: 1em 2em;
  color: #fff;
  mix-blend-mode: screen;
  text-shadow: 2px 2px #000;

  @media(min-width: ${breakpoint}) {
    text-align: center;
  }
`

const P = styled.p`
  color: #fff;
  mix-blend-mode: screen;
  text-shadow: 2px 2px #000;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;

  ${props => props.noPadding ? '' : 'padding: 2em;'}
  ${props => props.double ? 'grid-column: span 2;' : ''}

  h2 {
    color: #fff;
    mix-blend-mode: screen;
    text-shadow: 2px 2px #000;
  }
`

const Gifts = styled.div`
  @media (min-width: ${breakpoint}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  flex: 0;

  @media(min-width: ${breakpoint}) {
    max-height: 800px;
    width: auto;
    align-self: center;
  }
`

const Image = styled.img`
  width: 100%;
  display: block;

  ${props => props.mobileOnly && `
    @media(min-width: ${breakpoint}) {
      display: none;
    }
  `}
`

const DonateButton = styled.a`
  margin-top: 2em;
  background-color: #3A4039;
  mix-blend-mode: difference;
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  height: 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 300ms ease-in-out;

  &:hover, &:active {
    transform: scale(1.2);
  }
`
export default function Home() {
  return (
    <div>
      <Head>
        <title>Sophie and Ryans Wedding Registry</title>
        <meta name="title" content="Sophie and Ryan's Wedding Registry" />
        <meta name="description" content="Sophie and Ryan are getting married! Here's some things you can buy or put money towards." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sobo.vercel.app/" />
        <meta property="og:title" content="Sophie and Ryan's Wedding Registry" />
        <meta property="og:description" content="Sophie and Ryan are getting married! Here's some things you can buy or put money towards." />
        <meta property="og:image" content="/scream.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sobo.vercel.app/" />
        <meta property="twitter:title" content="Sophie and Ryan's Wedding Registry" />
        <meta property="twitter:description" content="Sophie and Ryan are getting married! Here's some things you can buy or put money towards." />
        <meta property="twitter:image" content="/scream.jpg" />
      </Head>

      <main style={{ maxWidth: 800, margin: '0 auto'}}>
        <Section double noPadding>
          <Heading>
            Sophie and Ryan's<br/> Wedding Registry
          </Heading>
          <Intro>Hello! Thanks for visiting our page & for being a guest at our wedding. This page was created due to popular demand. We truly do not need any gifts, but if you must, here are a few items or experiences you can contribute to.</Intro>
          <HeroImage src='/3409a72e-e310-4555-b16b-79e64662399c.jpg' />
          {/* <Intro>We have cobbled together some things or experiences we have been eyeing off or have planned if you would like to contribute.</Intro> */}
        </Section>
        <Gifts>
          <Section>
            <h2>Sound Bar</h2>
            <P>We have been thinking about an upgrade to our sound set up for our future life as married netflix couch potatoes. And are looking at a Bose set up, naturally.</P>
            <Image src='https://media3.giphy.com/media/Me15sgUoYSCjHCs6wI/giphy.gif?cid=790b761149b8e4ec877657492f6fedfe2cb8cf4a669077c0&rid=giphy.gif&ct=g' />
            <Image src='https://media0.giphy.com/media/efUcLJePY6RkA/giphy.gif?cid=ecf05e47xhah19luk9zcmaxpwsjvw6gw12jrjlc66v9wuxna&rid=giphy.gif&ct=g' />
            <DonateButton href="https://paypal.me/pools/c/8Aq1sJbIJ8">Donate for sick sound</DonateButton>
          </Section>
          <Section>
            <h2>Honeymoon</h2>
            <P>We are road tripping to the Grampians & Otways in the depths of winter, staying in Halls Gap & Port Campbell. Contribute to our accommodation or our amenities budget!</P>
            <Image src='https://media0.giphy.com/media/CMrWv83j6Kfio/giphy.gif?cid=ecf05e47oyyy7r50xy5pkm8ndkllsi9ht9u52x4q9k5ut3nj&rid=giphy.gif&ct=g' />
            <Image src='/scream.jpg' />
            <DonateButton href="https://paypal.me/pools/c/8Aq1sJbIJ8">Help us on our Honeymoon</DonateButton>
          </Section>
          <Section>
            <h2>Household goods</h2>
            <P>We have lots of items already, and Ryan's favourite pastime is shopping. We do like luxury items like Sheridan sheet sets. Which are too much for one or two guests to buy. Contribute to a set!</P>
            <Image src='https://media4.giphy.com/media/5GoVLqeAOo6PK/giphy.gif?cid=ecf05e479apmas4xudfy33l5rsedwqyb2t6unvpudgpqr5ek&rid=giphy.gif&ct=g' />
            <Image src='https://media0.giphy.com/media/xUOwFYTPn5m0eEca64/giphy.gif?cid=ecf05e47pg7rn1ql27eogxq06nj4vvind88ctu5oeyfol1h9&rid=giphy.gif&ct=g' />
            <DonateButton href="https://paypal.me/pools/c/8Aq1sJbIJ8">Donate to our Palace</DonateButton>
          </Section>
          <Section>
            <h2>Treats for Norma</h2>
            <P>Norma is a big girl. She consumes lots of food, and plays lots of games. She loves food and toys so any contributions here will be enthusiastically received.</P>
            <Image src='/norma-blur.png' />
            <Image mobileOnly src='https://media2.giphy.com/media/huUcR3h1IpRkNJucgx/giphy.gif?cid=ecf05e47pg2f8fifea3mep1fpxc4yavzg6v6wiqkersa85dz&rid=giphy.gif&ct=g' />
            <DonateButton href="https://paypal.me/pools/c/8Aq1sJbIJ8">Give treats to Norms</DonateButton>
          </Section>
          <Section double>
            <Image src='/IMG_1795.GIF' />
            <P>Thanks! Love you & see you June 26th x</P>
          </Section>
        </Gifts>
      </main>
      <div className="background" />
    </div>
  )
}
