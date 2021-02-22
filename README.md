# Micro Web Apps with Web Components and Angular Elements

Structure of monorepo project

- **gframe (/projects/gframe):** Global frame for including all micro app
- **micro-app-1 (/projects/l-micro-app1)**: Local app 1
- **micro-app-2 (/projects/l-micro-app1)**: Local app 2
- **micro-app-3 (/projects/l-micro-app1)**: Local app 3

## Create monorepo

Script for create monorepo

```

ng new microfrontend --create-application false

```

## Create apps

Scripts for create app apps in project

```

ng g application gframe --style=scss
ng g application l-micro-app1 --routing --style=scss
ng g application l-micro-app2 --routing --style=scss

```

## Install Dependencies

```

npm install

```

## Standalone

Scripts for running app in standalone mode:

```

ng serve --project shell --open
ng serve --project client-a --open
ng serve --project client-b --open

```

## Everything together

For using everything together, you have to build the example and run it:

```

npm run build
npm start

```
