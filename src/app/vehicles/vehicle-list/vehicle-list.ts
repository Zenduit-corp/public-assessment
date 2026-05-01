import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { Vehicle, VehicleStatus } from '../vehicle.model';

type StatusFilter = VehicleStatus | 'all';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './vehicle-list.html',
  styleUrl: './vehicle-list.scss',
})
export class VehicleList implements OnInit {
  private vehicleService = inject(VehicleService);

  readonly vehicles = signal<Vehicle[]>([]);
  readonly query = signal('');
  readonly selectedStatus = signal<StatusFilter>('all');

  readonly statuses: StatusFilter[] = ['all', 'active', 'parked', 'in_maintenance', 'decommissioned'];

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe((vehicles) => {
      this.vehicles.set(vehicles);
    });
  }

  getFilteredVehicles(): Vehicle[] {
    const q = this.query();
    const status = this.selectedStatus();
    return this.vehicles().filter((v) => {
      const matchesPlate = q === '' || v.plate.includes(q);
      const matchesStatus = status === 'all' || v.status === status;
      return matchesPlate && matchesStatus;
    });
  }
}
