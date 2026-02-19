import {useEffect, useState} from "react";
import {useSearchParams} from "react-router";
import {type TProject} from "../../store/dataApp.ts";
import {getProjectById} from "../../api/project.ts";

import {DocumentDetails} from "./components/DocumentDetails.tsx";
import './document.styles.scss';


function Document() {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState<TProject | null>(null);

  const id = searchParams.get('id') ?? '1';

  useEffect(() => {
    getProjectById(id)
      .then((dataOjb: TProject) => {
        setPage(dataOjb);
      })
      .catch(error => {
        console.log(error);
        setPage(null);
      });
  }, [id, setPage]);

  if (!page) {
    return null;
  }

  return (
    <div className="document-container">
      <div className="container">
        <h2>{page.jkTitle}</h2>
        <DocumentDetails page={page} />
      </div>
    </div>
  )
}

export default Document;
