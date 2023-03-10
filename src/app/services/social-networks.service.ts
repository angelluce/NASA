import {Injectable} from '@angular/core';
import {SocialNetworkModel} from "../models/SocialNetworkModel";

@Injectable({
  providedIn: 'root'
})
export class SocialNetworksService {
  constructor() {
  }

  getSocialNetworks(): SocialNetworkModel[] {
    return [
      {
        name: 'GitHub',
        url: 'https://github.com/angelluce',
        icon: 'pi-github',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/angellucero24/',
        icon: 'pi-instagram',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/angel-geovanny-lucero/',
        icon: 'pi-linkedin',
      },
    ];
  }

}
