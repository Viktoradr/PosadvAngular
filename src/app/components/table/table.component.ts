import { SelectionModel } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'table-material',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('data') list = new Array<any>()
  @Input('params') displayedColumns : string[] = []
  @Input('headers') displayedHeader : string[] = []
  @Input('selection') hasSelect: boolean = false
  @Input('paginator') hasPaginator: boolean = true
  @Input('sort') hasSort: boolean = false
  @Input('emptyDataText') emptyDataText = 'No data'
  @Input('pageSizeOptions') pageSizeOptions = [5, 10, 25, 100]
  @Input('pageSizeText') pageSizeText = 'Select page of process'

  @Output('selections') eventSelected = new EventEmitter<any>()

  opColor: any = 'accent'
  screenMD: boolean = true

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort: MatSort = new MatSort

  dataSource: MatTableDataSource<any>
  selection = new SelectionModel<any>(true, [])

  constructor() {
    this.dataSource = new MatTableDataSource(this.list)
  }

  ngOnInit(): void {
    const existe = this.displayedColumns.includes('select')

    if (this.hasSelect && existe == false) {
      this.displayedColumns = this.displayedColumns.reduce((acc, crr) => [...acc, crr], ['select'])
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.dataSource = new MatTableDataSource(changes['list'].currentValue)
    }
  }

  ngAfterViewInit() {
    if (this.hasPaginator) this.dataSource.paginator = this.paginator
    if (this.hasSort) this.dataSource.sort = this.sort
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length
    const numRows = this.dataSource.data.length
    return numSelected === numRows
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear()
      this.eventSelected.emit([])
      return
    }

    this.selection.select(...this.dataSource.data)
    this.eventSelected.emit(this.selection.selected)
  }

  toggleRow(item: any) {
    this.selection.toggle(item)
    this.selection.hasValue()
    this.eventSelected.emit(this.selection.selected)
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`
  }
}
