// an exercise will be stored as a json blob of a series of pitches (no rhythms yet)
// we need to display the pitches immediately
// we need to keep track of where we are with fingerings
// So we basically create a state machine.
// The state machine has X possible states - unanswered, correct, alternate, incorrect. We only load the next value into the state machine when we reach a correct state.
// So we can say combinations = [...combinations]. Then we say object = {state = Enum(correct, alternate, incorrect)}. We will need to find an appropriate way for the UI to subscribe to changes in the object
