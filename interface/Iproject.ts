import { Iimage } from "./Iimage";
import { Itechnologie } from "./Itechnologie";

export interface Iproject {
    id: number; 
    title: string;
    details: string; 
    date: string;
    link: string; 
    github: string; 
    images: Iimage[]
    technologies: Itechnologie[]

}