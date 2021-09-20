import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface IProps {
    content: string;
}

const MarkdownToHTML = (props: IProps) => {
    return (
        <ReactMarkdown className="prose" children={props.content} remarkPlugins={[remarkGfm]}/>
    );
}

export default MarkdownToHTML;
