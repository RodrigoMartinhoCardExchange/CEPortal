import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { OAuthService, provideOAuthClient } from 'angular-oauth2-oidc';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { authCodeFlowConfig } from './auth/auth-config';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import './utils/extensions'

function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

function setupTranslations(translate: TranslateService) {
  return () => translate.use('en').toPromise(); // Ensure translations are preloaded
}

function initializeAuth(oauthService: OAuthService): () => Promise<void> {
  return async () => {
    oauthService.configure(authCodeFlowConfig);
    await oauthService.loadDiscoveryDocumentAndTryLogin();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideOAuthClient(),
    importProvidersFrom(HttpClientModule),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAuth,
      deps: [OAuthService],
      multi: true,
    },
    importProvidersFrom(
      BrowserAnimationsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        },
      }),
    ),
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslations,
      deps: [TranslateService],
      multi: true,
    }
  ]
};
