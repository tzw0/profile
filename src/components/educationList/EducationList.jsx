import "./educationList.scss"

export default function EducationList({ id, title, active, setSelected }) {
    return (
        <div className={active ? "educationList active" : "educationList"} onClick={() => (setSelected(id))}>
            {title}
        </div>
    )
}
