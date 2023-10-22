import React from 'react';

export const GlobalContext = React.createContext();

export default GlobalContext;

export const MEMORY = 0;
export const CARDS = 1;
export const WORDS = 1;
export let stats = {memory_acc: []};
//For Users.stats, the constants determine location of stats
