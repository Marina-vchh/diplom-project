export interface IFilterButtons {
   id: string;
   value: string;
}

export const FILTERBUTTONS: IFilterButtons[] = [
   {
       id: 'all',
       value: 'all',
   },
   {
       id: 'drink',
       value: 'drink',
   },
   {
       id: 'eat',
       value: 'eat',
   },
   {
      id: 'sign',
      value: 'sign',
   },
   {
      id: 'flower',
      value: 'flower',
   },
   {
      id: 'animal',
      value: 'animal',
   },
   {
      id: 'coffee',
      value: 'coffee',
   },
];

export interface IStickers {
   src: string;
   alt: string;
   name: string;
   price: number;
}

export const STICKERS: IStickers[] = [
   {
      src: '/images/stickers/Sticker1.jpg',
      alt:'coffee',
      name: 'Coffee',
      price: 1.50,
   },
   {
      src: '/images/stickers/Sticker2.jpg',
      alt:'foot',
      name: 'Foot',
      price: 1.50,
   },
   {
      src: '/images/stickers/Sticker3.jpg',
      alt:'girl',
      name: 'Girl',
      price: 1.50,
   },
   {
      src: '/images/stickers/Sticker4.jpg',
      alt:'flower',
      name: 'Flower',
      price: 1.50,
   },
   {
      src: '/images/stickers/Sticker5.jpg',
      alt:'macaroni',
      name: 'Macaroni',
      price: 1.50,
   },
   {
      src: '/images/stickers/Sticker6.jpg',
      alt:'sign',
      name: 'Sign',
      price: 1.50,
   },
   {
      src: '/images/stickers/Sticker7.jpg',
      alt:'bear',
      name: 'Bear',
      price: 1.50,
   },
   {
      src: '/images/stickers/Sticker8.jpg',
      alt:'idea',
      name: 'Idea',
      price: 1.50,
   },
   {
      src: '/images/stickers/Sticker9.jpg',
      alt:'sheep',
      name: 'Sheep',
      price: 1.50,
   }
];

export interface IOptions{
   value: string;
   label: string;
}

export const OPTIONS = [
   { value: 'new products first', label: 'New products first' },
   { value: 'name, A to Z', label: 'Name, A to Z' },
   { value: 'name, Z to A', label: 'Name, Z to A' },
   { value: 'price, low to high', label: 'Price, low to high' },
   { value: 'price, high to low', label: 'Price, high to low' },
 ]