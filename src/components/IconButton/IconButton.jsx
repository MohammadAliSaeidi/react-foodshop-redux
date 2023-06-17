import './IconButton.css'

export default function IconButton({icon, content, onClick}) {
    return (
        <a onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }} href='' className='button-icon-no-bg'>
            <div className='icon'>
                <span className='icon1'>{icon}</span>
                <span className='icon2'>{icon}</span>
            </div>
            {content}
        </a>
    )
}