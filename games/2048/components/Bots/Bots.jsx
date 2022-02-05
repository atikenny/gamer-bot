import React from "react";

import bots from "../../../../bots/index";
import Button from "../Button/Button";

const Bots = () => (
  <ul>
    {bots.map(({ name }) => (
      <li key={name}>
        <Button>{name}</Button>
      </li>
    ))}
  </ul>
);

export default Bots;
