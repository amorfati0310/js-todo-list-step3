
import state from './store/index.js'
import TeamBoards from './components/TeamBoards/TeamBoards.js'




(function(teams){
  document.addEventListener('DOMContentLoaded', () => {
    const teamBoards = new TeamBoards({ elements: '#team-boards', teams })
  })
})(state.teams);
