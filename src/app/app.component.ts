import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from './providers/toastr.serivce';
import { ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { AutoComplete } from 'primeng/autocomplete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('pageSearch')
  searchAutoComplete!: AutoComplete;

  
  title = 'ComponentLibrary';
  searchForm = this.formBuilder.group({
    searchTerm: ''
  })

  searchId: any;

  searchItems = [
    {label: "Checkbox", value:"checkbox"},
    {label: "Radio Button", value:"radioButton"},
    {label: "Text Input", value:"textInput"}
  ]

  filteredSearchItems: any[] = [];
  

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.filteredSearchItems = this.searchItems;
  }

  onSubmit(): void {
    const scrollPoint = $("*:contains("+this.searchForm.value.searchTerm+"):first").offset();
    scrollPoint ? $(window).scrollTop(scrollPoint.top) : console.log("Nothing found with search");
    this.searchForm.reset();
  }

  filterSearchItems(event: any) {
    let filtered : any[] = [];
    this.filteredSearchItems = []; 
    let query = event.query;

    for(let i = 0; i < this.searchItems.length; i++) {
        let searchItem = this.searchItems[i];
        if (searchItem.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(searchItem);
        }
    }

    this.filteredSearchItems = filtered;
  }

  handleDropdown(event: any) {
    event.originalEvent.preventDefault();
    event.originalEvent.stopPropagation();
    if (this.searchAutoComplete.overlayVisible) {
      this.searchAutoComplete.hide();
    } else {
      this.searchAutoComplete.show();
    }
  }

  showDropdown(event: any) {
    event.originalEvent.preventDefault();
    event.originalEvent.stopPropagation();
    this.searchAutoComplete.show();
  }

  hideDropdown(event: any) {
    event.originalEvent.preventDefault();
    event.originalEvent.stopPropagation();
    this.searchAutoComplete.hide();
  }

  showAll(event: any) {
    this.filteredSearchItems = [];
    setTimeout(() => this.filteredSearchItems = this.searchItems, 100)
  }
}