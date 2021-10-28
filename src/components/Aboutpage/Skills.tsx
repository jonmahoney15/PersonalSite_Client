import ToolTipImage from "../Common/ToolTipImage";
const Skills = () => {
    return (
    <div className="flex flex-col items-center p-5 jusitfy-center">
        <h3 className="mt-5 text-5xl text-white">Languages, tools and frameworks:</h3>
        <div className="flex flex-col items-center p-10 justify-evenly">
            <div className="flex flex-row items-center justify-evenly">
                <ToolTipImage color="gray" Image="/svg/react-2.svg" AltText="React" Title="React" content="I have used react for a few years now. This site is built with react and typescript"/>
                <ToolTipImage color="gray" Image="/svg/nodejs-icon.svg" AltText="Nodejs" Title="Nodejs" content="Nodejs is one of my favorite backends. I use it for anything I am trying to quickly prototype."/>
                <ToolTipImage color="gray" Image="/svg/c.svg" AltText="C" Title="C" content="I learned how to program with C. Now I am trying to contribute to the open source firmware Betaflight which is written in C."/>
                <ToolTipImage color="gray" Image="/svg/c_plus_plus.svg" AltText="C++" Title="C++" content="I worked for a year writing C++ for flight software. It is a great language, and I am very comfortable using it"/>
            </div>
            <div className="flex flex-row items-center justify-evenly">
                <ToolTipImage color="gray" Image="/svg/git.svg" AltText="Git" Title="Git" content="Git is my prefered version control. It is a great tool and I hate UI, terminal forever."/>
                <ToolTipImage color="gray" Image="/svg/gcp.svg" AltText="GCP" Title="Google Cloud Platform" content="I use GCP a lot. Though I don't think its anything different from AWS or AZURE."/>
                <ToolTipImage color="gray" Image="/svg/firebase.svg" AltText="Firebase" Title="Firebase" content="Firebase is a cool extension of GCP. Makes deploying simple sites very quick."/>
                <ToolTipImage color="gray" Image="/svg/docker.svg" AltText="Docker" Title="Docker" content="Another tool I use often is Docker. Containers are the future. It speeds up development environement and makes production portable."/>
                <ToolTipImage color="gray" Image="/svg/vim.svg" AltText="Vim" Title="Vim" content="Vim is my favorite editor. The custimization is awesome. I like being able to stay in the terminal. It also is not very resource intensive so my old macbook with 4GB of RAM can still be very useful."/>
            </div> 
            
        </div>
        <div className="flex flex-col justify-center text-5xl text-white align-middle">
            <p>Check out some of my work: </p>
            <div className="p-5">
                <a href="https://github.com/jonmahoney15/">
                    <button className="flex justify-center w-full item-center">
                        <ToolTipImage color="gray" Image="/svg/github.svg" AltText="Github" Title="My Github Account!" content=""/>
                    </button>
                </a>
            </div>
        </div>
    </div>
  );
}

export default Skills;
