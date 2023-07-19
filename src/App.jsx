import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { shuffledCards } from "./utils/shuffledCards";
import { Request } from "./utils/Request";

export const App = () => {
  const [card, setCard] = useState();
  const [shown, setShown] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    Request(
      "https://raw.githubusercontent.com/Personare/front-end-challenge/master/tarot.json",
      setCard
    );
  }, []);

  useEffect(() => {
    if (card && shown) {
      handleStartGameAndShuffled(card);
    }
  }, [gameStarted]);

  const handleControlGame = () => {
    setShown(!shown);
    setGameStarted(!gameStarted);
    setIsClicked(false);
  };

  const handleStartGameAndShuffled = (card) => {
    const initialCards = [...card.cards];
    const newCards = shuffledCards(initialCards);
    setCard({ ...card, cards: newCards });
  };

  const handleShowContent = (name) => {
    const newSelectedCard = card.cards.find((card) => card.name === name);
    setSelectedCard(newSelectedCard);
  };

  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center font-bold text-[38px] pt-6">
        <Button label={shown ? "Pause" : "Start"} value={handleControlGame} />
      </div>
      <div className="flex justify-center items-center p-4">
        <main className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {card?.cards?.map((cardItem, index) => {
            return (
              <Card
                key={index}
                card={cardItem}
                upCard={selectedCard}
                shown={shown}
                handleShowContent={handleShowContent}
                index={index}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
};
