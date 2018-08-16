import {Component, OnInit} from '@angular/core';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-module-view',
  templateUrl: './module-view.component.html',
  styleUrls: ['./module-view.component.css']
})
export class ModuleViewComponent implements OnInit {
  public modules: any;

  constructor(private backend: BackendService) {
  }

  ngOnInit() {
    this.modules = this.backend.modules;
  }

  connect(module: string) {
    this.backend.connect(module).subscribe(data => console.log(data));

  }

  disconnect(module: string) {
    this.backend.disconnect(module).subscribe(data => console.log(data));
  }

  remove(module: string) {
    this.backend.removeModule(module).subscribe(data => {
      this.backend.refreshModules();
    });
  }

  add(moduleOptions: string) {
    this.backend.addModule(moduleOptions).subscribe(data => console.log(data));
  }


}
