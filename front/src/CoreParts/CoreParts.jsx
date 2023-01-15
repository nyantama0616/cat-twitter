import "./CoreParts.scss";

export function Header(props) {
    return (    
        <header>
            <h1>{props.isSignIn ? "ログアウト" : "ログイン"}</h1>
        </header>
    )
}
