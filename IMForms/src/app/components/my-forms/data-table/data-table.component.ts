import { Component, OnInit, Input } from '@angular/core';
import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@Component({
        selector: 'data-table',
        templateUrl: './data-table.component.html',
})
export class DataTableComponent implements OnInit {

        public rows: Array<any> = [];
        public columns: Array<any> = [];
        public page = 1;
        public maxSize = 5;
        public numPages = 1;
        public length = 0;
        public pages: any = [5, 10, 15];
        public config: any = {
                paging: true,
                sorting: { columns: this.columns },
                filtering: { filterString: '', columnName: 'name' },
                className: ['table-striped', 'table-bordered', 'table-responsive']

        };
        public item: number;
        public itemsPerPage = 5;

        @Input() all: any;
        private data: Array<any>;
        public keys: Array<any>;



        public constructor() {

        }


        public ngOnInit(): void {
                this.data = this.all;
                this.keys = Object.keys(this.data[0]);
                for (let i = 0; i < this.keys.length; ++i) {
                        this.columns[i] = {
                                title: this.keys[i].toUpperCase(),
                                name: this.keys[i], sort: '',
                                filtering: {
                                        filterString: '',
                                        placeholder: 'filter'
                                }
                        };
                        this.length = this.data.length;
                }

                this.onChangeTable(this.config);
        }

        public changePage(page: any, data: Array<any> = this.data): Array<any> {
                const start = (page.page - 1) * page.itemsPerPage;
                const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
                return data.slice(start, end);
        }

        public changeSort(data: any, config: any): any {
                if (!config.sorting) {
                    return data;
                }

                const columns = this.config.sorting.columns || [];
                let columnName: string = void 0;
                let sort: string = void 0;

                for (let i = 0; i < columns.length; i++) {
                        if (columns[i].sort !== '' && columns[i].sort !== false) {
                                columnName = columns[i].name;
                                sort = columns[i].sort;
                        }
                }

                if (!columnName) {
                        return data;
                }

                // simple sorting
                return data.sort((previous: any, current: any) => {
                        if (previous[columnName] > current[columnName]) {
                                return sort === 'desc' ? -1 : 1;
                        } else if (previous[columnName] < current[columnName]) {
                                return sort === 'asc' ? -1 : 1;
                        }
                        return 0;
                });
        }

        public changeFilter(data: any, config: any): any {
                let filteredData: Array<any> = data;
                this.columns.forEach((column: any) => {
                        if (column.filtering) {
                                filteredData = filteredData.filter((item: any) => {
                                        return item[column.name].match(column.filtering.filterString);

                                });
                        }
                });

                if (!config.filtering) {
                        return filteredData;
                }

                if (config.filtering.columnName) {

                        return filteredData.filter((item: any) =>
                                item[config.filtering.columnName].match(this.config.filtering.filterString));
                }

                const tempArray: Array<any> = [];
                filteredData.forEach((item: any) => {
                        let flag = false;
                        this.columns.forEach((column: any) => {
                                if (item[column.name].toString() === this.config.filtering.filterString) {
                                        flag = true;
                                }
                        });
                        if (flag) {
                                tempArray.push(item);
                        }
                });
                filteredData = tempArray;
                return filteredData;
        }

        public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {
                if (config.filtering) {
                        Object.assign(this.config.filtering, config.filtering);
                }
                this.itemsPerPage = page.itemsPerPage;
                if (config.sorting) {
                        Object.assign(this.config.sorting, config.sorting);
                }
                const filteredData = this.changeFilter(this.data, this.config);
                const sortedData = this.changeSort(filteredData, this.config);
                this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
                this.length = sortedData.length;
        }
        public onCellClick(data: any): any {
                console.log(data);
        }
}
