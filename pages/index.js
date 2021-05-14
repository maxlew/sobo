import Head from 'next/head'
import styled from 'styled-components';

const Heading = styled.h1`
  margin-top: 2em;
  text-align: center;
  font-family: 'Indie Flower', cursive;
  mix-blend-mode: difference;
  text-shadow: 2px 2px #ff0000;
`;

const Intro = styled.p`
  padding: 2em;
  color: #fff;
  mix-blend-mode: screen;
  text-shadow: 2px 2px #000;
`

const Section = styled.section`
  padding: 2em;
  padding-bottom: 4em;
  h2 {
    color: #fff;
    mix-blend-mode: screen;
    text-shadow: 2px 2px #000;
  }
`

const Gifts = styled.div`
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: max-content;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  display: block;
  max-height: 70vh;
  object-fit: cover;
`

const Image = styled.img`
  width: 100%;
  display: block;
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
      </Head>

      <main>
        <Heading>
          Sophie and Ryan's<br/> Wedding Registry
        </Heading>
        <Intro>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo sed tellus varius sollicitudin.</Intro>
        <HeroImage src='/hats.jpg' />
        <Intro>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in leo sed tellus varius sollicitudin.</Intro>
        <Gifts>
          <Section>
            <h2>Sound Bar</h2>
            <Image src='https://media3.giphy.com/media/Me15sgUoYSCjHCs6wI/giphy.gif?cid=790b761149b8e4ec877657492f6fedfe2cb8cf4a669077c0&rid=giphy.gif&ct=g' />
            <Image src='https://media0.giphy.com/media/efUcLJePY6RkA/giphy.gif?cid=ecf05e47xhah19luk9zcmaxpwsjvw6gw12jrjlc66v9wuxna&rid=giphy.gif&ct=g' />
            <DonateButton href="https://paypal.me/pools/c/8zsfktBS5c">Give money for sick sound</DonateButton>
          </Section>
          <Section>
            <h2>Honeymoon</h2>
            <Image src='https://media0.giphy.com/media/CMrWv83j6Kfio/giphy.gif?cid=ecf05e47oyyy7r50xy5pkm8ndkllsi9ht9u52x4q9k5ut3nj&rid=giphy.gif&ct=g' />
            <Image src='/scream.jpg' />
            <DonateButton href="https://paypal.me/pools/c/8zsfktBS5c">Give money for Holidays</DonateButton>
          </Section>
          <Section>
            <h2>Something Else</h2>
            <Image src='https://media4.giphy.com/media/5GoVLqeAOo6PK/giphy.gif?cid=ecf05e479apmas4xudfy33l5rsedwqyb2t6unvpudgpqr5ek&rid=giphy.gif&ct=g' />
            <Image src='https://media0.giphy.com/media/xUOwFYTPn5m0eEca64/giphy.gif?cid=ecf05e47pg7rn1ql27eogxq06nj4vvind88ctu5oeyfol1h9&rid=giphy.gif&ct=g' />
            <DonateButton href="https://paypal.me/pools/c/8zsfktBS5c">Give money for random shit</DonateButton>
          </Section>
          <Section>
            <h2>Treats for Norma</h2>
            <Image src='/norma-blur.png' />
            <Image src='https://media2.giphy.com/media/huUcR3h1IpRkNJucgx/giphy.gif?cid=ecf05e47pg2f8fifea3mep1fpxc4yavzg6v6wiqkersa85dz&rid=giphy.gif&ct=g' />
            <DonateButton href="https://paypal.me/pools/c/8zsfktBS5c">Give money for norms</DonateButton>
          </Section>
        </Gifts>
        <div className="background" />
      </main>
    </div>
  )
}
