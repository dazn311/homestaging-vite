import {dataProject} from "./data-project.ts";
import type {TProject} from "../store/dataApp.ts";
import type {TVideoCard} from "./data-video.ts";
import {dataVideo} from "./data-video.ts";

export async function getProject(jkName:string):Promise<TProject[]> {
  if (/^all$/.test(jkName)) {
    return dataProject;
  }
  return dataProject.filter(data=> data.jkName ===jkName);
}

export async function getProjectById(id:string):Promise<TProject> {
  const data = dataProject.filter(data=> data.id ===id);
  return data.length > 0 ? data[0] : dataProject[0];
}

export const isLocalHost = window.location.hostname.includes('localhost');
export async function getVideos():Promise<TVideoCard[]> {
  return dataVideo;
}

export async function getVideosBy(id:string):Promise<TVideoCard | null> {
  const vidArr = dataVideo.filter(data=> data.id ===id);
  return vidArr.length > 0 ? vidArr[0] : null;
}
