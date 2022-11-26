import './Alert.css'

export function Alert({ message }) {
    return (
        <div className='Alert'>
            <span className='sm:inline-block'>{message}</span>
        </div>
    );
}
