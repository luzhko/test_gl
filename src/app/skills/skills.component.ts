import { Component } from '@angular/core';

@Component ({
    selector: 'app-skills-component',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.sass']
})

export class SkillsComponent {
    skills = [
        { name: "HTML5", level: 8 },
        { name: "CSS3", level: 5 },
        { name: "JavaScript", level: 10 },
        { name: "ReactJS", level: 8 },
        { name: "AngularJS", level: 8 },
    ];
}