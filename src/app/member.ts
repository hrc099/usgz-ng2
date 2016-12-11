export class Member {
    private name: string;
    private surname: string;
    private status: string;
    private isActive: boolean;

    constructor(name: string, surname: string, status: string, isActive: boolean = true) {
        this.name = name;
        this.surname = surname;
        this.status = status;
        this.isActive = isActive;
    }

    getMember(): Member {
        return this;
    }

    getName(): string {
        return this.name;
    }

    getSurname(): string {
        return this.surname;
    }

    getStatus(): string {
        return this.status;
    }

    getIsActive(): boolean {
        return this.isActive;
    }
}
