import Table from "react-bootstrap/Table";
import {useRef} from "react";

// import classes
import Saber from './Saber.js'
import Archer from './Archer'
import Lancer from './Lancer'
import Rider from './Rider'
import Caster from './Caster'
import Assassin from './Assassin'
import Berserker from './Berserker'
import Ruler from './Ruler'
import Avenger from './Avenger'
import Alterego from './Alterego'
import Foreigner from './Foreigner'
import Mooncancer from './Mooncancer'


const ServantTable = () => {
  return (
    <div>
      <h1>Indomie's F/GO Tracker</h1>
      <Table style={{width: "50%"}} className="svtTable" responsive="sm">
        {/* <thead>
          <tr>
            <th></th>
            {Array.from({ length: 12 }).map((_, index) => (
              <th key={index}>Table heading</th>
            ))}
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td><img className="classBadge" src={process.env.PUBLIC_URL+ `images/class/class_1.png`}></img></td>
            {Array.from({ length: 10 }).map((_, index) => (
              <td key={index}><Saber index={index}/></td>
            ))}
          </tr>
          <tr>
            <td><img className="classBadge" src={process.env.PUBLIC_URL+ `images/class/class_2.png`}></img></td>
            {Array.from({ length: 9 }).map((_, index) => (
                <td key={index}><Archer index={index}/></td>
            ))}
          </tr>
          <tr>
            <td><img className="classBadge" src={process.env.PUBLIC_URL+ `images/class/class_3.png`}></img></td>
            {Array.from({ length: 8 }).map((_, index) => (
                <td key={index}><Lancer index={index}/></td>
            ))}
          </tr>
          <tr>
            <td><img className="classBadge" src={process.env.PUBLIC_URL+ `images/class/class_4.png`}></img></td>
            {Array.from({ length: 8 }).map((_, index) => (
                <td key={index}><Rider index={index}/></td>
            ))}
          </tr>
          <tr>
            <td><img className="classBadge" src={process.env.PUBLIC_URL+ `images/class/class_5.png`}></img></td>
            {Array.from({ length: 11 }).map((_, index) => (
                <td key={index}><Caster index={index}/></td>
            ))}
          </tr>
          <tr>
            <td><img className="classBadge" src={process.env.PUBLIC_URL+ `images/class/class_6.png`}></img></td>
            {Array.from({ length: 8 }).map((_, index) => (
                <td key={index}><Assassin index={index}/></td>
            ))}
          </tr>
          <tr>
            <td><img className="classBadge" src={process.env.PUBLIC_URL+ `images/class/class_7.png`}></img></td>
            {Array.from({ length: 8 }).map((_, index) => (
                <td key={index}><Berserker index={index}/></td>
            ))}
          </tr>
          <tr>
            <td><img className="classBadge" src={process.env.PUBLIC_URL+ `images/class/class_8.png`}></img></td>
            {Array.from({ length: 4 }).map((_, index) => (
                <td key={index}><Ruler index={index}/></td>
            ))}
          </tr>
          <tr>
            <td><img className="classBadge" src={process.env.PUBLIC_URL+ `images/class/class_9.png`}></img></td>
            {Array.from({ length: 2 }).map((_, index) => (
                <td key={index}><Avenger index={index}/></td>
            ))}
          </tr>
          <tr>
            <td><img className="classBadge" src={process.env.PUBLIC_URL+ `images/class/class_10.png`}></img></td>
            {Array.from({ length: 5 }).map((_, index) => (
                <td key={index}><Alterego index={index}/></td>
            ))}
          </tr>
          <tr>
            <td><img className="classBadge" src={process.env.PUBLIC_URL+ `images/class/class_11.png`}></img></td>
            {Array.from({ length: 2 }).map((_, index) => (
                <td key={index}><Foreigner index={index}/></td>
            ))}
          </tr>
          <tr>
            <td><img className="classBadge" src={process.env.PUBLIC_URL+ `images/class/class_12.png`}></img></td>
            {Array.from({ length: 1 }).map((_, index) => (
                <td key={index}><Mooncancer index={index}/></td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ServantTable;
