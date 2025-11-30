import './App.css'
import {useSearchParams} from "react-router";
import {dataApp} from "../store/dataApp.ts";
import {get} from '../utils/get-lodash.ts';

function Document() {
  const [searchParams] = useSearchParams();

  const street = searchParams.get('street');
  const jk = searchParams.get('jk') ?? '';

  return (
    <div className="page-title dark-background aos-init aos-animate" data-aos="fade">
      <div className="container">
        <nav className="breadcrumbs">
          <ol>
            <li><a href="/">Главная</a></li>
            { jk && <li className="current">{get(dataApp,[jk,'jkTitle'])}</li> }
            { street && <li className="current">{get(dataApp,[jk,'projects',street])}</li>}
          </ol>
        </nav>
        <h1>{dataApp[jk] ? dataApp[jk].jkTitle : ''}</h1>
      </div>
    </div>
  )
}

export default Document
