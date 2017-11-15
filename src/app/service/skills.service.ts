import { Injectable } from '@angular/core';

@Injectable()
export class SkillsService {
    getSkills() {
        return [
            {name: "HTML5", level: 8},
            {name: "CSS3", level: 5},
            {name: "JavaScript", level: 10},
            {name: "ReactJS", level: 8},
            {name: "AngularJS", level: 8},
        ];
    }
}