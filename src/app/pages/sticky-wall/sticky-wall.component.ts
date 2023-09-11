import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ConditionState } from 'src/app/state/condition.state';

@Component({
    standalone: true,
    selector: 'sticky-wall',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'sticky-wall.component.html',
    imports: [NgFor, NgClass]
})

export class StickyWallComponent {
    public state = inject(ConditionState);
    public stickyData = [
        {
            title: 'Social Media',
            content: '- Plan social content - Build content calendar - Plan promotion and distribution'
        },
        {
            title: 'Content Strategy',
            content: 'Would need time to get insights (goals, personals, budget, audits), but after, it would be good to focus on assembling my team (start with SEO specialist, then perhaps an email marketer?). Also need to brainstorm on tooling.'
        },
        {
            title: 'Email A/B Tests',
            content: '- Subject lines - Sender - CTA - Sending times'
        },
        {
            title: 'Banner Ads',
            content: 'Notes from the workshop: - Sizing matters - Choose distinctive imagery - The landing page must match the display ad'
        }
    ]
}