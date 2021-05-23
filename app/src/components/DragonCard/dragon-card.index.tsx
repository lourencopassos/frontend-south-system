import React from "react";
import { DragonCardProps } from "../../interfaces/interfaces";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { ReactComponent as Delete } from "../../assets/delete.svg";

const DragonCard: React.FC<DragonCardProps> = ({ name, id, deleteDragon }) => {
  return (
    <div className="dragon-card__container">
      <div className="dragon-card__content">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default DragonCard;
