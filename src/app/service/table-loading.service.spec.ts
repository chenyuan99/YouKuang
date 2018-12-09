import {TestBed} from '@angular/core/testing';

import {TableLoadingService} from './table-loading.service';

describe('TableLoadingService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TableLoadingService = TestBed.get(TableLoadingService);
        expect(service).toBeTruthy();
    });
});
