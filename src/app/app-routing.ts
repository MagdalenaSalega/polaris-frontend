import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {SettingsComponent} from './settings/settings.component';
import {RecipeOverviewComponent} from './recipe-overview/recipe-overview.component';
import {ModuleViewComponent} from './module-view/module-view.component';
import {NewModuleComponent} from './new-module/new-module.component';
import {NewRecipeComponent} from './new-recipe/new-recipe.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipe', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'modules', component: ModuleViewComponent},
  {path: 'modules/new', component: NewModuleComponent},
  {path: 'queue', component: RecipeOverviewComponent},
  {path: 'recipe', component: RecipeOverviewComponent},
  {path: 'recipe/new', component: NewRecipeComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
