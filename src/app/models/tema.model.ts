export interface Preg{
 preg: string,
 resps: string[],
 vals: number[]
}

export interface Tema {
 tema: string,
 videos: string[],
 pdfs: string[],
 cuest: Preg[]
}
