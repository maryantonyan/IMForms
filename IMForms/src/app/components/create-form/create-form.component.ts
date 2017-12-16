import { Component, OnInit } from '@angular/core';
import { Ng2FloatBtnComponent, Ng2FloatBtn } from 'ng2-float-btn';
import { SlideBarComponent } from '../fragments/slide-bar/slide-bar.component';
import { SlideBarService } from '../fragments/slide-bar/slide-bar.service';
import { ElementRef } from '@angular/core';
import { Renderer } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'app-create-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.less', '../fragments/slide-bar/slide-bar.component.less'],
    viewProviders: [DragulaService]

})
export class CreateFormComponent implements OnInit {
    direction: string;
    buttons: Array<Ng2FloatBtn>;
    showArea = false;
    overed = false;
    dragged = false;
    elements = [
        {
            name: 'Fullname', type: '<form class="formElement">\
            <button type="button" name="btn" class="glyphicon glyphicon-remove  btn btn-default btn-xl removeButton" ></button>\
            <div style="margin-right: 10px;">\
    <label>First Name</label>\
    <br>\
    <input class="form-control" placeholder="Your name.." disabled >\
    <br>\
                <label >Last Name</label>\
                <br>\
                    <input style="width:90%" class="form-control"  placeholder="Your last name.." disabled >\
                    </div>\
                    </form>'},
        {
            name: 'Email', type: '<form class="formElement">\
      <button type="button" name="btn" class="glyphicon glyphicon-remove btn btn-default btn-xl removeButton"></button>\
      <div style="margin-right: 10px;">\
                        <label for="mail">Email</label>\
                        <br>\
                            <input style="width:90%;" class="form-control" placeholder="Email" disabled >\
                        </div>\
                        </form>'},
        {
            name: 'Phone', type: '<form class="formElement">\
            <button type="button" name="btn" class="glyphicon glyphicon-remove btn btn-default btn-xl removeButton"></button>\
           <div style="margin-right: 10px">\
            <label for="phone">Telephone</label>\
            <br>\
                <input style="width:90%" class="form-control" placeholder="Telephone" disabled >\
            </div>\
        </form>'},
        {
            name: 'Address', type: '<form class="formElement">\
                <button type="button"  name="btn" class="glyphicon glyphicon-remove btn btn-default btn-xl removeButton"></button>\
        <div style="margin-right: 10px">\
            <label for="country">Country</label>\
            <br>\
                <select class="form-control" style="width:90%" name="country" disabled >\
                    <option value="australia">Australia</option>\
                    <option value="canada">Canada</option>\
                    <option value="usa">USA</option>\
                </select>\
        </div>\
            </form>'},
        {
            name: 'Birthday', type: '<form class="formElement">\
            <button type="button" name="btn" class="glyphicon glyphicon-remove btn btn-default btn-xl removeButton"></button>\
            <div style = "margin-right: 10px">\
                                            <label for="">Birthday</label>\
                                            <br>\
                                                <input style="width:90%" class="form-control" type="date" name="bday" disabled>\
                                            </div>                                                     </form>'}];

    constructor(private slidebarService: SlideBarService,
        private elementRef: ElementRef, private renderer: Renderer,
        private dragulaService: DragulaService) {

    this.direction = 'left';
    this.buttons = [
      {
        color: 'primary',
        iconName: 'visibility',
        onClick: () => {
          alert('buton 1 clicked');
        }
      },
      {
        color: 'primary',
        iconName: 'save',
        onClick: () => {
          alert('buton 2 clicked');
        }
      },
      {
        color: 'primary',
        iconName: 'delete',
        onClick: () => {
          alert('buton 3 clicked');
        }
      },
      {
        color: 'primary',
        iconName: 'publish',
        onClick: () => {
          alert('buton 4 clicked');
        }
      },
    ]

    setInterval(() => {
            const button = this.elementRef.nativeElement.querySelectorAll('.removeButton');
            const form = this.elementRef.nativeElement.querySelectorAll('.formElement');
            for (let i = 0; i < form.length; ++i) {
                form[i].addEventListener('mouseleave', this.over);
                form[i].addEventListener('mouseenter', this.move);
            }
            for (let i = 0; i < button.length; ++i) {
                button[i].addEventListener('click', this.click);
            }
         }, 200);
        

        dragulaService.setOptions('first-bag', {
            copy: function (el, source) {
                return (source.id === "drag-container");
            },
            accepts: function (el, target, source, sibling) {
                return !(source.id === "no-drop" && target.id === "drag-container");
            },
            invalid: function (el, handle) {
                return el.id === 'text';
            },
        });

        dragulaService.drag.subscribe((value) => {
            this.dragged = true;
            this.elementRef.nativeElement.querySelector('.remove').style.display = "none";
            if (this.check()) {
                this.closeSidenav();
            }
        });

        dragulaService.drop.subscribe((value: any[]) => {
            let noDrop = this.elementRef.nativeElement.querySelector('#no-drop'); 
            if (value[2] != null && value[3].id === 'drag-container' && value[2] !== value[3]) {
                value[2].classList.remove("drag");
                this.elementRef.nativeElement.querySelector('.remove').style.display = "none";
                const el = this.elements.filter(element => element.name === value[1].innerText.trim());
                value[1].outerHTML = el[0].type;
                this.dragged = false;

                } else if (noDrop.childElementCount < 2) {
                     noDrop.classList.add("drag");
                     this.elementRef.nativeElement.querySelector('.remove').style.display = "initial";
             
             }  
        });
            
       dragulaService.shadow.subscribe((value: any[]) => {
            if (value[3].id == "drag-container") {
                value[1].classList.remove("gu-transit");
                value[1].classList.add("gu-transit-invisible");
            }
       });
    }

    ngOnInit() { }
    check() {
        return (window.innerWidth < 768) && this.slidebarService.opened === true;
    }

    click($event: any) {
        let element = $event.target.parentElement; 
        if (element.parentElement.childElementCount < 3 ) {
            element.parentElement.classList.add("drag");
            element.parentElement.querySelector('.remove').style.display="initial";
        }
        element.remove();
    }

    over(event: any) {
        event.target.btn.style.display = "none";
        event.target.classList.remove('over');
    }

    move($event: any) {
        $event.target.btn.style.display = "inline-block";
        $event.target.classList.add('over');
    }

    public closeSidenav() {
        this.slidebarService
            .toggle()
            .then(() => { });
        setTimeout(() => this.slidebarService.opened = false, 360);
    }

    close () {
        if (this.check()) {
            this.closeSidenav();
        }
    
    }
}
