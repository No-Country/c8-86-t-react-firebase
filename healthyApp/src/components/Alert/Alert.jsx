export function Alert({ message }) {
    return (
        <div className='alert'>
            <span className='sm:inline-block'>{message}</span>
        </div>
    );
}
