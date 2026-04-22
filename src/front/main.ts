import './global.css';
import {Footer, GraphArea, Header, Sidebar} from './components/components.ts';
function App(){
    const root = document.querySelector<HTMLDivElement>('#app-container');
    const header = new Header('機能');
    header.render();
    const sidebar = new Sidebar('機能名')
    sidebar.render()
    const graphArea = new GraphArea('グラフ表示エリア')
    graphArea.render()
    const footer = new Footer('フッター')
    footer.render()
    if(!root) return;
}
App();
export default App;