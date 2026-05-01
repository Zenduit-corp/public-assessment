export type VehicleStatus = 'active' | 'parked' | 'in_maintenance' | 'decommissioned';

export interface VehicleLocation {
  lat: number;
  lng: number;
  recorded_at: string;
}

export interface Vehicle {
  id: string;
  account_id: string;
  vin: string;
  plate: string;
  make: string;
  model: string;
  year: number;
  device_id: string;
  status: VehicleStatus;
  last_known_location: VehicleLocation | null;
}
