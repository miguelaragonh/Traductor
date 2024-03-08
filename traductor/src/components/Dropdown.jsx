import "../style/Dropdown.css";
import Select from "./Select";

export default function Dropdown() {
  return (
    <div>
      <div className="paste-button">
       <Select id={'idiom1'} />
        <div className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="#41629b"
              d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"
            />
          </svg>
        </div>
        <Select id={'idiom2'} />
      </div>
    </div>
  );
}

/*
tolang="en">English (default)</a>
        <a class="dropdown-item" href="#" tolang="it">Italian</a>
        <a class="dropdown-item" href="#" tolang="es">Spanish</a>
        <a class="dropdown-item" href="#" tolang="de">German</a>

*/
