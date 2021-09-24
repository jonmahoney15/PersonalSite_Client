const Bio = () => {
    return (
        <div className="flex flex-col items-center justify-center p-5" >
          <div className="flex flex-wrap justify-center">
            <div className="w-8/12 px-4">
              <img src={process.env.PUBLIC_URL+"/me.png"} alt="Me" className="h-auto max-w-full align-middle border-none rounded-full shadow-lg"/>
            </div>
          </div>
          <h1 className="justify-center mt-5 text-5xl text-white md:text-5xl lg:text-6xl">Hello World 👋</h1>
          <p className="justify-center pt-10 text-3xl text-white md:pl-36 md:pr-36">
            <div className="flex flex-wrap items-center">
              <p> My name is Jonathan Mahoney. I am a Software Engineer.</p> 
            </div>
            <br/>
              Welcome to my personal web application. 
              I made this site to show some of my skills as well as a personal blog.
              Below is information about me.  By hovering over one of the icons you will be able to learn more.
          </p>
        </div>
    );
}

export default Bio;
