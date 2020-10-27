import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienceService } from '../services/experience/experience.service';
import { IExperience } from '../shared/models/experience.models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public experience: IExperience;

  constructor(
    private route: ActivatedRoute, 
    private experienceService: ExperienceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getParams();
  }

  private getParams(): void {
    this.route.params.subscribe(params => {
      const id = params.id;
      this.experienceService.getExperienceById(id).subscribe(response => {
        this.experience = response.experience;
      });
    });
  }

  public irReserva(id: string): void{
    this.router.navigate(['/booking', id ]);
  }

}
