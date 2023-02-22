

export interface IPost {
    username: string;
    caption: string;
    src: string;
    likes: number;
    dateCreated: number;
}

export interface IComment {
    username: string;
    text: string;
    dateCreated: number;
}