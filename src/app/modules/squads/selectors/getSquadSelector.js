
export const getSquad = (state, id) => {
    console.log(state.squads);
       return state.squads.squads.find(function (s) {
           return s._id === id;
       })
}