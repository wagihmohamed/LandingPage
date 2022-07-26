export interface AnimalCardProps {
    name: string;
    animalImg: string;
    root: string;
    age: number;
}

export interface AnimalTypes {
    id: number;
    name: string;
    img: string;
    age: number;
    root: string;
}

export interface HomeButtonCardProps {
    children: React.ReactNode;
    imgSrc?: string;
    imgAlt?: string;
    icon?: JSX.Element;
}
