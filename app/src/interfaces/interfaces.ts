export interface Dragon {
  name: string;
  createdAt: string;
  id: string;
  type: string;
  histories: string;
}

export interface DragonCardProps {
  name: string;
  createdAt: string;
  id: string;
  type: string;
  histories: string;
  deleteDragon(id: string): Function;
  edit: Function;
}