import { useState, useEffect } from 'react'
import './App.css'
function App() {
  const emojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼']
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [solved, setSolved] = useState([])
  const [moves, setMoves] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const initializeGame = () => {
    const emojiPairs = [...emojis, ...emojis]
    const shuffled = emojiPairs.sort(() => Math.random() - 0.5)
    const newCards = shuffled.map((emoji, index) => ({
      id: index,
      emoji: emoji,
      flipped: false,
      solved: false
    }))
    
    setCards(newCards)
    setFlipped([])
    setSolved([])
    setMoves(0)
    setGameOver(false)
  }
  const handleCardClick = (id) => {
    if (flipped.length === 2) return
    if (flipped.includes(id) || solved.includes(id)) return
    const newFlipped = [...flipped, id]
    setFlipped(newFlipped)
    if (newFlipped.length === 2) {
      setMoves(moves + 1)
      const [firstId, secondId] = newFlipped
      const firstCard = cards.find(card => card.id === firstId)
      const secondCard = cards.find(card => card.id === secondId)
      if (firstCard.emoji === secondCard.emoji) {
        setSolved([...solved, firstId, secondId])
        setFlipped([])
      } else {
        setTimeout(() => {
          setFlipped([])
        }, 800)
      }
    }
  }
  useEffect(() => {
    if (solved.length === cards.length && cards.length > 0) {
      setGameOver(true)
    }
  }, [solved, cards])
  useEffect(() => {
    initializeGame()
  }, [])
  return (
    <div className="game-container">
      <h1>Memory Game</h1>
      
      <div className="game-info">
        <p>Moves: {moves}</p>
        <button onClick={initializeGame} className="restart-button">
          Restart Game
        </button>
      </div>
      <div className="card-grid">
        {cards.map(card => (
          <button
            key={card.id}
            className={`memory-card ${flipped.includes(card.id) ? 'flipped' : ''} ${solved.includes(card.id) ? 'solved' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            {(flipped.includes(card.id) || solved.includes(card.id)) ? card.emoji : '?'}
          </button>
        ))}
      </div>      
      {gameOver && (
        <div className="win-message">
          <h2>You Win!</h2>
          <p>You completed the game in {moves} moves</p>
        </div>
      )}
    </div>
  )
}
export default App
