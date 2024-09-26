import './section_title.scss';

interface SectionTitleProps {
    title: string
}

const SectionTitle = (props: SectionTitleProps) => {
    return (
        <h3 className='section-title'>{props.title}</h3>
    )
}

export default SectionTitle