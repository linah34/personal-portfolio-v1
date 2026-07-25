import "./SocialButtons.css";

export default function SocialButtons() {
  return (
    <div className="button-container">
      <a
        href="https://github.com/linah34"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button github"
      >
        GitHub
      </a>

      <a
        href="https://lightningstryker.itch.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button itch"
      >
        Itchio
      </a>

      <a
        href="https://www.linkedin.com/in/linah-bergmanis-482281397/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-button linkedin"
      >
        LinkedIn
      </a>
    </div>
  );
}