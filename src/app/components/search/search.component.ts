import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchProjectService } from 'src/app/services/search-project.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm:FormGroup;
  findedCompany:any;
  constructor(private fb:FormBuilder,
    private companyService:SearchProjectService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      project:['']
    })
  }
  search(x){
    console.log('here one value', x);
    this.companyService.searchByCompany(x).subscribe((data)=>{
      console.log('searched from BE', data.searchedCompany);
      this.findedCompany= data.searchedCompany;
    })
  }
}
