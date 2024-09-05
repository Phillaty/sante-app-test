import logo from './images/logo-sante-odonto.png';
import confete from './images/confetti.gif';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [firstPhrase, setFirstPhrase] = useState('');
  const [secondPhrase, setSecondPhrase] = useState('');

  const [isAnagram, setIsAnagram] = useState(false);

  const sortString = (text) => {
    return text.toLocaleLowerCase().split('').sort().join('').replaceAll(' ', '');
  }

  useEffect(() => {
    if (firstPhrase) {
      const sortPhraseOne = sortString(firstPhrase);
      const sortPhraseTwo = sortString(secondPhrase);

      setIsAnagram(sortPhraseOne === sortPhraseTwo);
    } else {
      setIsAnagram(false);
    }
  }, [firstPhrase, secondPhrase]);

  return (
    <div className="container">
      <img src={logo} className="logo" alt="logo" />
      <p>Digite duas frases ou palavras para saber se são um anagrama</p>
      <div className='gameContainer'>
        <div className='itemPhrase'>
          <p>Primeira frase</p>
          <input onChange={(e) => setFirstPhrase(e.target.value ?? '')} value={firstPhrase} />
        </div>

        <div className='itemPhrase'>
          <p>Segunda frase</p>
          <input onChange={(e) => setSecondPhrase(e.target.value ?? '')} value={secondPhrase} />
        </div>
      </div>


      <div className='answer'>
        {firstPhrase && secondPhrase && firstPhrase !== secondPhrase &&
          <>
            {isAnagram ? <p className='correct'>É um anagrama!!!</p> : <p className='wrong'>Não é um anagrama :c</p>}
          </>
        }

        {firstPhrase && secondPhrase && firstPhrase === secondPhrase &&
          <>
            É mesma palavra! :o
          </>
        }
      </div>

      {isAnagram && firstPhrase && secondPhrase && firstPhrase !== secondPhrase && <img className='confete' src={confete} alt="confete" key={Date.now()} />}
    </div>
  );
}

export default App;
