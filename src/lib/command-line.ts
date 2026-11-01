/** Delay after page load before the command starts being typed. */
export const TYPING_START_MS = 400;
/** Time to type a single character. */
export const TYPING_CHAR_MS = 90;
/** Pause after the last character, as if Enter was pressed, before the output appears. */
const ENTER_PAUSE_MS = 350;

/** Total time until a typed command has "run" — the page content reveals after this. */
export function commandDuration(command: string): number {
  return TYPING_START_MS + command.length * TYPING_CHAR_MS + ENTER_PAUSE_MS;
}
