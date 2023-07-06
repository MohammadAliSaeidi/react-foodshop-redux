import './IconButton.css'

export default function IconButton({icon, content, onClick, onMouseEnter}) {

    const handleOnClick = (e) => {
        e.preventDefault();
        onClick && onClick(e);
    }

    return (
        <a onClick={handleOnClick} className='button-icon-no-bg'>
            <div className='icon'>
                <span className='icon1'>{icon}</span>
                <span className='icon2'>{icon}</span>
            </div>
            {content}
        </a>
    )
}