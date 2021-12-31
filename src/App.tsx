import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';
import {Header} from './components/Header';
import {Footer} from './components/Footer';

export function App(){
    return (
        <>
        <Header/>
        <RepositoryList />
        <Footer />
        </>
    )
   
    
} 