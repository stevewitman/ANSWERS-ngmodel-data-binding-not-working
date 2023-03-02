# QUESTION: (asked on AngularNation.net)

##Help needed for an ngModel issue

Hi, I'm having a very weird bug with an Angular 15 app. I have a text file that is using  [(ngModel)] to set the value of the field to a property, something like this [(ngModel)]="searchText" and the search text property is defined like this `searchText='';`

Now all I want to do is see if the search text has a length and if greater than 1, enable a button. Like this:

```ts
searchText = '';
```

```html
<button class="btn  btn-search text-white" (click)="doSearch()"     
[disabled]="searchText.length < 1"    
type="button">
```

This is my input field:

```html
<input type="text" class="border search-input"  
[(ngModel)]="searchText"     
(keyup)="checkKeyPress($event)"    
(input)="clearWhenEmpty()"  />
```

This did work before an upgrade to Angular 15 from 13, but I can't see why this doesn't now work. I know I could make the button enabled, but I'd like to know why the ngModel is not working. If I try to output the searchText in the template like this {{searchText}} in the component Html, I still don't see the value of the input field when it changes.

It looks to me that the data binding is not working for some reason, but I'm not sure.

# ANSWER: 

In this repo, I have the code you provided.

I added two things to get a working example ...

1. Closed the button tag with ...`Search</button>`

```html
<button class="btn  btn-search text-white" (click)="doSearch()"     
[disabled]="searchText.length < 1"    
type="button">Search</button>
```

2. I added imported `FormsModule` and added it to the  imports array in `app/module.ts`.