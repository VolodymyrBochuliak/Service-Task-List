
interface IProps{
    className: string,
    name: string,
    style: {},
    directFunction: () => void
}

const BookmarkButton = (props: IProps) => {

    const{
        className,
        name,
        style,
        directFunction
    } = props;

    return(
        <div 
            className={className}
        >
            <button 
                style={style}
                onClick={directFunction}
            >
                    {name}
            </button>
        </div>
    )
}

export default BookmarkButton;