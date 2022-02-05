import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import Button from "../Button/Button";
import { selectBot as selectBotAction } from "./actions";
import { resetGame } from "../Board/actions";

import "./styles";

const Bots = () => {
  const bots = useSelector((state) => state.bots);
  const dispatch = useDispatch();
  const selectBot = (name) => () => {
    dispatch(selectBotAction(name));
    dispatch(resetGame());
  };

  return (
    <ul className="bots">
      {bots.map(({ name, isSelected }) => (
        <li key={name}>
          <Button
            isActive={isSelected}
            onClick={isSelected ? () => null : selectBot(name)}
          >
            {name}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Bots;
