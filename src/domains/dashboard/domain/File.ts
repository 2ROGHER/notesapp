import type { FileStatus } from "./file-status.enum";

export class File {
    private _id: string;
    private _name: string;
    private _content: string;
    private _status: FileStatus;
    private _createdAt: Date;
    private _updatedAt: Date;
    constructor(id: string, name: string, content: string, status: FileStatus, createdAt: Date, updatedAt: Date) {
        this._id = id;
        this._name = name;
        this._content = content;
        this._status = status;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }
    public get status(): FileStatus {
        return this._status;
    }
    public set status(value: FileStatus) {
        this._status = value;
    }
    public get createdAt(): Date {
        return this._createdAt;
    }
    public set createdAt(value: Date) {
        this._createdAt = value;
    }
    public get updatedAt(): Date {
        return this._updatedAt;
    }
    public set updatedAt(value: Date) {
        this._updatedAt = value;
    }
    
    
}