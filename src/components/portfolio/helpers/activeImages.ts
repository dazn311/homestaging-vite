
export function activeImages(activeDocId:string) {
   return (im:{docId:string}) => {
     return im.docId === activeDocId || /^\*$/.test(activeDocId);
   }
 }