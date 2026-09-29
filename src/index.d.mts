// Objectif : décrire les types de l’API métier publique.
import type{JevProvider}from"./jev.mjs";export const RESULTS:readonly string[];export function project(input:any):any;export function pluRule(input:any):any;export function assessRule(project:any,rule:any,provider:JevProvider):Promise<any>;
