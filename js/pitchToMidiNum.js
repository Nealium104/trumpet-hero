import pitchClasses from "../data/pitchClasses.json" with { type: "json" }
import accidentals from "../data/accidentals.json" with { type: "json" }

/**
  * Converts a pitch written in scientific notation to a number corresponding
  * to MIDI notation.
  * @func
  * @param {string} pitch - The pitch in scientific notation
*/
export function convertPitch(pitch) {
  const pitchClass = pitch[0];
  pitch = pitch.replace(pitchClass, "");

  const octave = parseInt(pitch.slice(pitch.search(/\d/)));
  pitch = pitch.replace(octave, "");

  const accidental = accidentals[pitch] || 0;
  const baseVal = pitchClasses[pitchClass];
  return baseVal + (12 * (octave + 1)) + accidental;
}
