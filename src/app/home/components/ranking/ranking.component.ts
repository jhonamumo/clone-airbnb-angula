import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience/experience.service';
import { IExperience } from 'src/app/shared/models/experience.models';
import { IExperienceTop5Response } from 'src/app/shared/models/experienceTop5Response.model';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  public experiences: Array<IExperience>;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.getAllExpereinces();
  }

  private getAllExpereinces(): void {
    this.experienceService.getExperiencesTop5().subscribe(response => {
      this.experiences = response.top5;
    });
  }

}
