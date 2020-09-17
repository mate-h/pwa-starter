import { FunctionalComponent, h } from "preact";
import Match from "preact-router/match";
import style from "./style.module.css";

const m = Match as any;

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>Preact App</h1>
            <nav>
                <m.Link activeClassName={style.active} href="/">
                    Home
                </m.Link>
                <m.Link activeClassName={style.active} href="/profile">
                    Me
                </m.Link>
                <m.Link activeClassName={style.active} href="/profile/john">
                    John
                </m.Link>
            </nav>
        </header>
    );
};

export default Header;
