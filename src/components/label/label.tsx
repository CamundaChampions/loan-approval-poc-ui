import './label.scss';

interface LabelProps {
    label: string
}

const Label = (props: LabelProps) => {
    return (
        <label>{props.label}</label>
    )
}

export default Label