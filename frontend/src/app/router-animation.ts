import { trigger, state, style, transition, animate } from '@angular/animations';
export function moveIn() {
    return trigger('moveIn', [
        state('void', style({position: 'fixed', width: '100%'})),
        state('*', style({position: 'fixed', width: '100%'})),
        transition(':enter', [
            style({opacity:'0%', transform: 'translateX(100px)'}),
            animate('.6s ease-in-out'), style({opacity:'0', transform: 'translateX(100px)'})
        ]),
        transition(':leave', [
            style({opacity:'1%', transform: 'translateX(0px)'}),
            animate('.6s ease-in-out'), style({opacity:'0', transform: 'translateX(-200px)'})
        ])
    ]);
}

export function fallIn() {
    return trigger('moveIn', [
        state('void', style({position: 'fixed', width: '100%'})),
        state('*', style({position: 'fixed', width: '100%'})),
        transition(':enter', [
            style({opacity:'0%', transform: 'translateY(100px)'}),
            animate('.6s ease-in-out'), style({opacity:'0', transform: 'translateX(0px)'})
        ]),
        transition(':leave', [
            style({opacity:'1%', transform: 'translateY(0px)'}),
            animate('.6s ease-in-out'), style({opacity:'0', transform: 'translateX(-200px)'})
        ])
    ]);
}