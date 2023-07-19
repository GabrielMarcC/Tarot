/* eslint-disable react/prop-types */
import { Content } from "../Content";

export const Card = ({
  card,
  shown,
  upCard,
  index,
  selectedIndex,
  setSelectedIndex,
  handleShowContent,
  isClicked,
  setIsClicked,
}) => {
  return (
    <div>
      {shown ? (
        <div
          className="flex justify-center items-center duration-[3000ms] rounded-sm origin-bottom-right -rotate-[360deg] w-[170px] h-[320px] my-2 cursor-pointer"
          onClick={() => {
            setIsClicked(true);
            if (!isClicked) {
              handleShowContent(card.name);
              setSelectedIndex(index);
            }
          }}
        >
          {index === selectedIndex && isClicked ? (
            <div className="flex justify-center items-center shadow-lg bg-white w-[170px] h-[320px] my-2 rounded-lg cursor-pointer">
              <Content upCard={upCard} />
            </div>
          ) : (
            <img
              className="w-[100%] h-[100%]"
              src={card?.imageBackCard}
              alt={"carta virada para trás"}
            />
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center shadow-lg bg-white w-[170px] h-[320px] my-2 rounded-lg cursor-pointer">
          <img
            className="w-[140px] h-[280px]"
            src={card?.imageFront}
            alt={"carta tarot"}
          />
        </div>
      )}
    </div>
  );
};
