import "../style/Dropdown.css";

export default function Dropdown(){

    return <div>

<div className="paste-button">
  <button className="button">Paste &nbsp; ▼</button>
  <div className="dropdown-content">
    <option  className='a' id="top" href="#">Keep source formatting</option>
    <option className='a' id="middle" href="#">Merge formatting</option>
    <option className='a' id="bottom" href="#">Keep text only</option>
  </div>



</div>

    </div>
}

/*


  <select
    className="dropdown-content"
  >
    <option>HTML</option>
    <option>React</option>
    <option>Vue</option>
    <option>Angular</option>
    <option>Svelte</option>
  </select>
*/