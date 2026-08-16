import {baseUrlVideo, type TVideoCard} from "@/api/data-video.ts";


export function getSrc(item: TVideoCard,type?:string) {

  const typeDoc = type || 'png';
  return encodeURI(`${baseUrlVideo}/${item.video}.${typeDoc}?ver=2`);
}
