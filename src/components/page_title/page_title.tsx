import './page_title.scss';

interface PageTitleProps {
    title: string
}

const PageTitle = (props: PageTitleProps) => {
    return (
        <h2 className='page-title'>{props.title}</h2>
    )
}

export default PageTitle