import { MdWbSunny } from 'react-icons/md';
import './navbar.css';

type Props = {}

export default function Navbar({} : Props){
    return(
        <div className='navbar-container'>
            네비게이션바
            <MdWbSunny className='navbar-logo-icon' />
        </div>
    )
}

// 리액트 아이콘
// npm install react-icons --save