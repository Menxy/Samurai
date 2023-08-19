import './App.css';

function App() {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Official_b.a.t.m.a.n._logo.svg/2560px-Official_b.a.t.m.a.n._logo.svg.png"
                    alt="mylogo"/>
            </header>
            <div className={'content'}>
                <nav className={'nav'}>
                    <div className={'nav_element'}><a href={'/'}>Profile</a></div>
                    <div className={'nav_element'}><a href={'/'}>Messages</a></div>
                    <div className={'nav_element'}><a href={'/'}>News</a></div>
                    <div className={'nav_element'}><a href={'/'}>Music</a></div>
                    <div className={'nav_element settings'}><a href={'/'}>Settings</a></div>
                </nav>
                <div className={'staff'}>
                    <img src="https://media.licdn.com/dms/image/C5616AQGSvXIKQMm3jQ/profile-displaybackgroundimage-shrink_350_1400/0/1654109558602?e=1697673600&v=beta&t=8nWXca_QeNy5gzJXtw7qSaUTtd6XVf5sXWrmFIpuQSE" alt="gotham"/>
                    <div className={'card'}>
                        <div className={'my_photo'}>
                            <img src="https://assets1.ignimgs.com/2020/08/26/redhoodexplained-blogroll-1598471454662_160w.jpg?width=200" alt=""/>
                        </div>
                        <div className={'my_info'}>
                            <div className={'card_name'}>Andriy L.</div>
                            <div>Date of birth: 01.01.1990</div>
                            <div>City: Barcelona</div>
                            <div>Education: MIT'2015</div>
                            <div>Web-site: https:\\gorgonzola.edu</div>
                        </div>
                    </div>
                    <form className={'form'} action={"get"}>
                        <div className={'my_posts'}>My posts</div>
                        <input className={'form_input'} type={'text'} placeholder={'your news...'}/>
                        <button className={'send'}>Send</button>
                    </form>
                    <div className={"post_container"}>
                        <div className="post">
                            <a href={'/'}><img src="https://www.vhv.rs/dpng/d/443-4431349_yellow-circle-png-transparent-png-download.png" alt="sun"/></a>
                            <span className={'post_text'}>Hey, why noone loves me?</span>
                        </div>
                        <div className="post">
                            <a href={'/'}><img src="https://www.vhv.rs/dpng/d/443-4431349_yellow-circle-png-transparent-png-download.png" alt="sun"/></a>
                            <span className={'post_text'}>Love you, my shiny?</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
