export interface fetchInterface<T>{
    data: T  | null; loading: boolean; error: Error | null 
 }