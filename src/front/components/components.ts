export class Header{
    functionName: HTMLHeadElement; 

    constructor(functionName: string){
        this.functionName = document.createElement('header');
        this.functionName.classList.add('header')
        this.functionName.textContent = functionName;
        this.functionName.style.textAlign = 'center'
    }
    render(){
        const container = document.querySelector('.app-container');
        container?.append(this.functionName);
    }
    
};


export class Sidebar{
    functionName: HTMLElement; 

    constructor(functionName: string){
        this.functionName = document.createElement('aside');
        this.functionName.classList.add('sidebar')
        this.functionName.textContent = functionName;
        this.functionName.style.textAlign = 'center'
    }
    render(){
        const container = document.querySelector('.app-container');
        container?.append(this.functionName);
    }
    
};

export class GraphArea{
    graphData: HTMLElement; 

    constructor(graphData: string){
        this.graphData = document.createElement('aside');
        this.graphData.classList.add('graph-area')
        this.graphData.textContent = graphData;
        this.graphData.style.textAlign = 'center'
    }
    render(){
        const container = document.querySelector('.app-container');
        container?.append(this.graphData);
    }
    
};


export class Footer{
    graphData: HTMLElement; 

    constructor(graphData: string){
        this.graphData = document.createElement('footer');
        this.graphData.classList.add('footer')
        this.graphData.textContent = graphData;
        this.graphData.style.textAlign = 'center'
    }
    render(){
        const container = document.querySelector('.app-container');
        container?.append(this.graphData);
    }
    
};
