import {getColor} from '@/app/utils/color-utils';
import {AfterViewInit, Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {TitleCasePipe} from '@angular/common';

import ApexTree from 'apextree';

@Component({
    selector: 'app-apextree',
    imports: [PageTitleComponent, TitleCasePipe],
    templateUrl: './apextree.component.html',
    styles: ``
})
export class ApextreeComponent implements AfterViewInit {
    fontFamily = getComputedStyle(document.body).fontFamily;

    ngAfterViewInit(): void {
        this.renderTrees();
    }

    basicNodeTemplate = (content: any): string => `
    <div style='display: flex; flex-direction: row; gap:10px; align-items: center; height: 100%; box-shadow: 1px 2px 4px #ccc; padding: 0 15px;'>
        <img style='width: 50px; height: 50px; border-radius: 50%;' src='${content.imageURL}' alt=''>
        <div style="font-weight: 500; font-family: ${this.fontFamily}; font-size: 14px">${content.name}</div>
    </div>`;

    verticalNodeTemplate = (content: any): string => `
    <div style='display: flex; flex-direction: column; gap: 10px; justify-content: center; align-items: center; height: 100%'>
        <img style='width: 50px; height: 50px; border-radius: 50%;' src='${content.imageURL}' alt=''/>
        <div style="font-weight: 500; font-family: ${this.fontFamily}; font-size: 14px">${content.name}</div>
    </div>`;

    private renderApexTree(id: string, options: any, data: any) {
        const el = document.getElementById(id);
        if (el) {
            const tree = new ApexTree(el, options);
            tree.render(data);
        }
    }

    private cloneWithPrefix(node: any, prefix: string): any {
        const cloned = {
            ...node,
            id: `${prefix}_${node.id}`,
        };
        if (node.children) {
            cloned.children = node.children.map((child: any) => this.cloneWithPrefix(child, prefix));
        }
        return cloned;
    }

    private renderTrees() {
        const sharedOptions = {
            contentKey: 'data',
            width: '100%',
            enableToolbar: false,
            nodeWidth: 170,
            nodeHeight: 70,
            childrenSpacing: 70,
            siblingSpacing: 30,
            fontColor: getColor('light-text-emphasis'),
            nodeTemplate: this.basicNodeTemplate,
            nodeStyle: 'box-shadow: -3px 6px 8px -5px rgba(0,0,0,0.31)',
            edgeColorHover: getColor('secondary'),
        };

        const data1 = {
            id: 'Lucas_Alex',
            data: {
                name: 'Lucas Alex',
                imageURL: 'assets/images/users/user-1.jpg',
            },
            options: {
                nodeBGColor: getColor('primary-rgb', 0.5),
            },
            children: [
                {
                    id: 'Alex_Lee',
                    data: {
                        name: 'Alex Lee',
                        imageURL: 'assets/images/users/user-3.jpg',
                    },
                    options: {
                        nodeBGColor: getColor('danger-rgb', 0.5),
                    },
                    children: [
                        {
                            id: 'Mia_Patel',
                            data: {
                                name: 'Mia Patel',
                                imageURL: 'assets/images/users/user-9.jpg',
                            },
                            options: {
                                nodeBGColor: getColor('info-rgb', 0.5),
                            },
                        },
                        {
                            id: 'Ryan_Clark',
                            data: {
                                name: 'Ryan Clark',
                                imageURL: 'assets/images/users/user-10.jpg',
                            },
                            options: {
                                nodeBGColor: getColor('info-rgb', 0.5),
                            },
                        },
                        {
                            id: 'Zoe_Wang',
                            data: {
                                name: 'Zoe Wang',
                                imageURL: 'assets/images/users/user-2.jpg',
                            },
                            options: {
                                nodeBGColor: getColor('info-rgb', 0.5),
                            },
                        },
                    ],
                },
                {
                    id: 'Leo_Kim',
                    data: {
                        name: 'Leo Kim',
                        imageURL: 'assets/images/users/user-6.jpg',
                    },
                    options: {
                        nodeBGColor: getColor('danger-rgb', 0.5),
                    },
                    children: [
                        {
                            id: 'Ava_Jones',
                            data: {
                                name: 'Ava Jones',
                                imageURL: 'assets/images/users/user-3.jpg',
                            },
                            options: {
                                nodeBGColor: getColor('purple-rgb', 0.5),
                            },
                        },
                        {
                            id: 'Maya_Gupta',
                            data: {
                                name: 'Maya Gupta',
                                imageURL: 'assets/images/users/user-7.jpg',
                            },
                            options: {
                                nodeBGColor: getColor('purple-rgb', 0.5),
                            },
                        },
                    ],
                },
                {
                    id: 'Lily_Chen',
                    data: {
                        name: 'Lily Chen',
                        imageURL: 'assets/images/users/user-4.jpg',
                    },
                    options: {
                        nodeBGColor: getColor('danger-rgb', 0.5),
                    },
                    children: [
                        {
                            id: 'Jake_Scott',
                            data: {
                                name: 'Jake Scott',
                                imageURL: 'assets/images/users/user-3.jpg',
                            },
                            options: {
                                nodeBGColor: getColor('secondary-rgb', 0.5),
                            },
                        },
                    ],
                },
                {
                    id: 'Max_Ruiz',
                    data: {
                        name: 'Max Ruiz',
                        imageURL: 'assets/images/users/user-8.jpg',
                    },
                    options: {
                        nodeBGColor: getColor('danger-rgb', 0.5),
                    },
                },
            ],
        };

        const data2 = {
            id: 'ms',
            data: {
                imageURL: 'assets/images/users/user-1.jpg',
                name: 'Margret Swanson',
            },
            options: {
                nodeBGColor: getColor('primary-rgb', 0.5),
                nodeBGColorHover: getColor('primary-rgb', 0.7),
            },
            children: [
                {
                    id: 'mh',
                    data: {
                        imageURL: 'assets/images/users/user-3.jpg',
                        name: 'Mark Hudson',
                    },
                    options: {
                        nodeBGColor: getColor('danger-rgb', 0.5),
                        nodeBGColorHover: getColor('danger-rgb', 0.7),
                    },
                    children: [
                        {
                            id: 'kb',
                            data: {
                                imageURL: 'assets/images/users/user-2.jpg',
                                name: 'Karyn Borbas',
                            },
                            options: {
                                nodeBGColor: getColor('info-rgb', 0.5),
                                nodeBGColorHover: getColor('info-rgb', 0.7),
                            },
                        },
                        {
                            id: 'cr',
                            data: {
                                imageURL: 'assets/images/users/user-9.jpg',
                                name: 'Chris Rup',
                            },
                            options: {
                                nodeBGColor: getColor('purple-rgb', 0.5),
                                nodeBGColorHover: getColor('purple-rgb', 0.7),
                            },
                        },
                    ],
                },
                {
                    id: 'cs',
                    data: {
                        imageURL: 'assets/images/users/user-7.jpg',
                        name: 'Chris Lysek',
                    },
                    options: {
                        nodeBGColor: getColor('secondary-rgb', 0.5),
                        nodeBGColorHover: getColor('secondary-rgb', 0.7),
                    },
                    children: [
                        {
                            id: 'Noah_Chandler',
                            data: {
                                imageURL: 'assets/images/users/user-6.jpg',
                                name: 'Noah Chandler',
                            },
                            options: {
                                nodeBGColor: getColor('info', 0.5),
                                nodeBGColorHover: getColor('info', 0.7),
                            },
                        },
                        {
                            id: 'Felix_Wagner',
                            data: {
                                imageURL: 'assets/images/users/user-4.jpg',
                                name: 'Felix Wagner',
                            },
                            options: {
                                nodeBGColor: getColor('success-rgb', 0.5),
                                nodeBGColorHover: getColor('success-rgb', 0.7),
                            },
                        },
                    ],
                },
            ],
        };

        const collapseExpandData = this.cloneWithPrefix(data2, 'ce');

        this.renderApexTree('right-to-left', {...sharedOptions, direction: 'right'}, data1);
        this.renderApexTree('bottom-tree', {...sharedOptions, direction: 'bottom'}, data1);
        this.renderApexTree('top-tree', {
            ...sharedOptions,
            direction: 'top',
            nodeWidth: 150,
            nodeHeight: 100,
            childrenSpacing: 50,
            siblingSpacing: 20,
            nodeTemplate: this.verticalNodeTemplate,
        }, data2);
        this.renderApexTree('collapse-expand', {
            ...sharedOptions,
            direction: 'top',
            nodeWidth: 150,
            nodeHeight: 100,
            childrenSpacing: 50,
            siblingSpacing: 20,
            nodeTemplate: this.verticalNodeTemplate,
            enableExpandCollapse: true,
        }, collapseExpandData);
    }
}
