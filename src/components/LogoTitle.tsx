import "./LogoTitle.less";

/**
 * Properties for the `LogoTitle` component.
 *
 * @interface LogoTitleProps
 * @property {string} logoPath - The file path or URL of the logo image.
 * @property {string} title - The title text displayed next to the logo.
 */
interface LogoTitleProps {
  logoPath: string;
  title: string;
}

/**
 * A component that displays a logo with a title next to it.
 * The logo is an image, and the title is text placed beside it.
 * The logo and title are wrapped in a link that redirects to the `index.html` page.
 *
 * @param {LogoTitleProps} props - The properties for the `LogoTitle` component.
 * @param {string} props.logoPath - The file path or URL of the logo image.
 * @param {string} props.title - The title text displayed next to the logo.
 *
 * @returns {JSX.Element} The JSX representation of the logo and title.
 *
 * @example
 * ```tsx
 * <LogoTitle logoPath="path/to/logo.png" title="My Website" />
 * ```
 */
export function LogoTitle({ logoPath, title }: LogoTitleProps) {
  return (
    <div className="LogoTitle">
      <a href="index.html" className="floatleft">
        <img src={logoPath} className="logo" alt="logo image" />
        <h1 className="title floatleft">{title}</h1>
      </a>
    </div>
  );
}
