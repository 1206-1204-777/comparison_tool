export class Timer{
    timer: HTMLElement;
    start_timer: HTMLButtonElement;
    constructor(){
        this.timer = document.createElement('div');
        this.timer.classList.add('timer');
        this.timer.id = 'timer'
        let count = 0;
        setInterval(() => {
        count++;
        this.timer.textContent = count.toString()}, 1000)
        this.timer.style.textAlign = 'center'

        this.start_timer = document.createElement('button');
        this.start_timer.classList.add('start');
        this.start_timer.id = 'start'
        this.start_timer.textContent = '開始'
    }

    render(){
        const container = document.querySelector('.main-area');
        container?.append(this.timer)

        let isTracking: boolean = false;
        
        let start = this.start_timer.addEventListener("click", () => {
            if(isTracking === true){
                alert('既に開始しています')
                return
            }
            fetch('http://localhost:8080/timer/start', {method:"GET"})
            .then(() => {const date = new Date(); this.start_timer.textContent = date.toLocaleDateString();})
            isTracking = !isTracking
        })
        container?.append(this.start_timer)

    }
    
}