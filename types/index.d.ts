// Types for the task are placed in this file
// Module declaration
declare module 'intentions-game' {};

// Trial type to enforce parameters
declare type Trial = {
  trial: number,
  clearScreen: boolean,
};

// Data type used to enforce trial data storage format
declare type Data = {
  trial: number,
  trialDuration: number,
};