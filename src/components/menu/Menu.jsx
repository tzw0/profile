import "./menu.scss"
import SchoolIcon from '@material-ui/icons/School';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssessmentIcon from '@material-ui/icons/Assessment';
// import PersonIcon from '@material-ui/icons/Person';

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#intro'><HomeIcon />&nbsp;Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#skills'><AssessmentIcon />&nbsp;Skills</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#education'><SchoolIcon />&nbsp;Education</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#projects'><ListAltIcon />&nbsp;Projects</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#internships'><BusinessCenterIcon />&nbsp;Internships</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href='#contact'><EmailIcon />&nbsp;Contact</a>
                </li>
                {/* <li onClick={() => setMenuOpen(false)}>
                    <a href='#about'><PersonIcon />&nbsp;About me</a>
                </li> */}
            </ul>
        </div>
    )
}
