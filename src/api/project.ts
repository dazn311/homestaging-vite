import {dataProject} from "./data-project.ts";
import type {TProject} from "../store/dataApp.ts";

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