/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './home.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/router';
import * as i3 from '@angular/common';
import * as i4 from './home.component';
import * as i5 from '../services/auth.service';
const styles_HomeComponent:any[] = [i0.styles];
export const RenderType_HomeComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_HomeComponent,data:{}});
export function View_HomeComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵted(-1,(null as any),['\n'])),(_l()(),i1.ɵeld(1,0,
      (null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),
      ['Oke'])),(_l()(),i1.ɵted(-1,(null as any),['\n'])),(_l()(),i1.ɵeld(4,0,(null as any),
      (null as any),1,'p',([] as any[]),(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n  Welcome [NAME]\n'])),
      (_l()(),i1.ɵted(-1,(null as any),['\n'])),(_l()(),i1.ɵeld(7,0,(null as any),
          (null as any),15,'ul',([] as any[]),(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted(-1,(null as any),['\n  '])),
      (_l()(),i1.ɵeld(9,0,(null as any),(null as any),3,'li',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵeld(10,
          0,(null as any),(null as any),2,'a',[['routerLink','/admin']],[[1,'target',
              0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,11).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(11,671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['Admin'])),(_l()(),i1.ɵted(-1,
          (null as any),['\n  '])),(_l()(),i1.ɵeld(14,0,(null as any),(null as any),
          3,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵeld(15,0,(null as any),(null as any),2,'a',[['routerLink',
          '/login']],[[1,'target',0],[8,'href',4]],[[(null as any),'click']],(_v,en,
          $event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,16).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(16,671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),(_l()(),i1.ɵted(-1,(null as any),['Login'])),(_l()(),i1.ɵted(-1,
          (null as any),['\n  '])),(_l()(),i1.ɵeld(19,0,(null as any),(null as any),
          2,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵeld(20,0,(null as any),(null as any),1,'a',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted(-1,(null as any),['Logout'])),(_l()(),i1.ɵted(-1,(null as any),
          ['\n']))],(_ck,_v) => {
    const currVal_2:any = '/admin';
    _ck(_v,11,0,currVal_2);
    const currVal_5:any = '/login';
    _ck(_v,16,0,currVal_5);
  },(_ck,_v) => {
    const currVal_0:any = i1.ɵnov(_v,11).target;
    const currVal_1:any = i1.ɵnov(_v,11).href;
    _ck(_v,10,0,currVal_0,currVal_1);
    const currVal_3:any = i1.ɵnov(_v,16).target;
    const currVal_4:any = i1.ɵnov(_v,16).href;
    _ck(_v,15,0,currVal_3,currVal_4);
  });
}
export function View_HomeComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,0,(null as any),(null as any),1,'home',([] as any[]),
      (null as any),(null as any),(null as any),View_HomeComponent_0,RenderType_HomeComponent)),
      i1.ɵdid(1,49152,(null as any),0,i4.HomeComponent,[i5.AuthService],(null as any),
          (null as any))],(null as any),(null as any));
}
export const HomeComponentNgFactory:i1.ComponentFactory<i4.HomeComponent> = i1.ɵccf('home',
    i4.HomeComponent,View_HomeComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovS1VMSUFIL1BlbXJvZ3JhbWFuIFdlYiBMYW5qdXQvUGVtcm9ncmFtYW4tV2ViLUxhbmp1dC8xMi5EZXBsb3ltZW50L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi9LVUxJQUgvUGVtcm9ncmFtYW4gV2ViIExhbmp1dC9QZW1yb2dyYW1hbi1XZWItTGFuanV0LzEyLkRlcGxveW1lbnQvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibmc6Ly8vRDovS1VMSUFIL1BlbXJvZ3JhbWFuIFdlYiBMYW5qdXQvUGVtcm9ncmFtYW4tV2ViLUxhbmp1dC8xMi5EZXBsb3ltZW50L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovS1VMSUFIL1BlbXJvZ3JhbWFuIFdlYiBMYW5qdXQvUGVtcm9ncmFtYW4tV2ViLUxhbmp1dC8xMi5EZXBsb3ltZW50L3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC50cy5Ib21lQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXG48aDE+T2tlPC9oMT5cbjxwPlxuICBXZWxjb21lIFtOQU1FXVxuPC9wPlxuPHVsPlxuICA8bGk+PGEgcm91dGVyTGluaz1cIi9hZG1pblwiPkFkbWluPC9hPjwvbGk+XG4gIDxsaT48YSByb3V0ZXJMaW5rPVwiL2xvZ2luXCI+TG9naW48L2E+PC9saT5cbiAgPGxpPjxhPkxvZ291dDwvYT48L2xpPlxuPC91bD4iLCI8aG9tZT48L2hvbWU+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBLDBDQUNBO01BQUE7TUFBQSw0Q0FBSTtNQUFBLFVBQVEsMENBQ1o7TUFBQTtNQUFBLDhCQUFHO01BRUMsMENBQ0o7VUFBQTtVQUFBLDhCQUFJO01BQ0Y7VUFBQSwwREFBSTtVQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7a0JBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsZUFBdUIsNkNBQWM7VUFBQSx5QkFDekM7VUFBQTtVQUFBLGdCQUFJO1VBQUE7Z0JBQUE7UUFBQTtRQUFBO1VBQUE7Y0FBQTtVQUFBO1FBQUE7UUFBQTtNQUFBLHVDQUFBO1VBQUE7VUFBQSxlQUF1Qiw2Q0FBYztVQUFBLHlCQUN6QztVQUFBO1VBQUEsZ0JBQUk7VUFBQTtNQUFHLDhDQUFlO1VBQUE7SUFGZjtJQUFILFlBQUcsU0FBSDtJQUNHO0lBQUgsWUFBRyxTQUFIOztJQURBO0lBQUE7SUFBQSxZQUFBLG1CQUFBO0lBQ0E7SUFBQTtJQUFBLFlBQUEsbUJBQUE7Ozs7b0JDUE47TUFBQTthQUFBO1VBQUE7OzsifQ==
