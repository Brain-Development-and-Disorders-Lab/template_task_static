// Declare jsPsych
declare const jsPsych;

// Timeline collection type
declare type Timeline = TimelineNode[];

// Timeline node type, representing different timeline
// element parameter types
declare type TimelineNode = {
  type: string;

  // Fullscreen plugin
  message?: string;
  fullscreen_mode?: boolean;

  // Instructions plugin
  pages?: string[] | string[];
  allow_keys?: boolean;
  show_page_number?: boolean;
  show_clickable_nav?: boolean;
};
