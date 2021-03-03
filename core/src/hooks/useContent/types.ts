import { ContentType } from "types/ContentType";


export interface IContentContext {
    [contentType: string]: ContentType[]
}