const teamBoardTemplate = (teams) => {
    const buttonCardTemplate = `
    <div class="add-team-button-container">
        <button id="add-team-button" class="ripple">
        <span class="material-icons">add</span>
        </button>
    </div>   
    `

    return teams.map(team => {
        return `
        <div class="team-card-container">
            <a href="/kanban.html" class="card">
            <div class="card-title">
                Black Coffee team
            </div>
            </a>
        </div>        
        `
    }).concat(buttonCardTemplate).join('')
}

export default teamBoardTemplate;