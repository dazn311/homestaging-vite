import {baseUrl, type TVideoCard} from "../../api/data-video.ts";


export function getSrc(item: TVideoCard,type?:string) {

  const typeDoc = type || 'png';
  return encodeURI(`${baseUrl}/${item.video}.${typeDoc}`);
}
