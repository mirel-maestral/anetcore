/**
 * Created by Hopeton.Palmer on 6/12/2017.
 */
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class AppConfig {
 
  appUrl = environment.production ? 'https://' : 'http://localhost:65164/api/';
 
 }
