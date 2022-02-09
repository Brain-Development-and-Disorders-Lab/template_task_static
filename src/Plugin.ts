// Source code for the jsPsych plugin

// Logging library
import consola from 'consola';

// Core modules
import {Configuration} from './Configuration';

jsPsych.plugins[Configuration.studyName] = (() => {
  const plugin = {
    info: {},
    trial: (displayElement: HTMLElement, trial: Trial) => {
      // Debugging info if this is reached
      consola.debug(`displayElement:`, displayElement);
      consola.debug(`trial:`, trial);

      // Should raise an error
      consola.error(`Not implemented.`);
    },
  };

  plugin.info = {
    name: Configuration.studyName,
    parameters: {},
  };

  plugin.trial = (displayElement: HTMLElement, trial: Trial) => {
    const Experiment = window.Experiment;

    // Setup the trial data to be stored
    const trialData: Data = {
      trial: trial.trial,
      trialDuration: 0,
    };

    // Record the start time
    const startTime = performance.now();

    /**
     * Function to finish the trial and unmount React components
     * cleanly if required
     */
    function finishTrial(): void {
      // Record the total reaction time
      const endTime = performance.now();
      const duration = endTime - startTime;
      trialData.trialDuration = duration;

      // If the next trial isn't React-based, clean up React
      if (trial.clearScreen === true) {
        ReactDOM.unmountComponentAtNode(displayElement);
      }

      // Re-enable keyboard actions
      document.removeEventListener('keydown', () => {
        return false;
      });

      // Finish the jsPsych trial
      jsPsych.finishTrial(trialData);
    }
  };

  return plugin;
})();
