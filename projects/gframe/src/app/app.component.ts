import {Component, OnInit} from '@angular/core';
import {StateService} from './@service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private stateService: StateService) {
  }

  title = 'gframe';

  config = {
    'l-micro-app1': {
      loaded: false,
      path: 'l-micro-app1/main.js',
      element: 'l-micro-app1'
    },
    'l-micro-app2': {
      loaded: false,
      path: 'l-micro-app2/main.js',
      element: 'l-micro-app2'
    }
  };

  ngOnInit(): void {
    this.load('l-micro-app1');
    this.load('l-micro-app2');
  }

  load(name: string): void {

    const configItem = this.config[name];
    console.log(configItem);
    if (configItem.loaded) {
      return;
    }

    const content = document.getElementById('content');


    const script = document.createElement('script');
    script.src = configItem.path;
    content.appendChild(script);

    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);


    element.addEventListener('message', msg => this.handleMessage(msg));
    element.setAttribute('state', 'init');

    script.onerror = () => console.error(`error loading ${configItem.path}`);

    console.log('Rejestruje klienta', element);
    this.stateService.registerClient(element);

  }

  handleMessage(msg): void {
    console.debug('shell received message: ', msg.detail);
  }

  sendState(): void {
    this.stateService.setState('Info from Shell');
  }

}
