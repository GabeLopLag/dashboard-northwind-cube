import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5dinamicoComponent } from './top5dinamico.component';

describe('Top5dinamicoComponent', () => {
  let component: Top5dinamicoComponent;
  let fixture: ComponentFixture<Top5dinamicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top5dinamicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top5dinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
