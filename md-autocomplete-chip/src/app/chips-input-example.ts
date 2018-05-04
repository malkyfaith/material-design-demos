import { Component, ViewChild } from '@angular/core';
import { MatChipInputEvent, MatAutocompleteTrigger } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import 'rxjs/add/observable/of';
import { FormControl } from '@angular/forms';
/**
 * @title Chips with input
 */
@Component({
  selector: 'chips-input-example',
  templateUrl: 'chips-input-example.html',
  styles: [`
  .section {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    flex: 0 1  50%;
  }
  `]
})
export class ChipsInputExample {

  options = ['banana', 'apple', 'jackfruit', 'mango', 'grapes', 'kiwi', 'Ki', 'Man'];
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;
  separatorKeysCodes = [ENTER, COMMA];

  myControl: FormControl = new FormControl();
  @ViewChild(MatAutocompleteTrigger) public autoComplete: any;

  fruits = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' },
  ];

  filteredOptions: Observable<string[]>;

  addSelect(event) {
    console.log(event)
    let option = event.option;
    let input = event.input;
    let value = option.value;
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    let index = this.options.indexOf(value);

    if (index >= 0) {
      this.options.splice(index, 1);
    }
    if (input) {
      input.value = '';
    }



  }


  // ngOnInit() {
  //   this.filteredOptions = this.myControl.valueChanges
  //     .pipe(
  //       startWith(''),
  //       map(val => this.filter(val))
  //     );
  // }

  filter(val: string): string[] {
    return this.options.filter(option => {
      return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
    })
  }

  onChange(val) {
    this.filteredOptions = Observable.of(this.filter(val));
  }


  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our item
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    let index = this.options.indexOf(value);

    if (index >= 0) {
      this.options.splice(index, 1);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    
    //this.filter('');
    //this.autoComplete.openPanel();
    
  }

  public openPanel(){
    this.autoComplete.openPanel();
    this.filteredOptions = Observable.of(this.options);
  }

  remove(item: any): void {
    let index = this.fruits.indexOf(item);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
    this.options.push(item.name);
  }




}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */