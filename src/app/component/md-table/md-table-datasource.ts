import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map, filter } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface MdTableItem {
  shortcut: string;
  name: string;
  id: number;
}

function mergeItem(mit: MdTableItem) {
  return mit.id + mit.name.trim().toLowerCase() + mit.shortcut.trim().toLowerCase();
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: MdTableItem[] = [
  {id: 1, name: 'Hydrogen', shortcut: 'H'},
  {id: 2, name: 'Helium', shortcut: 'He'},
  {id: 3, name: 'Lithium', shortcut: 'Li'},
  {id: 4, name: 'Beryllium', shortcut: 'Be'},
  {id: 5, name: 'Boron', shortcut: 'Bo'},
  {id: 6, name: 'Carbon', shortcut: 'C'},
  {id: 7, name: 'Nitrogen', shortcut: 'N'},
  {id: 8, name: 'Oxygen', shortcut: 'O'},
  {id: 9, name: 'Fluorine', shortcut: 'F'},
  {id: 10, name: 'Neon', shortcut: 'Ne'},
  {id: 11, name: 'Sodium', shortcut: 'Na'},
  {id: 12, name: 'Magnesium', shortcut: 'Mg'},
  {id: 13, name: 'Aluminum', shortcut: 'Al'},
  {id: 14, name: 'Silicon', shortcut: 'Si'},
  {id: 15, name: 'Phosphorus', shortcut: 'Ph'},
  {id: 16, name: 'Sulfur', shortcut: 'S'},
  {id: 17, name: 'Chlorine', shortcut: 'Cl'},
  {id: 18, name: 'Argon', shortcut: 'Ar'},
  {id: 19, name: 'Potassium', shortcut: 'K'},
  {id: 20, name: 'Calcium', shortcut: 'Ca'},
];

/**
 * Data source for the MdTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class MdTableDataSource extends DataSource<MdTableItem> {
  data: MdTableItem[] = EXAMPLE_DATA;

  filter: string;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
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
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
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
        case 'shortcut': return compare(a.shortcut, b.shortcut, isAsc);
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
