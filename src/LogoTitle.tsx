import "./LogoTitle.less"

interface LogoTitleProps {
    logoPath: string
    title: string
}

export function LogoTitle({ logoPath, title }: LogoTitleProps) {
    return <div className="LogoTitle">
        <a href="index.html" className="floatleft">
            <img src={logoPath} className="logo" alt="logo image" />
        </a>
        <h1 className="title floatleft">{title}</h1>
    </div>
}