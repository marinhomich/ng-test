import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    expect(component.id).toBeTruthy();
  })

  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;

    expect(component.id).toBe(someId);
  })

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called` , () => {
    spyOn(component.liked, 'emit')
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  })

});
