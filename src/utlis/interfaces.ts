export interface AnimalCardProps {
  name: string;
  animalImg: string;
  age: number;
  petType: string;
  root: string;
}

export interface AnimalTypes {
  id: number;
  name: string;
  img: string;
  age: number;
  petType: string;
  root: string;
}

export interface HomeButtonCardProps {
  children: React.ReactNode;
  imgSrc?: string;
  imgAlt?: string;
  onClick: any;
  icon?: JSX.Element;
}

export interface AnimalViewProps {
  animals: AnimalTypes[];
}
