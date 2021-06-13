# WeatherStatsUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Description
Single page application that displays weather statistics for city input.
3 cities are available: London, Utrecht and Belgrade, with respective country codes: UK, NL and RS.
Search input has implemented debouncing and is activated on key input.
A weather icon displays current weather in a selected city.
No css framework is used as it's a simplistic UI.

## TODO:
- Retrieve country codes and their icons from backend application instead of hard coding them.
- Refactor css.
- Introduce constants for certain API related variables and literals.
- Add custom tests.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
