
export const getSquad = (state, id) => {

    let squad = state.squads.squads.find(function (s) {
        return s._id === id;
    });
    return squad
}