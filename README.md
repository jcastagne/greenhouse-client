# GhClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Solution architecture

app/
|- app.module.ts
|- app-routing.module.ts
|- core/
   |- auth/
      |- auth.module.ts (optional since Angular 6)
      |- auth.service.ts
      |- index.ts
   |- othermoduleofglobalservice/
|- ui-modules/ //shared ui components bundled in modules
   |- carousel/
      |- carousel.module.ts
      |- index.ts
      |- carousel/
         |- carousel.component.ts
         |- carousel.component.css
    |- othermoduleofreusablecomponents/
|- modules/ //feature modules with pages
  |- heroes/
    |- heroes.module.ts
    |- heroes-routing.module.ts
    |- shared/
        |- heroes.service.ts
        |- hero.ts
    |- pages/
        |- heroes/
          |- heroes.component.ts
          |- heroes.component.css
        |- hero/
          |- hero.component.ts
          |- hero.component.css
    |- components/
        |- heroes-list/
          |- heroes-list.component.ts
          |- heroes-list.component.css
        |- hero-details/
          |- hero-details.component.ts
          |- hero-details.component.css
  |- othermoduleofpages/
|- shared/ //shared common modules, eg. angular material, CommonModule...
|- services/ //shared services

