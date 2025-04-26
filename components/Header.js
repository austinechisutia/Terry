function Header() {
    try {
        return (
            <header className="header" data-name="header">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center" data-name="logo-container">
                            <a href="#" className="logo flex items-center" data-name="logo">
                                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17.3,3.3L15.9,4.7L19.3,8.1L20.7,6.7L17.3,3.3M12,9.2L8.6,5.8L7.2,7.2L10.6,10.6L12,9.2M11,18.1V20H13V18.1L12,17.5L11,18.1M21,18.8V20H23V18.8L22,18.4L21,18.8M3,20H5V18.8L4,18.4L3,18.8V20M15,20H17V18.8L16,18.4L15,18.8V20M7,20H9V18.8L8,18.4L7,18.8V20M19,20H21V18.8L20,18.4L19,18.8V20M11,13.8V15.7L12,16.3L13,15.7V13.8L12,13.2L11,13.8M3.5,13.9L5,15.4L6.5,13.9L5,12.4L3.5,13.9M16.5,13.9L18,15.4L19.5,13.9L18,12.4L16.5,13.9M9.9,13.9L11.4,15.4L12.9,13.9L11.4,12.4L9.9,13.9" />
                                </svg>
                                TERRY
                            </a>
                        </div>
                        <nav className="flex items-center" data-name="navigation">
                            <a href="#works" className="nav-link" data-name="nav-works">WORKS</a>
                            <a href="#about" className="nav-link" data-name="nav-about">ABOUT</a>
                            <a href="#awards" className="nav-link" data-name="nav-awards">AWARDS</a>
                            <div className="social-icons" data-name="social-icons">
                                <a href="#" data-name="facebook-link">
                                    <svg className="social-icon" fill="white" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                                    </svg>
                                </a>
                                <a href="#" data-name="youtube-link">
                                    <svg className="social-icon" fill="white" viewBox="0 0 24 24">
                                        <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/>
                                    </svg>
                                </a>
                                <a href="#" data-name="twitter-link">
                                    <svg className="social-icon" fill="white" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                    </svg>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
