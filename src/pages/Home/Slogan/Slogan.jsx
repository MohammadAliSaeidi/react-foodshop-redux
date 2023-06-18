import './Slogan.css'

export default function Slogan({logo, title, description}) {
    return (
        <div className='slogan'>
            <div>{logo}</div>
            <span className='title'>{title}</span>
            <span className='description'>{description}</span>
        </div>
    )
}