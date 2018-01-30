import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoadingSnipComponent } from './loading-snip.component'
import { LoadingMaskDirective } from './loading-mask.directive'
import { Config } from './model/config'
import { CONFIG, DEFAULT_CONFIG } from './config'
import { LoadingMaskService } from './loading-mask.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoadingSnipComponent,
    LoadingMaskDirective
  ],
  exports: [
    LoadingSnipComponent,
    LoadingMaskDirective
  ],
  entryComponents: [
    LoadingSnipComponent
  ]
})
export class LoadingMaskModule {
  static forRoot(config: Config): ModuleWithProviders {
    config = Object.assign(DEFAULT_CONFIG, config)

    return {
      ngModule: LoadingMaskModule,
      providers: [
        LoadingMaskService,
        {
          useValue: config,
          provide: CONFIG
        }
      ]
    }
  }
}