// Extend the global Window interface
import Experiment from 'jspsych-wrapper';

// Add Experiment to the global Window interface
declare global {
  interface Window {
    Experiment: Experiment;
  }
}
