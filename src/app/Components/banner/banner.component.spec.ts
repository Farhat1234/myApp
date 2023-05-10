import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';


import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let p: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
      // imports: [{provide: ComponentFixtureAutoDetect, useValue: true}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    p = fixture.nativeElement.querySelector('p');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check banner title getting rendered under p element', () => {
    expect(p.textContent).toContain(component.title)
  })

  it('should display title changes on p element', () => {
    // const pElement = fixture.nativeElement.querySelector('#p1');
    component.title = 'techM';
    fixture.detectChanges();
    expect(p.textContent).toContain(component.title);
    // expect(pElement.textContent).toContain(component.title);
  })
});
