import React, { useState } from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  const [text, setText] = useState('')

  return (
    <Container>
      <Head>
        <title>Emoji Translator</title>
      </Head>

      <header>
        <h1>✨ Emoji Translator ✨</h1>
        <h3>Text a frase and I will translate for u</h3>
      </header>

      <main>
        <div>
          <label htmlFor="text">Text:</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={({ target }) => setText(target.value)}
            placeholder="ex: smiley face"
          />
        </div>

        <div>
          <label htmlFor="emoji">Emoji: (click to copy)</label>
          <input
            type="emoji"
            value={text}
            id="emoji"
            readOnly={true}
            placeholder="😃"
          />
        </div>
      </main>
    </Container>
  )
}

export default Home
