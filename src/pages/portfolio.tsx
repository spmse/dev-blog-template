import { SampleComponent } from '../components/SampleComponent';
import style from './portfolio.module.css';	
export default function PortfolioPage() {
    return (
        <div className={style.pageFrame}>
            <h1 className={style.heading}>Portfolio</h1>
            <img src="static/img/docusaurus.png" alt="sample logo" />
            <p>My portfolio will go here</p>
            <SampleComponent/>
        </div>
    )

}