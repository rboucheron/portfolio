

export interface ISkill {
    id: number;
    title: string;
    experience: {
        id: number;
        title: string;
        details: string;
        src: string;
        alt: string;
    }[];
}