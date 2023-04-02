export const LS_ABYSSES_KEY = 'abyss';

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
  stockBefore = 'You forgot type your Stock Before',
  stockAfter = 'You forgot type your Stock After',
  roomOne = 'You forgot select loot amount in the Room One',
  roomTwo = `You forgot select loot amount in the Room Two`,
  roomThree = `You forgot select loot amount in the Room Three`,
  success = 'Abyss is saved',
}
