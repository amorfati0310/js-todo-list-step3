import template from './template.js'

class TeamBoards {
    constructor({elements, teams}) {
        this.setElements(elements)
        this.setState(teams)
        this.AddButtonElements = null
    }
    setElements(elements) {
        if (!this.isElementsOptions(elements)) {
            throw Error('잘못된 elements 옵션 입니다 ex) selector | HTMLLIElement')
        }
        this.elements = document.querySelector(elements)
    }
    isElementsOptions(elements) {
        return (
            typeof elements === 'string' ||
            elements.constructor.name === 'HTMLLIElement'
          )  
    }
    isValidTeams(teams){
        return Array.isArray(teams)
    }
    setState(teams) {
        if(!this.isValidTeams(teams)){
            throw Error('teams는 배열이여야 합니다.!')
        }
        this.teams = teams
        this.render()
    }
    render() {
       this.elements.innerHTML = template(this.teams)
       this.bindEvents();
    }
    bindEvents() {
        this.AddButtonElements = this.elements.querySelector('.add-team-button-container')
        if(!this.AddButtonElements) {
            return;
        }
        this.AddButtonElements.addEventListener('click', () => {
            console.log('clicked')
            const result = prompt('팀 이름을 입력해주세요')
            // store에 result 저장해서 반영 
        })
    }
}

export default TeamBoards;