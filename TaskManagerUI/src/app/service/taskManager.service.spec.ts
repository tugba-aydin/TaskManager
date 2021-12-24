/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskManagerService } from './taskManager.service';

describe('Service: TaskManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskManagerService]
    });
  });

  it('should ...', inject([TaskManagerService], (service: TaskManagerService) => {
    expect(service).toBeTruthy();
  }));
});
