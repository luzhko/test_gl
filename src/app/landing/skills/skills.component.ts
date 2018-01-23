import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../shared/services/skills.service';
import { SkillsInterface } from '../../shared/model/skills.interface';

@Component ({
    selector: 'app-skills-component',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.sass']
})

export class SkillsComponent implements OnInit {
    skills: SkillsInterface[];
    lengthLevel: number[] = Array(10);
    constructor (private skillsService: SkillsService) {}

    ngOnInit () {
        this.skills = this.skillsService.getSkills();
    }
}