import noteTable from "../data/notes.json" with { type: "json" };

export default function getCellFingering(notes) {
    const collect = [];
    for (const note of notes) {
        collect.push(noteTable[note]);
    }
    return collect
}
