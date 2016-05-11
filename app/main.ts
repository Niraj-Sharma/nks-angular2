import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {PageHeader} from './page-header/page-header';
import {PageContent} from './page-content/page-content';
import {PageFooter} from './page-footer/page-footer';

bootstrap(AppComponent);
bootstrap(PageHeader);
bootstrap(PageContent);
bootstrap(PageFooter);
