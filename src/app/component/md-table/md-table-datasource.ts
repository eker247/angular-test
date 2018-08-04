import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MdTableItem {
  symbol: string;
  name: string;
  id: number;
}

function mergeItem(mit: MdTableItem) {
  return mit.id + mit.name.trim().toLowerCase() + mit.shortcut.trim().toLowerCase();
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MdTableItem[] = [
  {id: 1, name: 'Hydrogen', symbol: 'H'},
  {id: 2, name: 'Helium', symbol: 'He'},
  {id: 3, name: 'Lithium', symbol: 'Li'},
  {id: 4, name: 'Beryllium', symbol: 'Be'},
  {id: 5, name: 'Boron', symbol: 'Bo'},
  {id: 6, name: 'Carbon', symbol: 'C'},
  {id: 7, name: 'Nitrogen', symbol: 'N'},
  {id: 8, name: 'Oxygen', symbol: 'O'},
  {id: 9, name: 'Fluorine', symbol: 'F'},
  {id: 10, name: 'Neon', symbol: 'Ne'},
  {id: 11, name: 'Sodium', symbol: 'Na'},
  {id: 12, name: 'Magnesium', symbol: 'Mg'},
  {id: 13, name: 'Aluminum', symbol: 'Al'},
  {id: 14, name: 'Silicon', symbol: 'Si'},
  {id: 15, name: 'Phosphorus', symbol: 'Ph'},
  {id: 16, name: 'Sulfur', symbol: 'S'},
  {id: 17, name: 'Chlorine', symbol: 'Cl'},
  {id: 18, name: 'Argon', symbol: 'Ar'},
  {id: 19, name: 'Potassium', symbol: 'K'},
  {id: 20, name: 'Calcium', symbol: 'Ca'},
];

/**
 * Data source for the MdTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MdTableDataSource extends DataSource<MdTableItem> {
  filter: string;
  data = new MatTableDataSource(EXAMPLE_DATA);
  
  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
    this.data.filterPredicate = (data, filter) => {
      let str = data.id + data.name.trim().toLowerCase() + data.symbol.trim().toLowerCase();
      return str.includes(filter);
    } 
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MdTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MdTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MdTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'symbol': return compare(a.symbol, b.symbol, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }

}


/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
