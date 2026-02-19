import {useSearchParams} from "react-router";

import {useGetDocumentQuery} from "../../api/docApi.ts";
import {DocumentDetails} from "./components/DocumentDetails.tsx";
import './document.styles.scss';


function Document() {
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id') ?? '1';
  const { data,
    // isLoading, isFetching, isError
  } = useGetDocumentQuery({id:id});

  if (!data) {
    return null;
  }

  return (
    <div className="document-container">
      <div className="container">
        <h2>{data.title}</h2>
        <DocumentDetails data={data} />
      </div>
    </div>
  )
}

export default Document;
