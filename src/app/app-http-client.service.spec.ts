import { TestBed } from '@angular/core/testing';

import { AppHttpClientService } from './app-http-client.service';

describe('AppHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppHttpClientService = TestBed.get(AppHttpClientService);
    expect(service).toBeTruthy();
  });
});
