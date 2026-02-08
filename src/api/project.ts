import {dataProject} from "./data-project.ts";
import type {TProject} from "../store/dataApp.ts";

export async function getProject(jkName:string):Promise<TProject[]> {
  return dataProject.filter(data=> data.jkName ===jkName);
}