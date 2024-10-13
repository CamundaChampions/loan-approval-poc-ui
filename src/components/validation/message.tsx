
interface ValidationMsgProps {
    message: string
}

const ValidationMsg = (props: ValidationMsgProps) => {
    return (
        <span className="error">{props.message}</span>
    )
}

export default ValidationMsg