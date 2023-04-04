export const HOMEPAGE = 'https://github.com/Vonubat/abyss-helper';
export const LS_ABYSSES_KEY = 'abyss';
export const ROOM_ONE_DEADLINE = '05';
export const ROOM_TWO_DEADLINE = '10';
export const ROOM_THREE_DEADLINE = '15';

export const NULLABLE_ABYSS = {
  created: null,
  duration: null,
  roomOne: null,
  roomTwo: null,
  roomThree: null,
  stockBefore: null,
  stockAfter: null,
};

export enum Path {
  mainPage = '/',
  any = '*',
}

export enum ValidationMsg {
  stockBefore = 'You forgot to type your Stock Before',
  stockAfter = 'You forgot to type your Stock After',
  roomOne = 'You forgot to select loot amount in the Room One',
  roomTwo = `You forgot to select loot amount in the Room Two`,
  roomThree = `You forgot to select loot amount in the Room Three`,
}

export enum SysMsg {
  stockBefore = 'Stock Before is copied to clipboard',
  stockAfter = 'Stock After is copied to clipboard',
  success = 'Abyss is saved',
  dontForgetStart = 'DON`T FORGET START ABYSS!!!',
}
