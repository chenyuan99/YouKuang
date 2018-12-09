import {TestBed} from '@angular/core/testing';

import {AccountItemService} from './account-item.service';

describe('AccountItemService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: AccountItemService = TestBed.get(AccountItemService);
        expect(service).toBeTruthy();
    });
});
