import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { VehicleList } from './vehicle-list';

describe('VehicleList', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleList],
      providers: [provideHttpClient()],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(VehicleList);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
