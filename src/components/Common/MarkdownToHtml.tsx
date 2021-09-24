import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface IProps {
    content: string;
}

const MarkdownToHTML = (props: IProps) => {
    return (
        <ReactMarkdown className="flex flex-col w-full overflow-hidden prose" children={props.content} remarkPlugins={[remarkGfm]}/>
    );
}

export default MarkdownToHTML;
