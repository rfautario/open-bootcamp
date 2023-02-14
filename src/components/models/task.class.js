import { LEVELS } from "./levels.enums"

export class Task {
    name = '';
    description = '';
    completed = '';
    level = 'URGENTE';

    constructor (name, description, completed, level) {
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}