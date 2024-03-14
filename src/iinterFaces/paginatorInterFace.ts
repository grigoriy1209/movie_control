export interface IPaginator<T>{
    prev:string;
    next:string;
    total_pages: number;
    total_results:number;
    results: T[]
}