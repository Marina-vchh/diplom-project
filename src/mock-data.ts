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
   id: number;
   src: string;
   alt: string;
   name: string;
   price: number;
   isLike: boolean;
}

export const STICKERS: IStickers[] = [
   {
      id: 1,
      src: '/images/stickers/Sticker1.jpg',
      alt:'coffee',
      name: 'Coffee',
      price: 1.53,
      isLike: false,
   },
   {
      id: 2,
      src: '/images/stickers/Sticker2.jpg',
      alt:'foot',
      name: 'Foot',
      price: 1.57,
      isLike: false,
   },
   {
      id: 3,
      src: '/images/stickers/Sticker3.jpg',
      alt:'girl',
      name: 'Girl',
      price: 1.51,
      isLike: false,
   },
   {
      id: 4,
      src: '/images/stickers/Sticker4.jpg',
      alt:'flower',
      name: 'Flower',
      price: 1.52,
      isLike: false,
   },
   {
      id: 5,
      src: '/images/stickers/Sticker5.jpg',
      alt:'macaroni',
      name: 'Macaroni',
      price: 1.58,
      isLike: false,
   },
   {
      id: 6,
      src: '/images/stickers/Sticker6.jpg',
      alt:'sign',
      name: 'Sign',
      price: 1.55,
      isLike: false,
   },
   {
      id: 7,
      src: '/images/stickers/Sticker7.jpg',
      alt:'bear',
      name: 'Bear',
      price: 1.51,
      isLike: false,
   },
   {
      id: 8,
      src: '/images/stickers/Sticker8.jpg',
      alt:'idea',
      name: 'Idea',
      price: 1.55,
      isLike: false,
   },
   {
      id: 9,
      src: '/images/stickers/Sticker9.jpg',
      alt:'sheep',
      name: 'Sheep',
      price: 1.55,
      isLike: false,
   }
];