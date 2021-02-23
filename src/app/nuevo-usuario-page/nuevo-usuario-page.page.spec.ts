import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoUsuarioPagePage } from './nuevo-usuario-page.page';

describe('NuevoUsuarioPagePage', () => {
  let component: NuevoUsuarioPagePage;
  let fixture: ComponentFixture<NuevoUsuarioPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoUsuarioPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoUsuarioPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
