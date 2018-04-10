import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxDrpModule } from './ngx-drp/ngx-drp.module';
import { NgxDrpOptions } from './ngx-drp/model/model';

fdescribe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [NgxDrpModule]
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should setup presets', async(()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(app, 'setupPresets');
    fixture.detectChanges();
    expect(app.setupPresets).toHaveBeenCalled();
    expect(app.presets).toBeDefined();
  }));
  it('should setup date-range-picker options with required props', async(()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.options.presets).toBeDefined();
    expect(app.options.format).toBeDefined();
    expect(app.options.range).toBeDefined();
  }));
  
});
