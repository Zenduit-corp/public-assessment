import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { VehicleService } from './vehicle.service';

describe('VehicleService', () => {
  let service: VehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(VehicleService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
