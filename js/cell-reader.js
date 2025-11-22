import noteTable from "./data/notes.json" with { type: "json" };

const cell = ['C4', 'D4', 'E4', 'G4'];

function getCellFingering(notes) {
    const collect = [];
    for (const note of notes) {
        collect.push(noteTable[note]);
    }
    return collect
}
