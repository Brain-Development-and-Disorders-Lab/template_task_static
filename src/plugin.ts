/**
 * @file Plugin file containing code establishing a jsPsych plugin for the
 * template task. Configures data storage and displays a React screen
 * to the participant. Handles the end of the trial by storing data and
 * cleaning up the display.
 * @author Henry Burgess <henry.burgess@wustl.edu>
 */

// Logging library
import consola from "consola";

// Core modules
import { Configuration } from "src/configuration";

jsPsych.plugins[Configuration.studyName] = (() => {
  const plugin = {
    info: {},
    trial: (displayElement: HTMLElement, trial: any) => {
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

  plugin.trial = (displayElement: HTMLElement, trial: any) => {
    const Experiment = window.Experiment;

    // Setup the trial data to be stored
    const trialData = {
      trial: trial.trial,
      trialDuration: 0,
    };

    // Record the start time
    const startTime = performance.now();

    /**
     * Function to finish the trial and unmount React components
     * cleanly if required
     */
    const finishTrial = (): void => {
      // Record the total reaction time
      const duration = performance.now() - startTime;
      trialData.trialDuration = duration;

      // Re-enable keyboard actions
      document.removeEventListener("keydown", () => {
        return false;
      });

      // Finish the jsPsych trial
      jsPsych.finishTrial(trialData);
    };

    // Custom plugin implementation should be placed here
  };

  return plugin;
})();
