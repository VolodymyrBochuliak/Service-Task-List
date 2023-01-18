
export interface UserTask {
    title: string;
    createDate: number;
    timeRange: number[];
    type: string;
    responsiblePerson: string;
    stage: string;
    progress: number;
}