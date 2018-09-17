export class PagingRequest {
    PageIndex: number;
    PageSize: number;
    Keyword?: string;
    OrderByPropertyName?: string;
    IsAsc?: boolean;
    TabIndex?: number;
    StartDate?: Date;
    EndDate?: Date;
    PriceListId?: number;
    EntityId?: number;
    constructor() {
        this.PageIndex = 1;
        this.PageSize = 10;
    }
}
