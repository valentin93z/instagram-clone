
export interface IUser {
    uid: string;
    username: string;
    emailAddress: string;
    firstname: string;
    lastname: string;
    following: Array<string>;
    followers: Array<string>;
    dateCreated: number;
}

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