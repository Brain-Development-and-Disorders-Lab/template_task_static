// Define the layout and order of trials in the experiment
// Configuration
import {Configuration} from './Configuration';

// Import crossplatform API
import {Experiment} from 'jspsych-wrapper';

// Import jsPsych plugins
import 'jspsych/plugins/jspsych-instructions';

// Import the custom plugin before adding it to the timeline
import './Plugin';

// Timeline setup
const timeline: Timeline = [];

// Create a new Experiment instance
const experiment = new Experiment(Configuration);

experiment.load().then(() => {
  // Configure and start the experiment
  experiment.start({
    timeline: timeline,
    show_progress_bar: true,
    show_preload_progress_bar: true,
  });
});