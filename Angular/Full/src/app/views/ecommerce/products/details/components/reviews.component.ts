import {Component} from '@angular/core';
import {NgIcon} from '@ng-icons/core';
import {NgbPagination, NgbPaginationNext, NgbPaginationPrevious, NgbProgressbar} from '@ng-bootstrap/ng-bootstrap';
import {RatingComponent} from '@app/components/rating.component';

type userReviewType = {
    id: number;
    name: string;
    avatar: string;
    email: string;
    rating: number;
    message: string;
    description: string
    date: string;
    time: string;
    status: 'published' | 'pending'
}

@Component({
    selector: 'app-reviews',
    imports: [NgIcon, NgbProgressbar, RatingComponent, NgbPagination, NgbPaginationNext, NgbPaginationPrevious],
    template: `
        <div
            class="card mt-5 border-dashed border-light">
            <div class="card-header border-light">
                <h4 class="card-title">Manage Reviews</h4>
            </div>

            <div class="card-header p-0 d-block">
                <div class="row align-items-center g-0">
                    <div class="col-xl-7">
                        <div class="d-flex align-items-center gap-4 p-4">
                            <img src="assets/images/ratings.svg" alt="Product"
                                 height="80">
                            <div>
                                <h3 class="text-primary d-flex align-items-center gap-2 mb-2 fw-bold">
                                    4.92
                                    <ng-icon name="tablerStarFill"/>
                                </h3>
                                <p class="mb-2">Based on 245 verified reviews</p>
                                <p class="pe-2 h6 text-muted mb-2 lh-base">Feedback
                                    collected from real customers who purchased our
                                    templates</p>
                                <span class="badge badge-label text-bg-success">+12 new this week</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5">
                        <div class="p-3">
                            @for (review of reviews; track $index; let index = $index; let last = $last) {
                                <div class="d-flex align-items-center gap-2 {{!last ? 'mb-2' : ''}}">
                                    <div class="flex-shrink-0" style="width: 50px;">{{ reviews.length - index }} Star
                                    </div>
                                    <ngb-progressbar class="w-100" [value]="review.progress" type="primary"
                                                     style="height: 8px"/>

                                    <div class="flex-shrink-0 text-end"
                                         style="width: 30px;"><span
                                        class="badge text-bg-light">{{ review.count }}</span></div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table
                    class="table table-custom table-centered table-select table-hover w-100 mb-0">
                    <thead class="bg-light align-middle bg-opacity-25">
                    <tr class="text-uppercase fs-xxs">
                        <th>Reviewer</th>
                        <th style="width: 18rem;">Review</th>
                        <th data-table-sort>Date</th>
                        <th data-table-sort>Status</th>
                        <th class="text-center" style="width: 1%;">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        @for (user of userReviews; track $index) {
                            <tr>
                                <td>
                                    <div class="d-flex justify-content-start align-items-center gap-2">
                                        <div class="avatar avatar-sm">
                                            <img [src]="user.avatar" [alt]="'avatar-' + user.id"
                                                 class="img-fluid rounded-circle">
                                        </div>
                                        <div>
                                            <h5 class="text-nowrap fs-sm mb-0 lh-base">{{ user.name }}</h5>
                                            <p class="text-muted fs-xs mb-0">{{ user.email }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                              <span class="text-warning fs-lg">
                               <app-rating [rate]="user.rating" size="16"/>
                              </span>
                                    <h5 class="mt-2">{{ user.message }}</h5>
                                    <p class="text-muted fst-italic mb-0">"{{ user.description }}"</p>
                                </td>
                                <td>{{ user.date }} <small class="text-muted">{{ user.time }}</small></td>
                                <td>
                              <span class="badge  fs-xxs text-capitalize"
                                    [class]="user.status === 'pending' ? 'badge-soft-warning' : 'badge-soft-success'">
                                {{ user.status }}
                              </span>
                                </td>
                                <td>
                                    <div class="d-flex justify-content-center gap-1">
                                        <button class="btn btn-light btn-icon btn-sm rounded-circle">
                                            <ng-icon
                                                name="tablerEye" class="fs-lg"></ng-icon>
                                        </button>
                                        <button class="btn btn-light btn-icon btn-sm rounded-circle">
                                            <ng-icon
                                                name="tablerEdit" class="fs-lg"></ng-icon>
                                        </button>
                                        <button class="btn btn-light btn-icon btn-sm rounded-circle">
                                            <ng-icon
                                                name="tablerTrash" class="fs-lg"></ng-icon>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
            <div class="card-footer border-0">
                <div class="d-flex justify-content-between pagination-boxed align-items-center">
                    <div data-table-pagination-info="reviews"></div>
                    <ngb-pagination [collectionSize]="30" [page]="1">
                        <ng-template ngbPaginationPrevious>
                            <ng-icon name="tablerChevronLeft"/>
                        </ng-template>
                        <ng-template ngbPaginationNext>
                            <ng-icon name="tablerChevronRight"/>
                        </ng-template>
                    </ngb-pagination>
                </div>
            </div>
        </div>
    `,
    styles: ``
})
export class ReviewsComponent {
    reviews: { progress: number, count: number }[] = [
        {
            progress: 85,
            count: 128,
        },
        {
            progress: 15,
            count: 37,
        },
        {
            progress: 10,
            count: 15,
        },
        {
            progress: 7,
            count: 7,
        },
        {
            progress: 2,
            count: 2,
        },
    ]

    userReviews: userReviewType[] = [
        {
            id: 1,
            name: 'Sophia Lee',
            email: 'sophia.lee@digitalshop.com',
            rating: 5,
            message: 'Great product, would buy again!',
            description: 'These earbuds are amazing, the sound quality is top-notch. Totally worth the price!',
            date: '22 Apr, 2025',
            time: '04:10 PM',
            status: 'published',
            avatar: 'assets/images/users/user-8.jpg'
        },
        {
            id: 2,
            name: 'David Smith',
            email: 'david.smith@healthstore.com',
            rating: 4.5,
            message: 'Decent, but overpriced',
            description: "It does the job, but I feel like it's a little expensive for what it offers.",
            date: '23 Apr, 2025',
            time: '02:20 PM',
            status: 'pending',
            avatar: 'assets/images/users/user-6.jpg'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            email: 'alice.johnson@homesupplies.com',
            rating: 5,
            message: 'Amazing quality!',
            description: 'The TV has incredible picture quality. Totally worth the investment!',
            date: '24 Apr, 2025',
            time: '09:15 AM',
            status: 'published',
            avatar: 'assets/images/users/user-3.jpg'
        },
        {
            id: 4,
            name: 'Michael Green',
            email: 'michael.green@mobileshop.com',
            rating: 5,
            message: 'Perfect phone, highly recommended!',
            description: 'The camera is amazing and the performance is smooth. Definitely the best smartphone I have used!',
            date: '25 Apr, 2025',
            time: '11:30 AM',
            status: 'published',
            avatar: 'assets/images/users/user-2.jpg'
        },
        {
            id: 5,
            name: 'Chris Evans',
            email: 'chris.evans@gamestore.com',
            rating: 4.5,
            message: 'Great for gaming but heavy',
            description: "The performance is amazing, but it's a bit too heavy to carry around all day.",
            date: '26 Apr, 2025',
            time: '10:00 AM',
            status: 'pending',
            avatar: 'assets/images/users/user-4.jpg'
        }
    ];
}
