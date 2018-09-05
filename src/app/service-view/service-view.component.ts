import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BackendService} from '../_services/backend.service';
import {ModuleInterface, ServiceInterface, StrategyInterface} from 'pfe-ree-interface';

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent implements OnInit {

  @Input() service: ServiceInterface;
  @Input() module: ModuleInterface;

  public strategy: StrategyInterface;

  constructor(private backend: BackendService) {
  }

  ngOnInit() {
    if (this.service.strategies) {
      this.strategy = this.service.strategies.find(strategy => strategy.default);
    }
  }

  sendCommand(command: string, parameterForm: NgForm) {
    const strategy: string = parameterForm ? parameterForm.value.selectedStrategy.name : undefined;
    const parameters = [];

    if (parameterForm) {
      Object.keys(parameterForm.value).forEach((key,) => {
        if (key !== 'selectedStrategy') {
          parameters.push({name: key.replace(this.service.name + '>', ''), value: parameterForm.value[key]});
        }
      });
      console.log('Parameters', parameters);
    }

    this.backend.sendCommand(this.module.id, this.service.name, command, strategy, parameters)
      .subscribe(data => {
        this.backend.refreshModules();
      });
  }

  commandEnabled(command): boolean {
    return (command === 'start' && this.service.status === 'IDLE') ||
      (command === 'complete' && this.service.status === 'RUNNING') ||
      (command === 'reset' && this.service.status === 'COMPLETED') ||
      (command === 'pause' && this.service.status === 'RUNNING') ||
      (command === 'unhold' && this.service.status === 'HOLD') ||
      (command === 'resume' && this.service.status === 'PAUSED');
  }


}
