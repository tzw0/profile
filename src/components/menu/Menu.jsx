import "./menu.scss"
import SchoolIcon from '@material-ui/icons/School';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { ifMobile } from '../../utils/mobile';

// import PersonIcon from '@material-ui/icons/Person';

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={ifMobile("menu " + (menuOpen && "active"))}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#intro'><HomeIcon fontSize="inherit" />&nbsp;Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#skills'><AssessmentIcon fontSize="inherit" />&nbsp;Skills</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#education'><SchoolIcon fontSize="inherit" />&nbsp;Education</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#projects'><ListAltIcon fontSize="inherit" />&nbsp;Projects</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#internships'><BusinessCenterIcon fontSize="inherit" />&nbsp;Internships</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#contact'><EmailIcon fontSize="inherit" />&nbsp;Contact</a>
                </li>
                {/* <li onClick={() => setMenuOpen(false)}>
                    <a href='#about'><PersonIcon />&nbsp;About me</a>
                </li> */}
            </ul>
        </div>
    )
}
