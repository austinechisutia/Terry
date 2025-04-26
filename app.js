function App() {
    try {
        return (
            <div data-name="app">
                <Header />
                <Hero />
                <Projects />
                <About />
                <Skills />
                <Awards />
                <Contact />
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
