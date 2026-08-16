import type {TImageBlockData} from "@/store/typesApp.ts";

export const setLastActiveDocId = (ImageBlockData: TImageBlockData[]) => {
  return ImageBlockData.reduce((accStr,imgObj) => {
    if (imgObj.displayOrder > parseInt(accStr)) {
      accStr = String(imgObj.displayOrder);
    }
    return accStr;
  },'8');
}