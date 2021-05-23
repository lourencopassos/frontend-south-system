import React, { useEffect, useState } from "react";
import DragonCard from "../../components/DragonCard/dragon-card.index";
import { Dragon } from "../../interfaces/interfaces";
import AppLayout from "../../layouts/AppLayout/app-layout.index";
import { getDragons, deleteDragon } from "../../services/api";

const Main: React.FC = () => {
  const [dragons, setDragons] = useState<Array<Dragon>>([]);

  useEffect(() => {
    getData();
  }, [dragons.length]);

  const getData = async () => {
    const data = await getDragons();
    setDragons(data);
  };

  const confirmDeleteDragon = (id: string): any => {
    if (window.confirm("Tem certeza?")) {
      deleteDragon(id).then(() => {
        getData();
      });
    }
  };

  return (
    <AppLayout title="Dashboard">
      <div className="main-page__dragon__card__list ">
        {dragons.map(({ name, id, histories, type, createdAt }) => {
          return (
            <DragonCard
              name={name}
              key={id}
              id={id}
              createdAt={createdAt}
              type={type}
              histories={histories}
              deleteDragon={confirmDeleteDragon}
              edit={confirmDeleteDragon}
            />
          );
        })}
      </div>
    </AppLayout>
  );
};

export default Main;
